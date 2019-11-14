var p1=Math.random()*6;
p1=Math.floor(p1)+1;
console.log(p1);
var p2=Math.random()*6;
p2=Math.floor(p2)+1;
console.log(p2);

switch(p1){
    case '1':document.querySelector(".img1").setAttribute("src","images/dice1");
    break;
    case '2':document.querySelector(".img1").setAttribute("src","images/dice2");
    break;
    case '3':document.querySelector(".img1").setAttribute("src","images/dice3");
    break;
    case '4':document.querySelector(".img1").setAttribute("src","images/dice4");
    break;
    case '5':document.querySelector(".img1").setAttribute("src","images/dice5");
    break;
    case '6':document.querySelector(".img1").setAttribute("src","images/dice6");
    break;
}

switch(p2){
    case '1':document.querySelector(".img2").setAttribute("src","images/dice1");
    break;
    case '2':document.querySelector(".img2").setAttribute("src","images/dice2");
    break;
    case '3':document.querySelector(".img2").setAttribute("src","images/dice3");
    break;
    case '4':document.querySelector(".img2").setAttribute("src","images/dice4");
    break;
    case '5':document.querySelector(".img2").setAttribute("src","images/dice5");
    break;
    case '6':document.querySelector(".img2").setAttribute("src","images/dice6i")
    break;
}

if(p1>p2){
    document.querySelector("h1").innerHTML="player 1 winsss!";
}
else if(p1<p2){
    document.querySelector("h1").innerHTML="player 2 winsss!";
}
else{
    document.querySelector("h1").innerHTML="try again";
}