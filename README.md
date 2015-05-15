# koo

  > Client-side cookies reader & writer

## Instalation

```sh
$ npm install --save koo
$ component install andrepolischuk/koo
```

## API

### koo.get([name])

  Get cookies

```js
koo.get(); // {hello: 'world'}
koo.get('hello'); // 'world'
```

### koo.set(name, value[, options])

  Set cookie with `options` object:

  * `expires`
  * `path`
  * `domain`
  * `secure`

### koo.remove(name)

  Remove cookie

## License

  MIT
