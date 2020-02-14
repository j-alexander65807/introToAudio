(() => {
  //make a ref to all buttons
  const playButtons = document.querySelectorAll('.playButton'),
        pauseButtons = document.querySelectorAll('.pauseButton'),
        rwButtons = document.querySelectorAll('.rwButton'),
        audioElement = document.querySelector('audio');

  let globalPaused = false;

  // play the song associated with the playButtons
  function playTrack() {
    if (globalPaused) {
      console.log ('paused');
      resumeTrack();
      return;
    }
    //debugger;
    let audioSource = this.dataset.trackref;

    //set the audio audio Source
    audioElement.src = `audio/${audioSource}.mp3`;

    //load and play interval
    audioElement.load();

  }

  function resumeTrack() {
    globalPaused = false;
    audioElement.play();
  }

  function pauseTrack() {
    audioElement.pause();
    globalPaused = true;
  }
  function rwTrack() {
    audioElement.currentTime = 0;
  }


  //process the playButtons and add event handler
  playButtons.forEach(button => button.addEventListener("click", playTrack));
  pauseButtons.forEach(button => button.addEventListener("click", pauseTrack));
  rwButtons.forEach(button => button.addEventListener("click", rwTrack));

})();
