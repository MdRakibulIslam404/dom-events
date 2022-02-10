function makeRed() {
    document.body.style.backgroundColor = "red";
}

// handle blue button click by setting function name
const blueBUtton = document.getElementById("make-blue-button");
// just set the name of the function
blueBUtton.onclick = makeBlue;

function makeBlue() {
    document.body.style.backgroundColor = "blue";
}

// handle event using anonymous function
const greenButton = document.getElementById("make-green-button");
// anonymous function
greenButton.onclick = function () { // func name optional
    document.body.style.backgroundColor = "green";
}

// handle event by using addEventListener
const goldenButton = document.getElementById("make-goldenrod");
goldenButton.addEventListener("click", makeGoldenRod);

function makeGoldenRod() {
    document.body.style.backgroundColor = "goldenrod";
}

// handle event by using addEventListener without func call
const hotPinkButton = document.getElementById("make-hotpink");
hotPinkButton.addEventListener("click", function makePink() { // direct declare a function
    document.body.style.backgroundColor = "hotPink"
});

// direct shortcut
document.getElementById("make-light-blue").addEventListener("click", function () {
    document.body.style.backgroundColor = "lightblue";
});