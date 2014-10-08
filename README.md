# Koo

  Client-side cookies reader & writer

## Instalation

  Via script tag in page sources:

```html
<script src="/static/js/koo.min.js">
```

## API

### koo.get()

  Get all document cookies object

```js
{
  'name1' : 'value1',
  'name2' : 'value2',
  ...
  'nameN' : 'valueN'
}
```

### koo.get(name)

  Get defined cookie by name

### koo.set(name, value[, options])

  Set cookie.

  `options` is additional parameters object:

  * `expires`
  * `path`
  * `domain`
  * `secure`

### koo.remove(name)

  Remove cookie by name