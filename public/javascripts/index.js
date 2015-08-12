var PIXI = require('pixi.js');

// Create a renderer for the game
var renderer = new PIXI.CanvasRenderer(window.innerWidth, window.innerHeight);

// Attach the renderer to the body of the html file
document.body.appendChild(renderer.view);

// Create a stage to draw on.
var stage = new PIXI.Stage;

// Create a draw function to run the renderer
function draw() {
  renderer.render(stage);
  requestAnimationFrame(draw);
}

// Kick off the application
draw();