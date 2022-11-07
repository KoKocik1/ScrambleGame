document.query

var min = 1, max = 6;
var player1 = getRandomInt(min,max);
var player2 = getRandomInt(min,max);

var photo1="images/dice"+player1+".png";
var photo2="images/dice"+player2+".png";

document.querySelector("img.img1").setAttribute("src", photo1);
document.querySelector("img.img2").setAttribute("src", photo2);


if (player1 < player2) {
    //player2 win
    document.querySelector("h1").textContent="Player 2 Win!🚩";
    document.querySelector("h1").style.textAlign="right";
} else if (player1 > player2) {
    document.querySelector("h1").textContent="🚩 Player 1 Win!";
    document.querySelector("h1").style.textAlign="left";
    //player1 win
} else {
    document.querySelector("h1").textContent="Draw!";
    document.querySelector("h1").style.textAlign="center";
    //draw
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  }