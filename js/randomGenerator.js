"use strict";

//generate a random number within a speciifed range
function randomNumRange(min, max){
	var randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
	return randomNumber;
}

module.exports = randomNumRange;

