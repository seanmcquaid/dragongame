// Create elements of the page

// alert("Would you like to fight or flee from the dragon?")
var dragon = document.getElementById("dragonPic");
dragon.innerHTML = `
    <img src="images/dragon.png">
`;

var dicePic1 = document.getElementById("dice1");
var dicePic2 = document.getElementById("dice2");


var instructions = document.getElementById("instructions");
instructions.innerHTML = `
    <p>If you decide to fight, you must roll a 9 or higher between the two dice to slay the dragon or you will be burnt to a crisp!</p>
    <p>If you decide to flee, you will suffer the consequences! </p>
`;

// variable for random number between 1 and 6

var randomNumber = Math.ceil(Math.random(2,6) * 6);


// function to generate random dice image

function randomDiceImage(){
    dicePic1.innerHTML
}