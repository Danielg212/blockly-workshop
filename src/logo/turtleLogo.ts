
const LogoCanvas = require('./logocanvas.js')

const $ : any = require('./jquery-3.3.1.min.js')
require("./jquery-3.3.1.min.js")
require("./logo_constants.js")
require("./queue.js")
require("./logo_funs.js")
require("./functions.js")

declare global {
  interface Window { api: any; }
}

let logo={}

// on document ready
document.addEventListener('DOMContentLoaded', function() {
  let canvas = document.getElementById('logo');
  logo = new LogoCanvas.LogoCanvas(canvas, $('#turtle'));
  window.api = window.api || {logo: logo}

  $('#btn-clear').on('click', function() {
    window.api.logo.cs();
  });
}, false);


const  init = () => {
  console.log("hi from turtleLogo.ts")
}

export const turtleLogo = {
 init: () => init(),
  api: {logo: logo}
}
