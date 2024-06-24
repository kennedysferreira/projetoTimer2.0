import * as element from "./elements.js";
import { state } from "./state.js";
import * as timer from "./timer.js";

const playButton = () => {
  element.play.classList.toggle("timerOn");
  if (!state.isRunning) {
    state.isRunning = true;
  } else {
    state.isRunning = false;
  }

  timer.timeRunnig();
};

const stopButton = () => {
  element.play.classList.remove("timerOn");
  state.isRunning = false;
  timer.updateDisplay();
};

const plusButton = () => {
  state.minutes = state.minutes + 5;
  state.seconds = 0;
  if (state.minutes > 60) {
    state.minutes = 0;
  }
  timer.updateDisplay();
};

const minusButton = () => {
  state.minutes = state.minutes - 5;
  state.seconds = 0;
  console.log(state.minutes);
  if (state.minutes < 0) {
    state.minutes = 60;
  }
  timer.updateDisplay();
};

export const registerEvent = () => {
  element.play.addEventListener("click", playButton);
  element.stop.addEventListener("click", stopButton);
  element.plus.addEventListener("click", plusButton);
  element.minus.addEventListener("click", minusButton);
};
