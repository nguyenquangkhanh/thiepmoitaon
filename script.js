const name = new URLSearchParams(window.location.search).get('name');
const guest = name?.replace(/\s+/gu, ' ').trim();
if (guest) {
  const displayName = Array.from(guest).slice(0, 80).join('');
  for (const label of document.querySelectorAll('.recipient')) {
    label.textContent = displayName;
    label.classList.toggle('compact', displayName.length > 28);
  }
}

const music = document.querySelector('#nhac-nen');
const musicButton = document.querySelector('.music');
musicButton.hidden = false;

function playMusic() {
  music.play().catch(() => {
    // Keep manual playback available if the browser declines playback.
    musicButton.setAttribute('aria-pressed', 'false');
  });
}

document.querySelector('.open').addEventListener('click', playMusic, {once: true});
musicButton.addEventListener('click', () => {
  if (music.paused) {
    playMusic();
  } else {
    music.pause();
  }
});
music.addEventListener('play', () => musicButton.setAttribute('aria-pressed', 'true'));
music.addEventListener('pause', () => musicButton.setAttribute('aria-pressed', 'false'));
