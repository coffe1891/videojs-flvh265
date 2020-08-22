# videojs-flvh265

This is a Video.js [Tech](https://docs.videojs.com/tutorial-tech_.html) for FLV + H265.
Make [Video.js](https://videojs.com/) has the ability to play flv + live/local video encoded with h264/h265.It's decoder comes from [WXInlinePlayer](https://github.com/coffe1891/WXInlinePlayer).

## Features
Format↓  | H.264 | H.265 | live stream | local file | seek | comment
---------|-------|-------|-------------|------------|------|-------------
**.flv** | √     | √     | √           | √          | ×    |
**.mp4** | ×     | ×     | ×           | ×          | ×    | coming soon
**.ts**  | ×     | ×     | ×           | ×          | ×    | no plan

## Installation

```sh
npm install --save videojs-flvh265
```

## Custom attributes for `<video>` Tag
```JavaScript
ish265    // boolean  : true/false
          //            true means that video is encoded with h265, false means h264.

islive    // boolean

hasvideo  // boolean

hasaudio  // boolean

lib       // string   : Folder path of libs.
          //            Default value of lib is "/node_modules/wx-inline-player-new/example/".
          //            Most of the time, you must set libs folder path,just copy these libs from 
          //            "/node_modules/wx-inline-player-new/example/" to your final folder,then set
          //            lib="the final folder path",e.g. lib="https://www.domain.com/libs/"
```

## Localhost DEMO

```sh
npm run serve
```

## Quick start

This is the simplest case. Get the script in whatever way you prefer and include the plugin _after_ you include **video.js**, so that the `videojs` global is available.

### 1. Using `<script>` Tag
```html
<link href="/node_modules/video.js/dist/video-js.css" rel="stylesheet">
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
  <source src="http://localhost:8080/src/5s_265.flv" type='video/x-flv'/>
</video>`
<script src="/node_modules/video.js/dist/video.js"></script>
<script src="/node_modules/videojs-flvh265/dist/videojs-flvh265.js"></script>
<script>
videojs('player', {
  techOrder: [
    'html5',
    'flvh265'
  ],
  controlBar:{
    pictureInPictureToggle:false //sorry,we don't support pictureInPicture now
  }
});
</script>
```

### 2. Using ECMAScript `import` and Webpack
And this javascript library supports UMD also.
```javascript
import videojs from 'video.js';
import 'videojs-flvh265';
videojs('player', {
  techOrder: [
    'html5',
    'flvh265'
  ],
  controlBar:{
    pictureInPictureToggle:false //sorry,we don't support pictureInPicture now
  }
});
```


## License

GPL Version 2. Copyright (c) [coffe1891](https://github.com/coffe1891).

## Contact me

* Email: kai521@gmail.com
* Webchat: kenny2019
