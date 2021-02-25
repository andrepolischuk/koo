# koo

> Client-side cookies reader & writer

## Install

```sh
npm install --save koo
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
* `samesite`
* `secure`

### koo.remove(name[, options])

Remove cookie

## License

MIT
