const music = document.getElementById('bg-music');

function unmuteMusic() {
    music.muted = false;
    music.volume = 1;
    window.removeEventListener('mousemove', unmuteMusic);
    window.removeEventListener('scroll', unmuteMusic);
    window.removeEventListener('click', unmuteMusic);
    window.removeEventListener('keydown', unmuteMusic);
}

window.addEventListener('mousemove', unmuteMusic, { once: true });
window.addEventListener('scroll', unmuteMusic, { once: true });
window.addEventListener('click', unmuteMusic, { once: true });
window.addEventListener('keydown', unmuteMusic, { once: true });