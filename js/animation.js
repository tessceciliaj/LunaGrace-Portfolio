let inc = 0.1;
let scl = 10;
let cols, rows;
let zoff = 0;
let particles = [];
let flowfield;
let canvas;

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style('z.index', '-1');
	cols = floor( width / scl );
	rows = floor( height / scl );
	
	flowfield = new Array(cols * rows);
	
	for ( let i = 0; i < 600; i++){
	  particles[i] = new Particle();
	}
	background('#0d0c0f');
}

function draw() {
	let yoff = 0;
	for (let y = 0; y < rows; y++) {
		let xoff = 0;
		for (let x = 0; x < cols; x++) {
			let index = (x + y * cols);
			let angle = noise(xoff, yoff, zoff) * TWO_PI;
			let v = p5.Vector.fromAngle(angle);
			v.setMag(10);
			flowfield[index] = v;
			xoff += inc;
	    stroke(0, 50);
		}
		yoff += inc;
		zoff += 0.0005;
	}
	for ( let i = 0; i < particles.length; i++){
	  
		particles[i].follow(flowfield);
		particles[i].update();
		particles[i].edges();
	  particles[i].show();
	}
}

function Particle() {
  this.pos = createVector(random(width), random(height));
  this.vel = createVector(0, 0);
	this.acc = createVector(0, 0);
	this.maxspeed = 2;
	
	this.prevPos = this.pos.copy();
	
	this.update = function() {
	  this.vel.add(this.acc);
		this.vel.limit(this.maxspeed);
		this.pos.add(this.vel);
		this.acc.mult(0);
	}
	
	this.follow = function(vectors) {
	  var x = floor(this.pos.x / scl);
		var y = floor(this.pos.y / scl);
		var index = x + y * cols;
		var force = vectors[index];
		this.applyForce(force);
	}
	
	this.applyForce = function(force) {
	this.acc.add(force);
	}
	
	this.show = function() {
		stroke(93, 0, 223 , 6);
		strokeWeight(1);
		line(this.pos.x, this.pos.y, this.prevPos.x, this.prevPos.y);
		this.updatePrev();
	}
	
	this.updatePrev = function() {
	  this.prevPos.x = this.pos.x;
	  this.prevPos.y = this.pos.y;
	}
	
	this.edges = function() {
	  if (this.pos.x > width) {
			this.pos.x = 0;
			this.updatePrev();
		}
		if (this.pos.x < 0) {
			this.pos.x = width;
			this.updatePrev();
		}
		if (this.pos.y > height) {
			this.pos.y = 0;
			this.updatePrev();
		}
		if (this.pos.y < 0) {
			this.pos.y = height;
			this.updatePrev();
		}
	}
	
}