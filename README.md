# videojs-flvh265

videojs&#39; Tech for flv+h265

## Installation

```sh
npm install --save videojs-flvh265
```

## Usage

To include videojs-flvh265 on your website or web application, use any of the following methods.

### `<script>` Tag

This is the simplest case. Get the script in whatever way you prefer and include the plugin _after_ you include [video.js][videojs], so that the `videojs` global is available.

```html
<script src="//path/to/video.min.js"></script>
<script src="//path/to/videojs-flvh265.min.js"></script>
<script>
  var player = videojs('my-video');

  player.flvH265();
</script>
```

### Browserify/CommonJS

When using with Browserify, install videojs-flvh265 via npm and `require` the plugin as you would any other module.

```js
var videojs = require('video.js');

// The actual plugin function is exported by this module, but it is also
// attached to the `Player.prototype`; so, there is no need to assign it
// to a variable.
require('videojs-flvh265');

var player = videojs('my-video');

player.flvH265();
```

### RequireJS/AMD

When using with RequireJS (or another AMD library), get the script in whatever way you prefer and `require` the plugin as you normally would:

```js
require(['video.js', 'videojs-flvh265'], function(videojs) {
  var player = videojs('my-video');

  player.flvH265();
});
```

## License

MIT. Copyright (c) coffe1891 &lt;kai.ma@163.com&gt;


[videojs]: http://videojs.com/
