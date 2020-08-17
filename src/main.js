import videojs from '../node_modules/video.js/dist/video.js';
import './plugin.js';

(() => {
	let num = 4;
	let html = '';
	let height=300;
	let width=540;

	for (let i = 0; i < num; i++) {
		html += createDom(i);
	}
	document.getElementById('container').innerHTML = html;

	for (let i = 0; i < num; i++) {
		videojs('player' + i, {
			techOrder: [
				'html5',
				'flvh265'
			],
			controlBar:{
				pictureInPictureToggle:false
			}
		});
	}

	function createDom(i) {
		return `
		<video id="player${i}" height="${height}" width="${width}" class="video-js vjs-big-play-centered"
		 controls
		 loop
		 ish265
		 islive
		 hasvideo
		 hasaudio
		>
			<!-- <source src="https://ks3-cn-beijing.ksyun.com/ksplayer/h265/outside_demo/v1.1.3/720P2M30fpsh265-wasmtest.flv" type='video/x-flv-h265' /> -->
			<!-- <source src="https://liveplay.xiaoeknow.com/live/5060_dKZTfCE6z2t6ecSX.flv" type='video/x-flv-h265'/> -->
			<source src="http://localhost:8080/src/5s_265.flv" type='video/x-flv'/>
			<!-- <source src="http://localhost:8080/src/5s_264.flv" type='video/x-flv'/> -->
		</video>`
	}
})();