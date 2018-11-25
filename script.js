  function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
  }

  function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if (!audio) return;

    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
  }

  const a = Array.from(document.querySelectorAll('.aKey'));
  a.forEach(key => key.addEventListener('transitionend', removeTransition));
  window.addEventListener('keydown', playSound);

  const yellow = Array.from(document.querySelectorAll('.yellowKey'));
  yellow.forEach(key => key.addEventListener('transitionend', removeTransition));
  window.addEventListener('keydown', playSound);