import AnalogClock from './AnalogClock.js';
import SetClock from "./SetClock.js";

document.querySelectorAll('.analog-clock').forEach(AnalogClock);

setInterval(() => {

    SetClock();

}, 1000);

SetClock();