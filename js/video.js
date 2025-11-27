"use strict";
/* -----------------------------------------------
knapper
-------------------------------------------------*/

/* -----------------------------------------------
listerner til lyd
-------------------------------------------------*/
//henter fiskene

//vandmand
const vandmandFisk = document.getElementById("vandMand");
//haj
const hajFisk = document.getElementById("haj");
//krabbe
const krabbeFisk = document.getElementById("krabbe");
//pudserfisk
const pudserFisk1 = document.getElementById("pudserFisk1");
const pudserFisk2 = document.getElementById("pudserFisk2");
const pudserFisk3 = document.getElementById("pudserFisk3");
//pindsvinefisk
const pindsvineFisk = document.getElementById("pindsvineFisk");
const bangePindsvindefisk = document.getElementById("bange-pindsvineFisk");
const nuttePrutteContainer = document.querySelector(".nutte-prutte");
//tun
const tunFisk = document.getElementById("tunFisk");
//klovnfisk
const nemoFisk = document.getElementById("nemoFisk");
const klovnFisk = document.getElementById("klovnFisk");
//kirugfisk
const kirugFisk = document.getElementById("kirugFisk");
//rævefjæs
const rævefjæsFisk = document.getElementById("ræveFjæs1");
const rævefjæsFisk2 = document.getElementById("ræveFjæs2");

//opretter lydobjekter
//Vandmand
const soundVandmandFisk = new Audio();
soundVandmandFisk.src = "./assets/audio/jegervandmand.mp3";
//Haj
const soundHajFisk = new Audio();
soundHajFisk.src = "./assets/audio/jegerenhaj.mp3";
//Krabbe
const soundKrabbeFisk = new Audio();
soundKrabbeFisk.src = "./assets/audio/jegerenkrabbe.mp3";
//Pudserfisk
const soundPudserFisk1 = new Audio();
soundPudserFisk1.src = "./assets/audio/jegerenurfisk.mp3";

const soundPudserFisk2 = new Audio();
soundPudserFisk2.src = "./assets/audio/jegerenurfisk.mp3";

const soundPudserFisk3 = new Audio();
soundPudserFisk3.src = "./assets/audio/jegerenurfisk.mp3";
//Pindsvinefisk
const soundPindsvineFisk = new Audio();
soundPindsvineFisk.src = "./assets/audio/jegerenpindsvinefisk.mp3";

const soundBangePindsvindefisk = new Audio();
soundBangePindsvindefisk.src = "./assets/audio/jegerenpindsvinefisk.mp3";
//Tun
const soundTunFisk = new Audio();
soundTunFisk.src = "./assets/audio/jegerentun.mp3";
//klovnfisk
const soundNemoFisk = new Audio();
soundNemoFisk.src = "./assets/audio/jegerenklovnfisk.mp3";

const soundKlovnFisk = new Audio();
soundKlovnFisk.src = "./assets/audio/jegerenklovnfisk.mp3";
//Kirugfisk
const soundKirugFisk = new Audio();
soundKirugFisk.src = "./assets/audio/jegerenkirugfisk.mp3";
//Rævefjæs
const soundRævefjæsFisk = new Audio();
soundRævefjæsFisk.src = "./assets/audio/jegerenkirugfisk.mp3";

const soundRævefjæsFisk2 = new Audio();
soundRævefjæsFisk2.src = "./assets/audio/jegerenkirugfisk.mp3";

//sætter lyttere på så den afspiller ved klick
//vandmand
if (vandmandFisk) {
  vandmandFisk.addEventListener("click", () => {
    soundVandmandFisk.play();
  });
}
//haj
if (hajFisk) {
  hajFisk.addEventListener("click", () => {
    soundHajFisk.play();
  });
}
//krabbe
if (krabbeFisk) {
  krabbeFisk.addEventListener("click", () => {
    soundKrabbeFisk.play();
  });
}
//pudserfisk
if (pudserFisk1) {
  pudserFisk1.addEventListener("click", () => {
    soundPudserFisk1.play();
  });
}

if (pudserFisk2) {
  pudserFisk2.addEventListener("click", () => {
    soundPudserFisk2.play();
  });
}

if (pudserFisk3) {
  pudserFisk3.addEventListener("click", () => {
    soundPudserFisk3.play();
  });
}
//pindsvinefisk

if (nuttePrutteContainer) {
  nuttePrutteContainer.addEventListener("click", () => {
    console.log("TESTPUNKT");
    //toggler mellem normal og bange tilstand
    nuttePrutteContainer.classList.toggle("active");
    //lyden
    soundPindsvineFisk.currentTime = 0;
    soundPindsvineFisk.play();
    //gå tilbage til normal
    soundPindsvineFisk.onended = () => {
      nuttePrutteContainer.classList.remove("active");
    };
  });
}

//Tun
if (tunFisk) {
  tunFisk.addEventListener("click", () => {
    soundTunFisk.play();
  });
}
//klovnfisk
if (nemoFisk) {
  nemoFisk.addEventListener("click", () => {
    soundNemoFisk.play();
  });
}

if (klovnFisk) {
  klovnFisk.addEventListener("click", () => {
    soundKlovnFisk.play();
  });
}

//kirugfisk
if (kirugFisk) {
  kirugFisk.addEventListener("click", () => {
    soundKirugFisk.play();
  });
}
//rævefjæs
if (rævefjæsFisk) {
  rævefjæsFisk.addEventListener("click", () => {
    soundRævefjæsFisk.play();
  });
}

if (rævefjæsFisk2) {
  rævefjæsFisk2.addEventListener("click", () => {
    soundRævefjæsFisk2.play();
  });
}
