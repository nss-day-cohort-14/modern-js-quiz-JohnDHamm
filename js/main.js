"use strict";

let RobotMaker = require("./robotMaker.js");
let playerOneRobot = null;
let playerTwoRobot = null;



//get selected robot for player 1
$("#firstRobotSelect").change(function(){
	playerOneRobot = RobotMaker.identifyRobot($("#firstRobotSelect").val());
	console.log("player one is a", playerOneRobot.name);
	//display starting health
	$("#player1healthOutput").text(playerOneRobot.health);
});

//get selected robot for player 2
$("#secondRobotSelect").change(function(){
	playerTwoRobot = RobotMaker.identifyRobot($("#secondRobotSelect").val());
	console.log("player two is a", playerTwoRobot.name);
	//display starting health
	$("#player2healthOutput").text(playerTwoRobot.health);
});




function updateHealths(){
	$("#player1healthOutput").text(playerOneRobot.health);
	$("#player2healthOutput").text(playerTwoRobot.health);
}


//fight button clicked
$("#fightBtn").click(function(){
	playerOneRobot.health -= playerTwoRobot.damage;
	playerTwoRobot.health -= playerOneRobot.damage;
	updateHealths();
});



