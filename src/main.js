import videojs from 'video.js';
import '../dist/videojs-flvh265.js';

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
		let player = videojs('player' + i, {
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
		player.on("error",function(){
			console.log(this.error());
		});
		player.on("loadstart",function(){
			console.log("loadstart");
			console.time()
		});
		player.on("loadedmetadata",function(){
			console.log("loadedmetadata");
			console.timeEnd()
		});
	}

	function createDom(i) {
		return `
		<video id="player${i}" height="${height}" width="${width}" class="video-js vjs-big-play-centered"`
		 +`controls `
		 +`autoplay `
		 +`loop `
		 +`islive `
		 +`ish265 `
		 +`hasvideo `
		 +`hasaudio `
		 +`lib="/node_modules/wx-inline-player-new/example/" `
		+`>`
			+ `<source src="https://ks3-cn-beijing.ksyun.com/ksplayer/h265/outside_demo/v1.1.3/720P2M30fpsh265-wasmtest.flv" type='video/x-flv-h265' />`
			// + `<source src="https://liveplay.xiaoeknow.com/live/5060_dKZTfCE6z2t6ecSX.flv" type='video/x-flv-h265'/>`
			// + `<source src="http://localhost:8080/src/5s_265.flv" type='video/x-flv'/>`
			// + `<source src="http://47.100.255.209:8080/realtime/555566660004-3.265.flv" type='video/x-flv'/>`
		+`</video>`;
	}
})();