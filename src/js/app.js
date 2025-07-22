import * as flsFunctions from "./modules/functions.js";
import { initBurgerMenu } from './modules/burger.js';
import { setRealVH } from "./modules/realHeight.js";

flsFunctions.isWebp();


document.addEventListener('DOMContentLoaded', () => {
	initBurgerMenu();
	setRealVH();
});