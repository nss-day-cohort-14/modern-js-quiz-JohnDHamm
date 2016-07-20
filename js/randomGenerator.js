"use strict";

//generate a random number within a speciifed range
function randomNumRange(min, max){
	var randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
	return randomNumber;
}

module.exports = randomNumRange;






// function d20Random should take no args and return a value between 1 and 20 randomly
// function d20Random(){
// 	var d20RandNumber = Math.floor(Math.random() * (30 - 1 + 1) + 1);
// 	return d20RandNumber;
// }