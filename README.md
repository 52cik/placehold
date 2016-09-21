# placehold

> node placeholder image generator  
> **It will not output PNG, JPG pictures, just SVG.**

[![Linux Build][travis-image]][travis-url]
[![Coverage Status][coveralls-image]][coveralls-url]
[![Dependencies][dependencies-image]][dependencies-url]
[![node][node-image]][node-url]
[![license MIT][license-image]][license-url]

## How to use it

``` sh
$ npm install -g placehold
```

``` sh
$ placehold
```

By default it will listen on port 9191. You can change this by passing in the port as an environment variable:

``` sh
# in linux, mac
$ PORT=1234 placehold

# or in windows
> set PORT=1234
> placehold
```

### Format

```
<http://localhost:9191/[size][/bgcolor][/color][?text=test]>
```

* **size** - 200 or 200x100 to set the width and height.
* **bgcolor** - The CSS background-color property.
* **color** - The CSS color property.
* **text** - The text information.

### Examples

```
<http://localhost:9191/200>
<http://localhost:9191/200x100>
<http://localhost:9191/200x100/eee>
<http://localhost:9191/200x100/369/fff>
<http://localhost:9191/200x100/369/fff?text=hello%20world!>
<http://localhost:9191/?text=hello%20world!>
...
```



[travis-url]: https://travis-ci.org/52cik/placehold
[travis-image]: https://img.shields.io/travis/52cik/placehold/master.svg?label=linux

[coveralls-url]: https://coveralls.io/github/52cik/placehold?branch=master
[coveralls-image]: https://coveralls.io/repos/52cik/placehold/badge.svg?branch=master&service=github

[license-url]: https://opensource.org/licenses/MIT
[license-image]: https://img.shields.io/badge/license-MIT-blue.svg

[dependencies-url]: https://david-dm.org/52cik/placehold
[dependencies-image]: https://img.shields.io/david/52cik/placehold.svg?style=flat

[node-url]: https://nodejs.org
[node-image]: https://img.shields.io/badge/node-%3E%3D%200.10.0-brightgreen.svg
