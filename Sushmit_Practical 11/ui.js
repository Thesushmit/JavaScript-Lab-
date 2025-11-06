// ui.js
import { logEvent } from './helper.js';

export function handleViewportChange() {
  if (window.innerWidth < 600) {
    document.body.style.background = 'linear-gradient(135deg, #e3f2fd, #f0f8ff)';
  } else {
    document.body.style.background = 'linear-gradient(135deg, #f9f9f9, #e1f5fe)';
  }
}

export function addDynamicSessions() {
  const sessionsDiv = document.getElementById('sessions');
  sessionsDiv.addEventListener('click', (e) => {
    if (e.target.classList.contains('session')) {
      alert("You selected: " + e.target.textContent);
      logEvent(`User clicked on ${e.target.textContent}`);
    }
  });
}

export function enableAddSessionButton() {
  const addBtn = document.getElementById('addSessionBtn');
  const sessionsDiv = document.getElementById('sessions');

  addBtn.addEventListener('click', () => {
    const newTime = prompt("Enter session time (HH:MM):", "12:00");
    const newTitle = prompt("Enter session title:", "New Class");

    if (newTime && newTitle) {
      const newDiv = document.createElement('div');
      newDiv.classList.add('session');
      newDiv.dataset.time = newTime;
      newDiv.textContent = `${newTitle} - ${newTime}`;
      sessionsDiv.appendChild(newDiv);
      logEvent(`Added new session: ${newTitle} at ${newTime}`);
    }
  });
}
