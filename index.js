// this is the scripting for the first dice
var randomNumberOne = Math.floor(Math.random() * 6) + 1;

var randonImageGenarator = "./images/dice" + randomNumberOne + ".png";

var setAttributesOne = document.querySelectorAll("img")[0].setAttribute("src" , randonImageGenarator);

// this is the scripting for the second dice
var randomNumberTwo = Math.floor(Math.random() * 6) + 1;

var randonImageGenaratorTwo = "./images/dice" + randomNumberTwo + ".png";

var setAttributesTwo = document.querySelectorAll("img")[1].setAttribute("src" , randonImageGenaratorTwo);


if(randomNumberOne > randomNumberTwo){
    document.querySelector('h1').innerHTML = "PLAYER ONE WINS"
} 
else if (randomNumberTwo > randomNumberOne){
    document.querySelector('h1').innerHTML = "PLAYER TWO WINS"
} else {
    document.querySelector('h1').innerHTML = "DRAW..!"
}