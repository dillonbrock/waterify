// let img;
// let imageSize;
// let d;

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

let img;
let imageScale = 10;
let colors = [];

function preload() {
	img = loadImage('assets/bgBarstow.png');
}

function setup() {
	createCanvas(800, 800);
	background(51);
	pixelDensity(1);
	img.resize(width/imageScale, height/imageScale);
	img.loadPixels();
	for (var y = 0; y < img.height; y++) {
		for (var x = 0; x < img.width; x++) {
			var index = (img.width - x - 1 + (y * img.width)) * 4;
			var r = img.pixels[index+0];
			var g = img.pixels[index+1];
			var b = img.pixels[index+2];
			var a = 255;
			var col = color(r, g, b, a);
			colors.push(col);		
		}
	}
	console.log(colors.length);

	for (var y = 0; y < height/imageScale; y++) {
		for (var x = 0; x < width/imageScale; x++) {
			var index = x + y * width/imageScale;
			noStroke();
			fill(colors[index]);
			//circle(x*imageScale + imageScale/2, y*imageScale, imageScale);
			rect(x*imageScale, y * imageScale, imageScale, imageScale);
		}
	}




}

function draw() {

	loadPixels();
	for (let i = 0; i < (4*width*height); i++) {
		pixels[i] = pixels[i+4];
	}
	updatePixels();
	
}

