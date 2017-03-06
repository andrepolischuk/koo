# koo

  > Client-side cookies reader & writer

## Install

```sh
npm install --save koo
```

```sh
component install andrepolischuk/koo
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

### koo.remove(name[, options])

  Remove cookie

## License

  MIT
