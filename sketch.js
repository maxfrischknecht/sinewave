let cnv;
let radius = 20;
let vertises = 5;
let strokeW;

function setup() {
	cnv = createCanvas(innerWidth, innerHeight);
	cnv.parent("p5Sketch");
}

function draw() {
	background(51);
	noFill();
	stroke(100, 0, 255);

	let value = document.getElementById("vertises").value;
	let size = document.getElementById("size").value;
	strokeW = document.getElementById("strokeW").value;

	vertises = value;	
	radius = size;

	for(let i = 0; i < 10; i++){
		polygon(vertises, radius * i, width/2, height/2);
	}
}

function polygon(vert, r, posX, posY) {
	beginShape();
	strokeWeight(strokeW);
	for(let i = 0; i < vert; i++){
		let angle = map(i, 0, vert, 0, TWO_PI);
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