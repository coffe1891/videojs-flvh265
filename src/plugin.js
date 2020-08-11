import videojs from '../node_modules/video.js/dist/video.js';
import {
  version as VERSION
} from '../package.json';
import WXInlinePlayer from 'wx-inline-player-new';
import window from 'global/window';

const Tech = videojs.getComponent('Tech');
const Dom = videojs.dom;
const Url = videojs.url;
const createTimeRange = videojs.createTimeRange;
const mergeOptions = videojs.mergeOptions;

const navigator = window && window.navigator || {};

/**
 * Media Controller - Wrapper for Media API
 *
 * @mixes WXInlinePlayer
 * @extends Tech
 */
class FlvH265 extends Tech {

  constructor(options, ready) {
    super(options, ready);

    let self = this;

    self.debug = true;

    // Merge default parames with ones passed in
    const params = mergeOptions({
      asmUrl: './node_modules/wx-inline-player-new/lib/prod.h265.asm.combine.js',
      wasmUrl: './node_modules/wx-inline-player-new/lib/prod.h265.wasm.combine.js',
      url: options.source.src,
      $container: self.el_,
      hasVideo: true,
      hasAudio: true,
      volume: 1.0,
      muted: options.muted !== undefined ? options.muted : false,
      autoplay: options.autoplay,
      loop: options.loop !== undefined ? options.loop : false,
      isLive: true,
      chunkSize: 128 * 1024,
      preloadTime: 5e2,
      bufferingTime: 1e3,
      cacheSegmentCount: 64,
      customLoader: null
    }, options.params);

    WXInlinePlayer.ready(params).then(player => {
      self.triggerReady();
      self.player = player;
      self.initEvent_(params);
    });
  }

  /**
   * Create the `FlvH265` Tech's DOM element.
   *
   * @return {Element}
   *         The element that gets created.
   */
  createEl() {
    let self = this;
    const options = self.options_;

    // Generate ID for canvas object
    const objId = options.techId;

    self.el_ = FlvH265.embed(objId);

    self.el_.tech = self;

    return self.el_;
  }

  initEvent_(params) {
    let self = this;
    let $canvas = self.$canvas = params.$container;
    let videoHeight = self.el_.parentElement.offsetHeight;
    let videoWidth = self.el_.parentElement.offsetWidth;
    //set the canvas' height and width
    self.player.on('mediaInfo', mediaInfo => {
      self.log()(`mediaInfo`, mediaInfo, videoHeight, videoWidth);
      const {
        onMetaData
      } = mediaInfo;
      //1.下面这里指定高宽，其实是解码器绘制的真实的高宽
      $canvas.height = onMetaData.height || videoHeight;
      $canvas.width = onMetaData.width || videoWidth;
      for (let i = 0; i < onMetaData.length; i++) {
        if ('height' in onMetaData[i]) {
          $canvas.height = onMetaData[i].height;
        } else if ('width' in onMetaData[i]) {
          $canvas.width = onMetaData[i].width;
        }
      }
      //2.这里指定高宽，是拉伸canvas以便填满指定高宽的矩形
      $canvas.style.height = '100%';//videoHeight + `px`;
      $canvas.style.width = '100%';//videoWidth + `px`;
      self.log()(`mediaInfo`, $canvas.height, $canvas.width);
    });
  }

  /**
   * Called by {@link Player#play} to play using the `FlvH265` Tech.
   */
  play() {
    this.player.play();
  }

  /**
   * Called by {@link Player#pause} to pause using the `FlvH265` `Tech`.
   */
  pause() {
    this.player.pause();
  }

  paused() {
    return this.player.state == 'paused';
  }

  /**
   * Get the current playback time in seconds
   *
   * @return {number}
   *         The current time of playback in seconds.
   */
  currentTime() {
    return this.player.getCurrentTime();
  }

  /**
   * Get the total duration of the current media.
   *
   * @return {number}
   8          The total duration of the current media.
   */
  duration() {
    return this.player.getAvaiableDuration();
  }

  /**
   * Get and create a `TimeRange` object for buffering.
   *
   * @return {TimeRange}
   *         The time range object that was created.
   */
  buffered() {
    return createTimeRange(0, 1024*1024);
  }

  /**
   * Get fullscreen support
   *
   * @return {boolean}
   *         The `FlvH265` tech support fullscreen
   */
  supportsFullScreen() {
    return true;
  }

  enterFullScreen(){
    self.$canvas.requestFullscreen();
  }

  dispose() {
    this.player && this.player.destroy();
    super.dispose();
  }

  setVolume(){}

  muted(){}

  volume(){
    return 1.0;
  }

  ended(){}

  log() {
    if (this.debug) {
      return window.console.log;
    } else return () => {}
  }

}

/**
 * An array of events available on the `FlvH265` tech.
 *
 * @private
 * @type {Array}
 */
FlvH265.Events = [
  "loadstart",
  "play",
  "pause",
  "playing",
  "ended",
  "volumechange",
  "durationchange",
  "error"
];

/**
 * Check if the `FlvH265` tech is currently supported.
 *
 * @return {boolean}
 */
FlvH265.isSupported = function () {
  return WXInlinePlayer.isSupport();
};

/*
 * Determine if the specified media type can be played back
 * by the Tech
 *
 * @param  {String} type  A media type description
 * @return {String}         'probably', 'maybe', or '' (empty string)
 */
FlvH265.canPlayType = function (type) {
  return (type.indexOf('/x-flv-h265') !== -1) ? 'probably' : (type.indexOf('/x-flv') !== -1) ? 'maybe' : '';
};

/*
 * Check if the tech can support the given source
 * @param  {Object} srcObj  The source object
 * @return {String}         'probably', 'maybe', or '' (empty string)
 */
FlvH265.canPlaySource = function (srcObj) {
  return FlvH265.canPlayType(srcObj.type);
};

FlvH265.embed = function (objId) {
  const code = `<canvas id="${objId}"></canvas>`;

  // Get element by embedding code and retrieving created element
  const obj = Dom.createEl('div', {
    innerHTML: code
  }).childNodes[0];

  return obj;
};

Tech.registerTech('Flvh265', FlvH265);
export default FlvH265;