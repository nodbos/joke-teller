// GetElementById Helper / Shorthand
function getEle(id) {
   return document.getElementById(id);
}
// DOM Elements
const button = getEle('joke__button');
const audioElement = getEle('joke__audio');
const header = getEle('header');
const footer = getEle('footer');
// Initialization of all classes
class INIT {
   constructor() {
      console.log('Made by Felipe in Colombia!');
      new Menu(header);
      new Footer(footer);
      new Jokes(button, audioElement);
   }
}
new INIT();
