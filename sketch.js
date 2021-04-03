let img;
let imageSize;
let d;

function preload() {
	img = loadImage('assets/bgBarstow.png');
}

function setup() {

	createCanvas(800, 800);

  image(img, 0, 0, 800, 800);
  d = pixelDensity();
  imageSize = 4 * (width*d) * (height * d);

}

function draw() {
  loadPixels();
  for (let i = 0; i < imageSize; i++) {
  	pixels[i] = pixels[i+4];
  }
  updatePixels();
}