import Player from '@vimeo/player';
import throttle from 'lodash.throttle'

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

const STORAGE_VIDEO_TIME = "videoplayer-current-time"

let currentTime = localStorage.getItem(STORAGE_VIDEO_TIME);

function onPlay(data) {
     localStorage.setItem(STORAGE_VIDEO_TIME, data.seconds)   
};


player.on('timeupdate', throttle(onPlay, 1000));
player.setCurrentTime(currentTime);
