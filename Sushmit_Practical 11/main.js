// main.js
import { startCountdown, highlightActiveSession } from './timer.js';
import { handleViewportChange, addDynamicSessions, enableAddSessionButton } from './ui.js';

// Select countdown display
const countdownDisplay = document.getElementById('countdown');

// Start countdown for 5 minutes
startCountdown(300, countdownDisplay);

// Highlight current session every minute
highlightActiveSession();
setInterval(highlightActiveSession, 60000);

// Handle responsive UI
window.addEventListener('resize', handleViewportChange);
handleViewportChange();

// Enable session interactivity
addDynamicSessions();
enableAddSessionButton();
