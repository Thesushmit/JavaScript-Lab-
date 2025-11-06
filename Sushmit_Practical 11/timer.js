// timer.js
import { formatTime, logEvent } from './helper.js';

export function startCountdown(duration, display) {
  let time = duration;

  const timer = setInterval(() => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    // Change color when less than 1 minute left
    if (time < 60) {
      display.style.color = '#d32f2f'; // Red warning
    } else {
      display.style.color = '#1565c0'; // Blue default
    }

    display.textContent = `Next session starts in ${formatTime(minutes, seconds)}`;
    time--;

    if (time < 0) {
      clearInterval(timer);
      display.textContent = "Session Started!";
      display.style.color = '#2e7d32'; // Green when done
      logEvent("Countdown completed");
    }
  }, 1000);
}

export function highlightActiveSession() {
  const sessions = document.querySelectorAll('.session');
  const now = new Date();
  const currentHour = now.getHours();

  sessions.forEach(session => {
    const hour = parseInt(session.dataset.time.split(':')[0]);
    if (hour === currentHour) {
      session.classList.add('active');
    } else {
      session.classList.remove('active');
    }
  });
}
