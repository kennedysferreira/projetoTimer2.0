import * as element from "./elements.js";
import { state } from "./state.js";

export const timeRunnig = () => {

  if (!state.isRunning) {
    return
  }

  let minutes = Number(element.minutes.innerText)
  let seconds = Number(element.seconds.innerText)

  seconds--

  if (seconds < 0) {
    minutes--
    seconds = 59
  }
  if (minutes < 0) {
    state.isRunning == false
    return
  }

  setTimeout(() => {
    timeRunnig(minutes, seconds)
  }, 1000);
  console.log(minutes, seconds);
  
  updateDisplay(minutes, seconds)
}


export let updateDisplay = (minutes, seconds) => {
  minutes = minutes ?? state.minutes
  seconds = seconds ?? state.seconds

  element.minutes.textContent = String(minutes).padStart(2, "0");
  element.seconds.textContent = String(seconds).padStart(2, "0");
}