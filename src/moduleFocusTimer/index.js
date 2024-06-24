import * as timer from "./timer.js";
import * as control from "./controls.js";
import { state } from "./state.js";


export let start = (minutes, seconds) => {
state.minutes = minutes
state.seconds = seconds

control.registerEvent()
timer.updateDisplay()
};
