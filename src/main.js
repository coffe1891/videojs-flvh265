import videojs from '../node_modules/video.js/dist/video.js';
import flvh265 from './plugin.js';

(() => {
	let num = 1;
	let html = '';
	let height=200;
	let width=360;

	for (let i = 0; i < num; i++) {
		html += createDom(i);
	}
	document.getElementById('cotainer').innerHTML = html;

	for (let i = 0; i < num; i++) {
		videojs('player' + i, {
			techOrder: [
				'html5',
				'flvh265'
			],
			autoplay:true,
			controlBar:{
				// progressControl:false,
				pictureInPictureToggle:false
			},
			params:{
				isLive:false
			}
		});
	}

	function createDom(i) {
		return `
		<video id="player${i}" height="${height}" width="${width}" class="video-js vjs-big-play-centered" controls>
			<!-- <source src="https://ks3-cn-beijing.ksyun.com/ksplayer/h265/outside_demo/v1.1.3/720P2M30fpsh265-wasmtest.flv" type='video/x-flv-h265' /> -->
			<!-- <source src="https://liveplay.xiaoeknow.com/live/5060_dKZTfCE6z2t6ecSX.flv" type='video/x-flv-h265'/> -->
      		<source src="http://localhost:8080/src/5s.flv" type='video/x-flv-h265'/>
		</video>`
	}
})();