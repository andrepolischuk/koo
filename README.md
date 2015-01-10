# Koo

  Client-side cookies reader & writer

## Instalation

  Browser:

```html
<script src="https://cdn.rawgit.com/andrepolischuk/koo/1.0.1/koo.min.js"></script>
```

  Component(1):

```sh
$ component install andrepolischuk/koo
```

  Npm:

```sh
$ npm install koo
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
