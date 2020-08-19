# videojs-flvh265

This is a Video.js&#39; Tech for FLV + H265.
Make [Video.js](http://videojs.com/) has the ability to play flv + live/local video encoded with h264/h265.

## Features
Format↓  | H.264 | H.265 | live stream | local file | seek | comment
---------|-------|-------|-------------|------------|------|-------------
**.flv** | √     | √     | √           | √          | ×    |
**.mp4** | ×     | ×     | ×           | ×          | ×    | comming soon
**.ts**  | ×     | ×     | ×           | ×          | ×    | no plan

## Installation

```sh
npm install --save videojs-flvh265
```

## Four custom attributes for `<video>` Tag
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

## DEMO

```sh
npm run serve
```

## Quick start

This is the simplest case. Get the script in whatever way you prefer and include the plugin _after_ you include [video.js][videojs], so that the `videojs` global is available.

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
    pictureInPictureToggle:false //we don't support pictureInPicture now
  }
});
</script>
```


## License

MIT. Copyright (c) [coffe1891](https://github.com/coffe1891).

## Contact me

* Email: kai521@gmail.com
* Webchat: kenny2019