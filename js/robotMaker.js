"use strict";

let randNum = require("./randomGenerator.js");

//top prototype
function Robot() {
	this.name = null;
	this.health = null;
	this.damage = null;
}

//3 class prototypes of Robot
function Drone(){
	this.healthMin = 80;
	this.healthMax = 90;
	this.damageMin = 8;
	this.damageMax = 12;
}
Drone.prototype = new Robot();

function Bipedal(){
	this.healthMin = 75;
	this.healthMax = 85;
	this.damageMin = 10;
	this.damageMax = 15;
}
Bipedal.prototype = new Robot();

function Atv(){
	this.healthMin = 90;
	this.healthMax = 100;
	this.damageMin = 5;
	this.damageMax = 10;
}
Atv.prototype = new Robot();

//2 models of Drone class
let Bubo = new Drone();
Bubo.name = "Bubo";
Bubo.health = randNum(Bubo.healthMin, Bubo.healthMax);
console.log("Bubo health", Bubo.health);
Bubo.damage = randNum(Bubo.damageMin, Bubo.damageMax);
console.log("Bubo damage", Bubo.damage);

let Recognizer = new Drone();
Recognizer.name = "Recognizer";
Recognizer.health = randNum(Recognizer.healthMin, Recognizer.healthMax);
console.log("Recognizer health", Recognizer.health);
Recognizer.damage = randNum(Recognizer.damageMin, Recognizer.damageMax);
console.log("Recognizer damage", Recognizer.damage);

//2 models of Bipedal class
let Bender = new Bipedal();
Bender.name = "Bender";
Bender.health = randNum(Bender.healthMin, Bender.healthMax);
console.log("Bender health", Bender.health);
Bender.damage = randNum(Bender.damageMin, Bender.damageMax);
console.log("Bender damage", Bender.damage);

let Terminator = new Bipedal();
Terminator.name = "Terminator";
Terminator.health = randNum(Terminator.healthMin, Terminator.healthMax);
console.log("Terminator health", Terminator.health);
Terminator.damage = randNum(Terminator.damageMin, Terminator.damageMax);
console.log("Terminator damage", Terminator.damage);

//2 models of Atv class
let Dalek = new Atv();
Dalek.name = "Dalek";
Dalek.health = randNum(Dalek.healthMin, Dalek.healthMax);
console.log("Dalek health", Dalek.health);
Dalek.damage = randNum(Dalek.damageMin, Dalek.damageMax);
console.log("Dalek damage", Dalek.damage);

let WallE = new Atv();
WallE.name = "WallE";
WallE.health = randNum(WallE.healthMin, WallE.healthMax);
console.log("WallE health", WallE.health);
WallE.damage = randNum(WallE.damageMin, WallE.damageMax);
console.log("WallE damage", WallE.damage);


//need an array of robots for comparing to selections
let robotArray = [Bubo, Recognizer, Bender, Terminator, Dalek, WallE];

function identifyRobot(selectedName){
	for (let i = 0; i <robotArray.length; i++){
		if (selectedName === robotArray[i].name){
			return robotArray[i];
		}
	}
}


module.exports = {identifyRobot};





