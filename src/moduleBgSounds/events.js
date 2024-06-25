import { state } from "../moduleFocusTimer/state.js";
import * as element from "./elements.js";
import * as sound from "./sounds.js";

const setForest = () => {
  const forest = element.forest
  const audio = sound.forestAudio
  audioRunning(forest, audio)
};

const setRain = () => {
  const rain = element.rain
  const audio = sound.rainAudio
  audioRunning(rain, audio)
};

const setCoffe = () => {
  const coffe = element.coffe
  const audio = sound.coffeAudio
  audioRunning(coffe, audio)
};

const setFire = () => {
  const fire = element.fire
  const audio = sound.fireAudio
  audioRunning(fire, audio)
};

const audioRunning = (e, audio) => {
  
  if (!state.musicOn) {
    state.musicOn = true;
    e.classList.add("iconFocus");
    audio.play();
    return;
  }
  state.musicOn = false;
  e.classList.remove("iconFocus");
  audio.pause();
}

export const registerEvent = () => {
  element.forest.onclick = setForest;
  element.rain.onclick = setRain;
  element.coffe.onclick = setCoffe;
  element.fire.onclick = setFire;
};
