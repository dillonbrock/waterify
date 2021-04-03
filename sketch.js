let img;
let imageSize;
let d;

// function preload() {
// 	img = loadImage('assets/bgBarstow.png');
// }

// function setup() {

// 	createCanvas(800, 800);

//   image(img, 0, 0, 800, 800);
//   d = pixelDensity();
//   imageSize = 4 * (width*d) * (height * d);

// }

// function draw() {
//   loadPixels();
//   for (let i = 0; i < imageSize; i++) {
//   	pixels[i] = pixels[i+4];
//   }
//   updatePixels();
// }

// function pixelPools() {
// }


let cols;
let rows;
let current; // = new float[cols][rows];
let previous; // = new float[cols][rows];

let dampening = 0.99;

function preload() {
	img = loadImage('assets/bgBarstow.png');
}

function setup() {
  createCanvas(800, 800);
  pixelDensity(1);
  image(img, 0, 0, 800, 800);
  //iterate through pixels of photo
  //store a new array of pixel colors?

  cols = width;
  rows = height;
  // The following line initializes a 2D cols-by-rows array with zeroes
  // in every array cell, and is equivalent to this Processing line:
  // current = new float[cols][rows];
  //arays of color values, all initialized to 0, which creates black background. 
  current = new Array(cols).fill(0).map(n => new Array(rows).fill(0)); //
  previous = new Array(cols).fill(0).map(n => new Array(rows).fill(0)); //
}

function mouseDragged() {
  previous[mouseX][mouseY] = 500;
}

function draw() {
  background(img);

  loadPixels();
  for (let i = 1; i < cols - 1; i++) {
    for (let j = 1; j < rows - 1; j++) {
      current[i][j] =
        (previous[i - 1][j] +
          previous[i + 1][j] +
          previous[i][j - 1] +
          previous[i][j + 1]) /
          2 -
        current[i][j];
      current[i][j] = current[i][j] * dampening;
      // Unlike in Processing, the pixels array in p5.js has 4 entries
      // for each pixel, so we have to multiply the index by 4 and then
      // set the entries for each color component separately.
      let index = (i + j * cols) * 4;
      pixels[index + 0] = current[i][j];
      pixels[index + 1] = current[i][j];
      pixels[index + 2] = current[i][j];
    }
  }
  updatePixels();

  let temp = previous;
  previous = current;
  current = temp;
}