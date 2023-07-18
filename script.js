var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomizeButton = document.querySelector("button");


function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
  function generateRandomColors() {
    color1.value = getRandomColor();
    color2.value = getRandomColor();
    setGradient();
  }
  

function setGradient(){
    body.style.background = 
    "linear-gradient(to right, " 
    + color1.value 
    +", "
    + color2.value 
    + ")";
    css.textContent = body.style.background + ";"
}


color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

randomizeButton.addEventListener("click", generateRandomColors);
// Code to match the background on the first page load
window.addEventListener("DOMContentLoaded", function () {
    setGradient();
  });
  
  // Code to display the initial CSS linear gradient property
  window.addEventListener("load", function () {
    css.textContent = body.style.background + ";";
  });