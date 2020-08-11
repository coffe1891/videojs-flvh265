import videojs from '../node_modules/video.js/dist/video.js';
import flvh265 from './plugin.js';

videojs('videojs-flv-h265-player', {
	techOrder: [
		'html5',
		'flvh265'
	],
	params:{
		isLive:false
	}
});
