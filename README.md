# Inplace - An inplace editor

[![Build Status](https://img.shields.io/travis/wbotelhos/inplace/master.svg)](https://travis-ci.org/wbotelhos/inplace)
[![NPM Version](https://badge.fury.io/js/inplace.svg)](https://badge.fury.io/js/inplace)
[![Dependency](https://david-dm.org/wbotelhos/inplace.svg)](https://david-dm.org/wbotelhos/inplace)
[![Dev Dependency](https://david-dm.org/wbotelhos/inplace/dev-status.svg)](https://david-dm.org/wbotelhos/inplace#info=devDependencies)
[![Code Climate](https://codeclimate.com/github/wbotelhos/inplace.png)](https://codeclimate.com/github/wbotelhos/inplace)
[![Support](https://img.shields.io/badge/donate-%3C3-brightgreen.svg)](https://www.patreon.com/wbotelhos)

Inplace is an tiny inplace editor to enable a quick ajax update with no need to create a form.

## Options

```js
buttonOrder:   ['cancel', 'save']                // the cancel and save order button on screen
cancel:        true                              // enables cancel button creation
cancelClass:   'inplace__cancel'                 // the cancel button class
cancelValue:   'Cancel'                          // the cancel button label
checkable:     ['checkbox', 'radio']             // html elements that will listen check change
fieldClass:    'inplace__field'                  // the field class
fieldName:     undefined                         // the field name
fieldTemplate: '{name}'                          // template used to build custom names format
fieldType:     'text'                            // the field type
method:        'PATCH'                           // method used on ajax request
save:          true                              // enables save button creation
saveClass:     'inplace__save'                   // the save button class
saveValue:     'Save'                            // the save button label
selectable:    ['select-one', 'select-multiple'] // html elements that will listen select change
typeful:       [                                 // html elements that will listen enter change
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
```

## Usage

You declare an element with optional data atributes:

```html
<div
  class="inplace"
  data-attributes='{ "maxlength": 2 }'
  data-field-name="number"
  data-field-value="42"
  data-url="/update"
>42</div>
```

On JS you can declare attributes too, but data attributes has priority:

```js
$('.inplace').inplace({ url: '/save' });
```
