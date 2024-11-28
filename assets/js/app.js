'use strict';

import { listener, selector } from "./data/utitily.js";

const menuBtn = selector('.fa-bars');
const menuTab = selector('.menu-tab');

listener(menuBtn, 'click', () => {
  menuTab.classList.toggle('menu-display');
  menuBtn.classList.toggle('menu-btn-toogle');
});