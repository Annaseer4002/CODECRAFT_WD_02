
let timerInterval;
let seconds = 0;
let minutes = 0;
let hours = 0;

const display = document.querySelector('.display');
const startButton = document.getElementById('start');
const pauseButton = document.getElementById('pause');
const resetButton = document.getElementById('reset');

// Update display with formatted time
function updateDisplay() {
  const formattedTime = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  display.textContent = formattedTime;
}

// Start timer
startButton.addEventListener('click', () => {
  if (!timerInterval) {
    timerInterval = setInterval(() => {
      seconds++;
      if (seconds === 60) {
        seconds = 0;
        minutes++;
        if (minutes === 60) {
          minutes = 0;
          hours++;
        }
      }
      updateDisplay();
    }, 1000);
  }
});

// Pause timer
pauseButton.addEventListener('click', () => {
  clearInterval(timerInterval);
  timerInterval = null;
});

// Reset timer
resetButton.addEventListener('click', () => {
  clearInterval(timerInterval);
  timerInterval = null;
  seconds = 0;
  minutes = 0;
  hours = 0;
  updateDisplay();
});

// Initialize display
updateDisplay();
