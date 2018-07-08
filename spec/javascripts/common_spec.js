describe('common', function() {
  'use strict';

  beforeEach(function() {
    fixture.load('default.html');
  });

  it ('is chainable', function() {
    // given
    var self = $('.inplace');

    // when
    var ref = self.inplace();

    // then
    expect(ref).toBe(self);
  });

  it ('has the right default options', function() {
    // given
    var options = $.inplace

    // when

    // then
    expect(options.buttonOrder).toEqual(['cancel', 'save']);
    expect(options.cancel).toEqual(true);
    expect(options.cancelClass).toEqual('inplace__cancel');
    expect(options.cancelValue).toEqual('Cancel');
    expect(options.checkable).toEqual(['checkbox', 'radio']);
    expect(options.fieldClass).toEqual('inplace__field');
    expect(options.fieldName).toEqual(undefined);
    expect(options.fieldTemplate).toEqual('{name}');
    expect(options.fieldType).toEqual('text');
    expect(options.method).toEqual('PATCH');
    expect(options.save).toEqual(true);
    expect(options.saveClass).toEqual('inplace__save');
    expect(options.saveValue).toEqual('Save');
    expect(options.selectable).toEqual(['select-one', 'select-multiple']);

    expect(options.typeful).toEqual([
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
    ]);
  });

  it ('receives the bind indicator', function() {
    // given
    var self = $('.inplace');

    // when
    self.inplace();

    // then
    expect(self.data('inplace')).toBeTruthy();
  });
});
