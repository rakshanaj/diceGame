var p1=Math.random()*6;
p1=Math.floor(p1)+1;
console.log(p1);
var p2=Math.random()*6;
p2=Math.floor(p2)+1;
console.log(p2);

/*
switch(p1){
    case '1':document.querySelectorAll(".img")[0].setAttribute("src","images/dice1.png");
    break;
    case '2':document.querySelector(".img1").setAttribute("src","images/dice2.png");
    break;
    case '3':document.querySelector(".img1").setAttribute("src","images/dice3.png");
    break;
    case '4':document.querySelector(".img1").setAttribute("src","images/dice4.png");
    break;
    case '5':document.querySelector(".img1").setAttribute("src","images/dice5.png");
    break;
    case '6':document.querySelectorAll(".img")[0].setAttribute("src","images/dice6.png");
    break;
}

switch(p2){
    case '1':document.querySelector(".img2").setAttribute("src","images/dice1.png");
    break;
    case '2':document.querySelector(".img2").setAttribute("src","images/dice2.png");
    break;
    case '3':document.querySelector(".img2").setAttribute("src","images/dice3.png");
    break;
    case '4':document.querySelector(".img2").setAttribute("src","images/dice4.png");
    break;
    case '5':document.querySelector(".img2").setAttribute("src","images/dice5.png");
    break;
    case '6':document.querySelector(".img2").setAttribute("src","images/dice6.png")
    break;
}
*/

var imgp1="dice"+p1+".png";
var imgp2="dice"+p2+".png";

var imgp1src="images/"+imgp1;
var imgp2src="images/"+imgp2;

var img1=document.querySelectorAll("img")[0];
img1.setAttribute("src",imgp1src);

var img2=document.querySelectorAll("img")[1];
img2.setAttribute("src",imgp2src);


if(p1>p2){
    document.querySelector("h1").innerHTML="player 1 winsss!";
}
else if(p1<p2){
    document.querySelector("h1").innerHTML="player 2 winsss!";
}
else{
    document.querySelector("h1").innerHTML="Refresh me!";
}