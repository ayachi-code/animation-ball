//variablen
var x = 1;
var speed = 3;
var kleur = {
	r : 0,
	g : 0,
	b : 0
};

var kleurS = {
	r : 0,
	g : 0,
	b : 0
};


function setup() {
	createCanvas(600,500);
}


function draw() {
	background(kleur.r,kleur.g,kleur.b);
	ellipse(x,50,70,70);
	x = x + speed;

	if (x > width) {
		speed = -3;
  }

	if (x < 0) {
		speed = +3;
	}
}

function keyPressed() {
	if (keyCode == BACKSPACE) {
		console.log("Backspace is in gedrukt ");
	}

	if (keyCode == ENTER) {
		console.log("spatie is in gedrukt ")
		//Elke keer als iemand op enter klikt veranderd kleur 
		var kleurenter = {
			r : random(0,255),
			g : random(0,255),
			b : random(0,255)

		};
		fill(kleurenter.r,kleurenter.g,kleurenter.b);
		stroke(kleurenter.r,kleurenter.g,kleurenter.b);
		ellipse(x,50,70,70);
	}
}

var inputRood = document.getElementById('input_rood');
var inputGroen = document.getElementById('input_groen'); 
var inputblauw = document.getElementById('input_blauw');


function onRoodInput (event) {
	console.log('type in rood!', event)
	kleur.r = Number(event.target.value)
}

function onGroenInput (event) {
	console.log('Type in groen', event);
	kleur.g = Number(event.target.value);

}

function onBlauwInput (event) {
	console.log('Type in blauw', event);
	kleur.b = Number(event.target.value);
}



inputRood.addEventListener('input', onRoodInput);
inputGroen.addEventListener('input', onGroenInput);
inputblauw.addEventListener('input', onBlauwInput);

