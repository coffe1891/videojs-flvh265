import videojs from 'video.js';
import './plugin.js';

(() => {
	let num = 9;
	let html = '';
	let height=200;
	let width=360;

	for (let i = 0; i < num; i++) {
		html += createDom(i);
	}
	document.getElementById('container').innerHTML = html;

	videojs.options.liveui=true;
	for (let i = 0; i < num; i++) {
		videojs('player' + i, {
			techOrder: [
				'html5',
				'flvh265'
			],
			liveui:true,
			controlBar:{
				volumePanel:{inline:false},
				pictureInPictureToggle:false
			}
		});
	}

	function createDom(i) {
		return `
		<video id="player${i}" height="${height}" width="${width}" class="video-js vjs-big-play-centered"`
		 +`controls `
		//  +`autoplay `
		 +`loop `
		 +`ish265 `
		 +`hasvideo `
		 +`hasaudio `
		 +`lib="/node_modules/wx-inline-player-new/example/" `
		+`>`
			+ `<source src="https://ks3-cn-beijing.ksyun.com/ksplayer/h265/outside_demo/v1.1.3/720P2M30fpsh265-wasmtest.flv" type='video/x-flv-h265' />`
			// + `<source src="https://liveplay.xiaoeknow.com/live/5060_dKZTfCE6z2t6ecSX.flv" type='video/x-flv-h265'/>`
			// + `<source src="src/5s_265.flv" type='video/x-flv'/>`
			// + `<source src="src/5s_264.flv" type='video/x-flv'/>`
		+`</video>`;
	}
})();