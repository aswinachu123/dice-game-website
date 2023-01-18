var randomNumber1 = Math.floor(Math.random() * 6) +1;
var randomimage= "dice"+randomNumber1+".png";
var imagesource= "images/"+ randomimage;
var image1= document.querySelectorAll("img")[0];
image1.setAttribute("src",imagesource);


var randomNumber2 = Math.floor(Math.random() * 6) +1;
var randomimage2= "dice"+randomNumber2+".png";
var imagesource2= "images/"+ randomimage2;
var image2= document.querySelectorAll("img")[1];
image2.setAttribute("src",imagesource2);


if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "PLAYER 1 WINS🤩";
}else if(randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "PLAYER 2 WINS🤩";
}else{
    document.querySelector("h1").innerHTML = "DRAW😉";
}
