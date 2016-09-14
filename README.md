# node-placehold

> node placeholder image generator
> **It will not output PNG, JPG pictures, just SVG.**

## How to use it

``` sh
$ npm install -g 52cik/node-placehold
```

``` sh
$ node-placehold
```

By default it will listen on port 9191. You can change this by passing in the port as an environment variable:

``` sh
# in linux, mac
$ PORT=1234 node-placehold

# or in windows
> set PORT=1234
> node-placehold
```

### Format

```
http://localhost:9191/[size][/bgcolor][/color][?text=test]
```

* **size** - 200 or 200x100 to set the width and height.
* **bgcolor** - The CSS background-color property.
* **color** - The CSS color property.
* **text** - The text information.

### Examples

```
http://localhost:9191/200
http://localhost:9191/200x100
http://localhost:9191/200x100/eee
http://localhost:9191/200x100/369/fff
http://localhost:9191/200x100/369/fff?text=hello%20world!
http://localhost:9191/?text=hello%20world!
...
```
