"use strict";
// Bekræft at DOM er klar
document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM er loaded og klar");
});

/* -----------------------------------------------
JS på maincharacters på landingpage
-------------------------------------------------*/
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

/* -----------------------------------------------
JS på knapperne på landingpage
-------------------------------------------------*/
/* video knap*/
const spilBtn = document.getElementById("spilBtn");
if (spilBtn) {
  spilBtn.addEventListener("click", () => {
    console.log("spilBtn virker");
    window.location.href = "./spil.html";
  });
} else {
  console.error("spilBtn ikke fundet");
}

/* video knap*/
const videoBtn = document.getElementById("videoBtn");
if (videoBtn) {
  videoBtn.addEventListener("click", () => {
    console.log("videoBtn virker");
    window.location.href = "./video.html";
  });
} else {
  console.error("videoBtn ikke fundet");
}
