"use strict";

const nutte = document.getElementById("nutte");
const vandmand = document.getElementById("vandmand");

let nutteState = "normal";

if (nutte) {
  nutte.addEventListener("click", () => {
    const soundNutte = new Audio("./assets/audio/vilduspillemedmig.mp3");
    //Toggle mellem nutte og nutte-puff
    if (nutteState === "normal") {
      nutte.setAttribute("src", "./assets/svg/nutte-puff.svg");
      nutteState = "puff";
    } else {
      nutte.setAttribute("src", "./assets/svg/nutte.svg");
      nutteState = "normal";
    }
    console.log("nutte virker", nutteState);
    soundNutte.play();
  });
}

if (vandmand) {
  const soundVandmand = new Audio("./assets/audio/sevideooglaer.mp3");
  vandmand.addEventListener("click", () => {
    console.log("vandmand");
    soundVandmand.play();
  });
}
