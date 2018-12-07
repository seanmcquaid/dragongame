var dragon = document.getElementById("dragonPic");
dragon.innerHTML = '<img src="images/dragon.png">';

var dicePic1 = document.getElementById("dice1");
var dicePic2 = document.getElementById("dice2");

var fightButton = document.getElementById("fight");
var fleeButton = document.getElementById("flee");

var instructions = document.getElementById("instructions");
instructions.innerHTML = `
    <p>If you decide to fight, you must roll a 9 or higher between the two dice to slay the dragon or you will be burnt to a crisp!</p>
    <p>If you decide to flee, you will suffer the consequences! </p>
`;

function fight(){
    var randomNumber1 = Math.ceil(Math.random(2,6) * 6);
    var randomNumber2 = Math.ceil(Math.random(2,6) * 6);
    var score = randomNumber1 + randomNumber2
    dicePic1.innerHTML = `<img src="images/d${randomNumber1}.gif">`;
    dicePic2.innerHTML = `<img src="images/d${randomNumber2}.gif">`;
    if (score >= 9) {
        dragon.innerHTML = '<img src="images/slainDragon.jpg">';
        instructions.innerHTML = "You've won and the dragon is now your throne!!!"
    } else {
        dragon.innerHTML = '<img src="images/fireDragon.jpg">';
        instructions.innerHTML = "You've lost and you are now burnt to a crisp!!!"
    }
};

function flee(){
    dragon.innerHTML = '<img src="images/flee.jpg">';
    instructions.innerHTML = "Oh....you ran away????? NEEERDDDDDD!!!";
};

fightButton.addEventListener("click",fight);
fleeButton.addEventListener("click",flee);