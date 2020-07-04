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
`data-field-name`: Name of the field;
`data-field-text`: Name of the attribute of the returned JSON used to be the inplace text;
`data-field-value`: Value of the field;
`data-field-type`: Field type that can be `text` or `select`;
`data-options`: Data options setted on the field with prefix `inplace-`;
`data-url`: URL used to post the data;
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
