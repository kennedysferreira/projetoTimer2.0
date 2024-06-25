import { state } from "../moduleFocusTimer/state.js";
import * as element from "./elements.js";
import * as sound from "./sounds.js";

const setForest = () => {
  toggleAudio(element.forest, sound.forestAudio);
};

const setRain = () => {
  toggleAudio(element.rain, sound.rainAudio);
};

const setCoffee = () => {
  toggleAudio(element.coffee, sound.coffeeAudio);
};

const setFire = () => {
  toggleAudio(element.fire, sound.fireAudio);
};

const toggleAudio = (element, audio) => {
  // Pause all audios except the current one
  if (state.currentAudio && state.currentAudio !== audio) {
    state.currentAudio.pause();
    state.currentElement.classList.remove("iconFocus");
  }

  // Toggle the current audio and state
  if (state.musicOn && state.currentAudio === audio) {
    state.musicOn = false;
    element.classList.remove("iconFocus");
    audio.pause();
  } else {
    state.musicOn = true;
    state.currentAudio = audio;
    state.currentElement = element;
    element.classList.add("iconFocus");
    audio.play();
  }
};

export const registerEvent = () => {
  element.forest.onclick = setForest;
  element.rain.onclick = setRain;
  element.coffee.onclick = setCoffee;
  element.fire.onclick = setFire;
};
