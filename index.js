var randomNumber1 = Math.floor(Math.random() * 7);
var randomNumber2 = Math.floor(Math.random() * 7);
if (randomNumber1 == 0) {
    randomNumber1++;
}
if (randomNumber2 == 0) {
    randomNumber2++;
}
var string = "images/dice";
string += randomNumber1.toString();
string += ".png";
document.querySelector(".img1").setAttribute("src", string);
string = "images/dice";
string += randomNumber2.toString();
string += ".png";
document.querySelector(".img2").setAttribute("src", string);

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").textContent = "Player 1 wins!";
} else {
    if (randomNumber2 > randomNumber1) {
        document.querySelector("h1").textContent = "Player 2 wins!";
    } else {
        document.querySelector("h1").textContent = "Draw!";
    }
}