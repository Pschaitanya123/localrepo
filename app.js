// For play/pause functionality
const playPauseButton = document.querySelector('.play-pause');
let isPlaying = false;

playPauseButton.addEventListener('click', () => {
  isPlaying = !isPlaying;
  if (isPlaying) {
    playPauseButton.textContent = 'Pause';
    // Add logic to play the track
  } else {
    playPauseButton.textContent = 'Play';
    // Add logic to pause the track
  }
});
