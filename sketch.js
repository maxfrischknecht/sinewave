let cnv;
let radius = 2;
let vertises = 5;

let inc;
let wave = 0;
let waveHeight = 60;
let waveFreq = 0;
let period = 1;
let polygonAmount = 100;


function setup() {
	cnv = createCanvas(innerWidth, innerHeight);
	cnv.parent("p5Sketch");
	inc = PI / 30;
	strokeWeight(5);
}

function draw() {
	background(51);
	noFill();
	stroke(100, 0, 255);

	vertises = document.getElementById("slider1").value;
	waveHeight = document.getElementById("slider2").value;
	polygonAmount = document.getElementById("slider3").value;
	radius = document.getElementById("slider4").value;
	period = document.getElementById("slider5").value;
	let offset = document.getElementById("slider6").value;

	// for(let i = 0; i < polygonAmount; i++){
	// 	// the period changes the amount of waves
	// 	waveFreq = map(i, 0, polygonAmount, 0, TWO_PI * period);
	// 	// sin always between 0, 1, add height/2 to place it in the middle
	// 	// multiply it with the height you like the wave to be
	// 	// change the y position constantly
	// 	// add waveFreq to make each one different
	// 	let y = (height/2) + sin(wave + waveFreq) * waveHeight;
	// 	polygon(vertises, radius * i, width/2, y);
	// }

	// additional function for points
	for(let i = 0; i < polygonAmount; i++){
		waveFreq = map(i, 0, polygonAmount, 0, TWO_PI * period);
		let y = (height/2) + sin(wave + waveFreq) * waveHeight;
		pointIgon(vertises, radius * i, offset * i, width/2, y);
	}

	// always add a 0.14... to it
	wave += inc;
}

function polygon(vert, r, posX, posY) {
	beginShape();
	for(let i = 0; i < vert; i++){
		let angle = map(i, 0, vert, 0, TWO_PI);
		// cos, sin return 0 and 1, thats why you must multiply it by its radius
		let x = cos(angle) * r + posX;
		let y = sin(angle) * r/2 + posY;
		vertex(x, y);
	}
	endShape(CLOSE);
	
}

function pointIgon(vert, r, offset, posX, posY) {
	beginShape(POINTS);
	for(let i = 0; i < vert; i++){
		let angle = map(i, 0, vert, 0 + offset, TWO_PI + offset);
		// cos, sin return 0 and 1, thats why you must multiply it by its radius
		let x = cos(angle) * r + posX;
		let y = sin(angle) * r/2 + posY;
		vertex(x, y);
	}
	endShape(CLOSE);

}

function windowResized() {
	resizeCanvas(innerWidth, innerHeight);
}