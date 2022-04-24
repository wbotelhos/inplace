# Inplace - An inplace editor

[![CI](https://github.com/wbotelhos/inplace/workflows/CI/badge.svg)](https://github.com/wbotelhos/inplace/actions)
[![Gem Version](https://badge.fury.io/rb/inplace.svg)](https://badge.fury.io/rb/inplace)
[![Maintainability](https://api.codeclimate.com/v1/badges/564bb28fc6575ef992dc/maintainability)](https://codeclimate.com/github/wbotelhos/inplace/maintainability)
[![Sponsor](https://img.shields.io/badge/sponsor-%3C3-green)](https://www.patreon.com/wbotelhos)

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
