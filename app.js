var video = document.querySelector('video');
var controls = document.querySelector('.player__controls');
var progress = document.querySelector('.progress');
var progressFill = document.querySelector('.progress__filled');
var play = document.querySelector('.player__button');
var volume = document.querySelector('[name="volume"]');
var rate = document.querySelector('[name="playbackRate"]');
var rewind = document.querySelector('[data-skip ="-10"]');
var forward = document.querySelector('[data-skip="25"]');

function pauseButtonToggle() {
  if ( video.paused ) {
    play.textContent = '►';
  } else {
    play.textContent = '||';
  }
}

function playVideo() {
  if ( video.paused ) {
    video.play();
  } else {
    video.pause();
  }
  pauseButtonToggle();
}

play.addEventListener( 'click', playVideo );
video.addEventListener( 'click', playVideo );

function adjustVolume() {
  video.volume = volume.value;
}

volume.addEventListener( 'input', adjustVolume );