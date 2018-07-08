# Inplace - An inplace editor

[![Build Status](https://img.shields.io/travis/wbotelhos/inplace/master.svg)](https://travis-ci.org/wbotelhos/inplace)
[![NPM Version](https://badge.fury.io/js/inplace.svg)](https://badge.fury.io/js/inplace)
[![Dependency](https://david-dm.org/wbotelhos/inplace.svg)](https://david-dm.org/wbotelhos/inplace)
[![Dev Dependency](https://david-dm.org/wbotelhos/inplace/dev-status.svg)](https://david-dm.org/wbotelhos/inplace#info=devDependencies)
[![Code Climate](https://codeclimate.com/github/wbotelhos/inplace.png)](https://codeclimate.com/github/wbotelhos/inplace)
[![Support](https://img.shields.io/badge/donate-%3C3-brightgreen.svg)](https://liberapay.com/wbotelhos)

Inplace is an tiny inplace editor to enable a quick ajax update with no need to create a form.

## Options

```js
buttonOrder:   // the cancel and save order button on screen
cancel:        // enables cancel button creation
cancelClass:   // the cancel button class
cancelValue:   // the cancel button label
checkable:     // html elements that will listen check change
fieldClass:    // the field class
fieldName:     // the field name
fieldTemplate: // template used to build custom names format
fieldType:     // the field type
method:        // method used on ajax request
save:          // enables save button creation
saveClass:     // the save button class
saveValue:     // the save button label
selectable:    // html elements that will listen select change
typeful:       // html elements that will listen enter change
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
$('.inplace').inplace({ url: 'save' });
```

## Functions

```js
```

## Contributors

[Check it out](http://github.com/wbotelhos/inplace/graphs/contributors)
