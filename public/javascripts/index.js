var PIXI = require('pixi.js');


// Create a renderer for the game (automatically detects webGL is supported)
var renderer =
    new PIXI.autoDetectRenderer(
        window.innerWidth,
        window.innerHeight,
        {antialiasing: false, transparent: false, resolution: 1});

// To make sure the canvas is resized to match the resolution, set autoResize to true.
renderer.view.style.position = "absolute"
renderer.view.style.display = "block";
renderer.autoResize = true;
renderer.resize(window.innerWidth, window.innerHeight);

renderer.backgroundColor = 0xCCCCCC;

// Attach the renderer to the body of the html file
document.body.appendChild(renderer.view);

//Create a container object called the `stage`
var stage = new PIXI.Container();


var cols = 8;
var rows = cols;

var sideCol = renderer.width / cols;
var sideRow = renderer.height / rows;

for (var k = 0 ; k < cols ; k++) {
    for (var j = 0 ; j < rows ; j++) {
        drawCell(stage, sideCol * k, sideRow * j, sideCol, sideRow);
    }
}



// Tell the `renderer` to `render` the `stage`
renderer.render(stage);


requestAnimationFrame( animate );

function animate() {
    requestAnimationFrame( animate );
    // render the stage
    renderer.render(stage);
}


function drawCell(stage, x, y, width, height) {

    var graphics = new PIXI.Graphics();

    graphics.beginFill(0xDEDEDE);

    // set the line style to have a width of 5 and set the color to red
    graphics.lineStyle(2, 0xABABAB);

    // draw a rectangle
    graphics.drawRect(x, y, width, height);

    stage.addChild(graphics);

}
