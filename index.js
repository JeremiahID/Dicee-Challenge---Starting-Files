
var randomNumberOne = Math.floor(Math.random() * 6) + 1;

var randonImageGenarator = "./images/dice" + randomNumberOne + ".png";

var setAttributesOne = document.querySelectorAll(img)[0].setAttribute('src' , randonImageGenarator);