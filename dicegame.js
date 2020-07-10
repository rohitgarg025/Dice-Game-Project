var srcs = ["images/dice1.png","images/dice2.png","images/dice3.png","images/dice4.png","images/dice5.png","images/dice6.png"];

var n1 = Math.floor(Math.random()*6);
var n2 = Math.floor(Math.random()*6);

var image = document.querySelectorAll("img");
var h1 = document.querySelector("h1");

if(n1>n2){
    h1.textContent = "Player 1 wins!";
}
else if(n1<n2){
    h1.textContent = "Player 2 wins!";
}
else{
    h1.textContent = "Draw";
}
image[0].src = srcs[n1];
image[1].src = srcs[n2];