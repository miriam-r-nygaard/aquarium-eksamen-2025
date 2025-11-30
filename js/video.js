"use strict";

/* -----------------------------------------------
Array med fisketyper til overlay
-------------------------------------------------*/
const fishInfo = [
  {
    className: "blæksprutte",
    fishName: "Blæksprutte",
    infoText:
      "Jeg er en blæksprutte, jeg sprutter blæk, når jeg er bange og så skifter jeg farve for at gemme mig!",
    funFact: "Fun fact: Jeg har ni hjerner, otte af dem sidder i mine arme!",
    image: "./assets/svg/octopus-brown.svg",
  },
  {
    className: "haj",
    fishName: "Haj",
    infoText:
      "Jeg er en haj, jeg har levet længere tid end dinosauerne og jeg har super skarpe tænder!",
    funFact: "Fun Fact: Jeg har rokketænder gennem hele mit liv",
    image: "./assets/svg/shark.svg",
  },
  {
    className: "krabbe",
    fishName: "Krabbe",
    infoText:
      "Jeg er en krabbe, og jeg er bevis på at man kan gå sidelæns igennem livet!",
    funFact:
      "Fun Fact: det ligner jeg tisser ud af øjnene! det er dog bare affaldstoffer og lige under mine øjne",
    image: "./assets/svg/crab.svg",
  },
  {
    className: "pudserFisk",
    fishName: "pudserfisk",
    infoText:
      "Jeg er en urfisken, jeg er den første med turbofinner og uden mig var der ingen Nemo!",
    funFact:
      "Fun Fact: Jeg har min hel egen 'bilvask', men istedet for biler er det fisk jeg renser!",
    image: "./assets/svg/fisk-var-1.svg",
  },
  {
    className: "pindsvineFisk",
    fishName: "Pindsvinefisk",
    infoText:
      "Jeg er en pindsvinefisk, og når jeg bliver bange, kan jeg puste mig op og blive dobbelt så stor, det er derfor andre fisk er bange for mig!",
    funFact:
      "Fun Fact: Mine pigge er mega giftige, jeg har gift nok til at slå 30 mennesker ihjel",
    image: "./assets/svg/nutte.svg",
  },
  {
    className: "tunFisk",
    fishName: "Tun",
    infoText:
      "Jeg er tunnen, og jeg er en fartdjævel, jeg kan svømme hurtigere end de biler du ser i byen!",
    funFact:
      "Fun Fact: Jeg kan blive op til 4 meter lang, det er længere end hvis end to voksne mennekser som står på hinandens skuldre!",
    image: "./assets/svg/tun.svg",
  },
  {
    className: "KlovnFisk",
    fishName: "Klovnfisk",
    infoText:
      "Jeg er en klovnfisk, jeg lever i søanemoner, fordi jeg ikke bliver brændt af dem, modsat andre fisk!",
    funFact:
      " Fun Fact: Jeg hjælper søanemonerne med at lokke andre fisk til, som bliver til søanemonens mad!",
    image: "./assets/svg/klovnfisk.svg",
  },
  {
    className: "kirugFisk",
    fishName: "Kirugfisk",
    infoText: "jeg er en kirugfisk, og der findes 75 forskellige arter af mig!",
    funFact:
      "Fun Fact: Min skapel, der sidder ved min hale, er lige så skrap som en kniv!",
    image: "./assets/svg/kirugfisk.svg",
  },
  {
    className: "ræveFjæs",
    fishName: "Rævefjæs",
    infoText: "Jeg er en variant af kirugfisken!",
    funFact:
      "Fun Fact: Jeg er vegetar og forskrækker du mig bliver jeg kedelig i farven!",
    image: "./assets/svg/fisk.svg",
  },
];
/* -----------------------------------------------
venter med at kører JS indtil HTML er loadet helt
-------------------------------------------------*/
// Bekræft at DOM er klar
document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM er loaded og klar");
});
/* -----------------------------------------------
info overlay til fiskene
-------------------------------------------------*/
function showFishInfo(fishData) {
  console.log("Nemo er fundet", fishData.fishName);
  const infoBoks = document.getElementById("infoBoks");
  //Nu laver jeg HTML inholdet til infoboksene
  infoBoks.innerHTML = `
  <div class="info-content">
  <h2 class="fiskType">${fishData.fishName}</h2>
  <p class="fiskInfo">${fishData.infoText}</p>
  <p class="sjovViden">${fishData.funFact}</p>
  </div>
  <div class="bobbleAndImg">
  <img src="./assets/svg/boble.svg" alt="boble" class="bobble"/>
  <img src="${fishData.image}" alt="${fishData.fishName}" class="fishImage"/>
  </div>
  `;
  //viser infoboksen
  const openOverlay = document.querySelector(".overlay");
  openOverlay.classList.add("active");
  //lukker infoboksen efter 6 sekunder
  setTimeout(() => {
    openOverlay.classList.remove("active");
  }, 6000);
}
/* -----------------------------------------------
tilføjer klik lyttere til alle fiskene
-------------------------------------------------*/
fishInfo.forEach((fish) => {
  //find HTML elementet for denne fisk
  const fishElement = document.getElementById(fish.className);
  if (fishElement) {
    //click-event til fisk elementet
    fishElement.addEventListener("click", () => {
      console.log("klikket på", fish.fishName);
      //vis info overlay med fiskens data
      showFishInfo(fish);
    });
  } else {
    console.error("Element for fisk ikke fundet:", fish.className);
  }
});

/* -----------------------------------------------
knapper til navigation
-------------------------------------------------*/
/* home knap*/
const homeBtn = document.getElementById("homeBtn");
if (homeBtn) {
  homeBtn.addEventListener("click", () => {
    console.log("homeBtn virker");
    window.location.href = "./index.html";
  });
} else {
  console.error("homeBtn ikke fundet");
}
/* fullscreen knap*/
const fullscreenBtn = document.getElementById("fullscreenBtn");
if (fullscreenBtn) {
  fullscreenBtn.addEventListener("click", () => {
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      document.documentElement.requestFullscreen();
    }
    console.log("fullscreenBtn virker");
  });
}

/* -----------------------------------------------
listerner til lyd
-------------------------------------------------*/
//henter fiskene

//blæksprutte
const blæksprutteFisk = document.getElementById("blæksprutte");
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
//Blæksprutte
const soundBlæksprutteFisk = new Audio();
soundBlæksprutteFisk.src = "./assets/audio/jegervandmand.mp3";
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
//blæksprutte
if (blæksprutteFisk) {
  blæksprutteFisk.addEventListener("click", () => {
    soundBlæksprutteFisk.play();
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
