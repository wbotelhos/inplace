/*!
 * Inplace - An inplace editor
 *
 * The MIT License
 *
 * @author:  Washington Botelho
 * @doc:     wbotelhos.com/inplace
 * @version: 0.1.0
 *
 */

;
(function($) {
  'use strict';

  $.inplace = {
    buttonOrder:   ['cancel', 'save'],
    cancel:        true,
    cancelClass:   'inplace__cancel',
    cancelValue:   'Cancel',
    checkable:     ['checkbox', 'radio'],
    fieldClass:    'inplace__field',
    fieldName:     undefined,
    fieldTemplate: '{name}',
    fieldType:     'text',
    method:        'PATCH',
    save:          true,
    saveClass:     'inplace__save',
    saveValue:     'Save',
    selectable:    ['select-one', 'select-multiple'],

    typeful: [
      'color',
      'date',
      'datetime',
      'datetime-local',
      'email',
      'hidden',
      'month',
      'number',
      'password',
      'range',
      'search',
      'tel',
      'text',
      'textarea',
      'time',
      'url',
      'week'
    ]
  }

  $.fn.inplace = function(options) {
    return this.each(function() {
      return (new $.inplace.Inplace(this, options))._create();
    });
  }

  $.inplace.Inplace = (function() {
    var Inplace = function(element, options) {
      this.el      = $(element);
      this.element = element;

      this.options = $.extend({}, $.inplace, options, this.el.data());
    }

    Inplace.prototype = {
      _activate: function() {
        var field = this._field();

        this
          .el
          .off('click.inplace.el')
          .addClass('inplace--active')
          .html(field)
          .trigger('inplace:activate', this.element);

        for (var i = 0; i < this.options.buttonOrder.length; i++) {
          var value = this.options.buttonOrder[i];

          if (this.options[value]) {
            this._build(value, 'button').appendTo(this.el);
          }
        }

        var actived = $('.inplace--active').not(this.el);

        for (var i = 0; i < actived.length; i++) {
          actived.data('inplace')._deactivate();
        }

        field.trigger('focus');
      },

      _bindCancel: function() {
        this.el.on('click.inplace.cancel', '[data-inplace-cancel]', this._deactivate.bind(this));
      },

      _bindClick: function() {
        this.el.on('click.inplace.el', this._activate.bind(this));
      },

      _bindField: function() {
        var typeful = [];

        for (var i = 0; i < $.inplace.typeful.length; i++) {
          typeful.push('[type="' + $.inplace.typeful[i] + '"]');
        }

        var fields = typeful.join(',');

        this._bindKey('keypress.inplace.field', 13, fields, this._request.bind(this));
        this._bindKey('keyup.inplace.field', 27, fields, this._deactivate.bind(this));
      },

      _bindKey: function(event, keycode, fields, callback) {
        this.el.on(event, fields, function(evt) {
          if ((evt.which || evt.keyCode) === keycode) {
            callback();
          }
        });
      },

      _bindSave: function() {
        this.el.on('click.inplace.save', '[data-inplace-save]', this._request.bind(this));
      },

      _build: function(kind, type) {
        var options = {
          'class': this.options[kind + 'Class'],
          type:    type,
          value:   this.options[kind + 'Value']
        };

        if (kind === 'field') {
          var attributes = this.el.data('attributes');

          if (attributes) {
            options = $.extend({}, options, attributes);
          }
        }

        options['data-inplace-' + kind] = '';

        return $('<input />', options);
      },

      _create: function() {
        this._bindClick();
        this._bindField();
        this._bindSave();
        this._bindCancel();

        this.el.data('inplace', this);

        return this;
      },

      _deactivate: function() {
        this._bindClick();

        this
          .el
          .removeClass('inplace--active')
          .html(this.element.getAttribute('data-field-value'))
          .trigger('inplace:deactivate', this.element);
      },

      _done: function(json) {
        this._deactivate();

        this.options.fieldValue = json[this.options.fieldName];

        this.element.setAttribute('data-field-value', this.options.fieldValue);
        this.el.trigger('inplace:done', json);
      },

      _field: function() {
        return this._build('field', this.options.fieldType);
      },

      _request: function() {
        $.ajax(this._requestOptions()).done(this._done.bind(this));
      },

      _requestOptions: function() {
        var data = {};
        var name = this.options.fieldTemplate.replace('{name}', this.options.fieldName);

        data[name] = this.el.find('[data-inplace-field]').val();

        return { data: data, method: this.options.method, url: this.options.url };
      }
    };

    return Inplace;
  })();
})(jQuery);
