var video = document.querySelector('video');
var progress = document.querySelector('.progress');
var progressFill = document.querySelector('.progress__filled');
var play = document.querySelector('.player__button');
var volume = document.querySelector('[name="volume"]');
var rate = document.querySelector('[name="playbackRate"]');
var rewind = document.querySelector('[data-skip ="-10"]');
var forward = document.querySelector('[data-skip="25"]');
var remainder = document.querySelector( '.progress__remainder' );
var remainderInterval = setInterval(displayRemainder, 1000);

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

function timeRemaining() {
  return ( video.duration - video.currentTime );
}


function convertSeconds(){
  let time = timeRemaining();
  let minutes = Math.floor( time / 60 );
  let seconds = Math.ceil( time % 60 );
  return ( `${minutes}:${seconds}` );
}

function displayRemainder() { remainder.textContent = convertSeconds(); }

function setProgressFill() {
  let remaining = 100 - ( ( timeRemaining() / video.duration ) * 100 ).toFixed(2); 
  progressFill.style.flexBasis = `${remaining}%`;
}

setInterval(setProgressFill, 1000);

function setPlayBackRate() {
  video.playbackRate = rate.value;
}
rate.addEventListener( 'input', setPlayBackRate );

function rewindTenSeconds() {
  video.currentTime -= 10;
  setProgressFill();
}
rewind.addEventListener( 'click', rewindTenSeconds );

function fastForward() {
  video.currentTime += 25;
  setProgressFill();
}
forward.addEventListener( 'click', fastForward );