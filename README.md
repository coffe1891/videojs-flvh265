# videojs-flvh265

videojs&#39; Tech for flv+h265.
Make [Video.js](http://videojs.com/) has the ability to play .flv live or local video encoded with h264 or h265.

## Installation

```sh
npm install --save videojs-flvh265
```

## Four custom attributes for `<video>` Tag
```JavaScript
ish265 // boolean: true means that video is encoded with h265, false means h264.
islive  // boolean
hasvideo  // boolean
hasaudio  // boolean
```

## Quick start

To include videojs-flvh265 on your website or web application, use any of the following methods.

### 1) ECMAScript ( Recommend)
```html
<link href="node_modules/video.js/dist/video-js.css" rel="stylesheet">
<video id="player" 
  height="300" 
  width="600" 
  class="video-js vjs-big-play-centered"
  controls
  autoplay
  loop
  ish265
  islive
  hasvideo
  hasaudio
>
  <source src="http://localhost:8080/src/10.flv" type='video/x-flv'/>
</video>`
<script>
import videojs from './node_modules/video.js/dist/video.js';
import './node_modules/videojs-flvh265/dist/videojs-flvh265.js';
videojs('player', {
  techOrder: [
    'html5',
    'flvh265'
  ],
  controlBar:{
    pictureInPictureToggle:false //we don't support pictureInPicture now
  }
});
</script>
```

### 2) `<script>` Tag

This is the simplest case. Get the script in whatever way you prefer and include the plugin _after_ you include [video.js][videojs], so that the `videojs` global is available.

```html
<link href="node_modules/video.js/dist/video-js.css" rel="stylesheet">
<video id="player" 
  height="300" 
  width="600" 
  class="video-js vjs-big-play-centered"
  controls
  autoplay
  loop
  ish265
  islive
  hasvideo
  hasaudio
>
  <source src="http://localhost:8080/src/10.flv" type='video/x-flv'/>
</video>`
<script src="node_modules/video.js/dist/video.js"></script>
<script src="node_modules/videojs-flvh265/dist/videojs-flvh265.js"></script>
<script>
videojs('player', {
  techOrder: [
    'html5',
    'flvh265'
  ],
  controlBar:{
    pictureInPictureToggle:false //we don't support pictureInPicture now
  }
});
</script>
```


## License

MIT. Copyright (c) [coffe1891](https://github.com/coffe1891).
