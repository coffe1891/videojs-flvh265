# videojs-flvh265

videojs&#39; Tech for flv+h265.
Make [videojs](http://videojs.com/) has the ability to play .flv encoded with h264 or h265.

## Installation

```sh
npm install --save videojs-flvh265
```

## Usage

To include videojs-flvh265 on your website or web application, use any of the following methods.

### 1) ECMAScript ( Recommend)
```html
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
<script src="./node_modules/video.js/dist/video.js"></script>
<script src="./node_modules/videojs-flvh265/dist/videojs-flvh265.js"></script>
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

MIT. Copyright (c) coffe1891 &lt;kai.ma@163.com&gt;
