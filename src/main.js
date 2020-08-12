import videojs from '../node_modules/video.js/dist/video.js';
import flvh265 from './plugin.js';


for (let i = 0; i < 9; i++) {

	videojs('player' + i, {
		techOrder: [
			'html5',
			'flvh265'
		],
		params: {
			isLive: false
		}
	});

}

function createDom(i){
	return `<video id="player0" height="200" width="360" class="video-js vjs-big-play-centered" controls>
	<!-- <source src="https://ks3-cn-beijing.ksyun.com/ksplayer/h265/outside_demo/v1.1.3/720P2M30fpsh265-wasmtest.flv" type='video/x-flv-h265'> -->
	<source src="http://localhost:8080/src/10.flv" type='video/x-flv-h265'>
  </video>`
}