"use strict";

const nutte = document.getElementById('nutte')
const vandmand = document.getElementById('vandmand')

function swapImages() {
  nutte.classList.toggle("nutte");
  nutte.classList.toggle("swapped-right");
  vandmand.classList.toggle("vandmand");
  vandmand.classList.toggle("swapped-left");
}

if (nutte) {
  nutte.addEventListener("click", () => {
    const soundNutte = new Audio("./assets/audio/vilduspillemedmig.mp3");
    //setTimeout() //swapImages ./assets/svg/nutte.svg
    nutte.setAttribute("src","./assets/svg/nutte.svg")
    setTimeout(() => nutte.setAttribute("src","./assets/svg/nutte-puff.svg"), 8000);
    //
    swapImages();
    console.log('nutte')
    soundNutte.play();
  });
}

if (vandmand) {
  const soundVandmand = new Audio("./assets/audio/sevideooglaer.mp3");
  vandmand.addEventListener("click", () => {
    swapImages();
    console.log('vandmand')
    soundVandmand.play();
  });
}