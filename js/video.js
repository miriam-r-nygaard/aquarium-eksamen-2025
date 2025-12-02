"use strict";

/* -----------------------------------------------
Array med fisketyper til overlay
-------------------------------------------------*/
const fishInfo = [
  {
    className: "sprutteTrutte",
    fishName: "Blæksprutte",
    infoText:
      "Jeg er en blæksprutte, jeg sprutter blæk, når jeg er bange og så skifter jeg farve for at gemme mig!",
    funFact: "Fun fact: Jeg har ni hjerner, otte af dem sidder i mine arme!",
    image: "./assets/svg/octopusoverlay.svg",
  },
  {
    className: "shark",
    fishName: "Haj",
    infoText:
      "Jeg er en haj, jeg har levet længere tid end dinosauerne og jeg har super skarpe tænder!",
    funFact: "Fun Fact: Jeg har rokketænder gennem hele mit liv",
    image: "./assets/svg/sharkoverlay.svg",
  },
  {
    className: "crab",
    fishName: "Krabbe",
    infoText:
      "Jeg er en krabbe, og jeg er bevis på at man kan gå sidelæns igennem livet!",
    funFact:
      "Fun Fact: det ligner jeg tisser ud af øjnene! det er dog bare affaldstoffer og lige under mine øjne",
    image: "./assets/svg/craboverlay.svg",
  },
  {
    className: "cleanerFish",
    fishName: "pudserfisk",
    infoText:
      "Jeg er en urfisken, jeg er den første med turbofinner og uden mig var der ingen Nemo!",
    funFact:
      "Fun Fact: Jeg har min hel egen 'bilvask', men istedet for biler er det fisk jeg renser!",
    image: "./assets/svg/cleanerfishoverlay.svg",
  },
  {
    className: "nuttePrutte",
    fishName: "Pindsvinefisk",
    infoText:
      "Jeg er en pindsvinefisk, og når jeg bliver bange, kan jeg puste mig op og blive dobbelt så stor, det er derfor andre fisk er bange for mig!",
    funFact:
      "Fun Fact: Mine pigge er mega giftige, jeg har gift nok til at slå 30 mennesker ihjel",
    image: "./assets/svg/pufferfishoverlay.svg",
  },
  {
    className: "tuna",
    fishName: "Tun",
    infoText:
      "Jeg er tunnen, og jeg er en fartdjævel, jeg kan svømme hurtigere end de biler du ser i byen!",
    funFact:
      "Fun Fact: Jeg kan blive op til 4 meter lang, det er længere end hvis end to voksne mennekser som står på hinandens skuldre!",
    image: "./assets/svg/tunaoverlay.svg",
  },
  {
    className: "clownFish",
    fishName: "Klovnfisk",
    infoText:
      "Jeg er en klovnfisk, jeg lever i søanemoner, fordi jeg ikke bliver brændt af dem, modsat andre fisk!",
    funFact:
      " Fun Fact: Jeg hjælper søanemonerne med at lokke andre fisk til, som bliver til søanemonens mad!",
    image: "./assets/svg/clownfishoverlay.svg",
  },
  {
    className: "doctorFish",
    fishName: "Kirugfisk",
    infoText: "jeg er en kirugfisk, og der findes 75 forskellige arter af mig!",
    funFact:
      "Fun Fact: Min skapel, der sidder ved min hale, er lige så skrap som en kniv!",
    image: "./assets/svg/suregeonfishoverlay.svg",
  },
  {
    className: "foxFace",
    fishName: "Rævefjæs",
    infoText: "Jeg er en variant af kirugfisken!",
    funFact:
      "Fun Fact: Jeg er vegetar og forskrækker du mig bliver jeg kedelig i farven!",
    image: "./assets/svg/foxfaceoverlay.svg",
  },
];

/* -----------------------------------------------
alle lydobjekter defineres her, nu er de i én.
-------------------------------------------------*/
const fishSound = {
  //opretter lydobjekter
  //Blæksprutte
  sprutteTrutte: new Audio("./assets/audio/jegervandmand.mp3"),
  //Haj
  shark: new Audio("./assets/audio/jegerenhaj.mp3"),
  //Krabbe
  crab: new Audio("./assets/audio/jegerenkrabbe.mp3"),
  //Pudserfisk
  cleanerFish: new Audio("./assets/audio/jegerenurfisk.mp3"),
  //Pindsvinefisk
  nuttePrutte: new Audio("./assets/audio/jegerenpindsvinefisk.mp3"),
  //Tun
  tuna: new Audio("./assets/audio/jegerentun.mp3"),
  //klovnfisk
  clownFish: new Audio("./assets/audio/jegerenklovnfisk.mp3"),
  //Kirugfisk
  doctorFish: new Audio("./assets/audio/jegerenkirugfisk.mp3"),
  //Rævefjæs
  foxFace: new Audio("./assets/audio/jegerenkirugfisk.mp3"),
};

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
//finder overlay i HTML
const infoBoks = document.getElementById("infoBoks");
//denne funktion viser overlay med fiske-info
function showFishInfo(html) {
  if (infoBoks) {
    infoBoks.innerHTML = html;
    // nu er overlay synligt gennem css klassen
    infoBoks.classList.add("active");

    //fjerner overlay efter 6 sekunder
    setTimeout(() => {
      infoBoks.classList.remove("active");
    }, 10000);
  }
}
/* -----------------------------------------------
tilføjer klik lyttere til alle fiskene
-------------------------------------------------*/
fishInfo.forEach((fish) => {
  //Finder ALLe elementerne med denne klasse
  document.querySelectorAll("." + fish.className).forEach((elem) => {
    //tilføjer click-eventet
    elem.addEventListener("click", () => {
      console.log("fisk er fundet");
      //afspiller lyden
      const sound = fishSound[fish.className];
      if (sound) {
        sound.currentTime = 0; //dette reseter lyden efter den har spillet
        sound.play();
      }
      const fishDetails = `
  <div class="infoContent">
    <h2 class="fiskType">${fish.fishName}</h2>
    <p class="fiskInfo">${fish.infoText}</p>
    <p class="sjovViden">${fish.funFact}</p>
  </div>
  <div class="bobleAndImg">
  <img src="./assets/svg/boble.svg" alt="boble" class="boble"/>
  <img src="${fish.image}" alt="${fish.fishName}" class="fishImage"/>
  </div>
  `;
      //viser overlay med fiske-info
      showFishInfo(fishDetails);
    });
  });
});
/* -----------------------------------------------
knapper til navigation
-------------------------------------------------*/
//home knap
const homeBtn = document.getElementById("homeBtn");
if (homeBtn) {
  homeBtn.addEventListener("click", () => {
    console.log("homeBtn virker");
    window.location.href = "./index.html";
  });
} else {
  console.error("homeBtn ikke fundet");
}
//full screen
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
karaktere der toggler
-------------------------------------------------*/
//nutte
const nuttePrutteContainer = document.querySelector(".nuttePrutte");
//sprutte
const sprutteTrutteContainer = document.querySelector(".sprutteTrutte");
//pindsvinefisk
if (nuttePrutteContainer) {
  nuttePrutteContainer.addEventListener("click", () => {
    console.log("Nutte er fundet");
    //toggler mellem normal og bange tilstand
    nuttePrutteContainer.classList.toggle("active");
    //gå tilbage til normal efter 6 sekunder
    setTimeout(() => {
      nuttePrutteContainer.classList.remove("active");
    }, 10000);
  });
}
//blæksprutte
if (sprutteTrutteContainer) {
  sprutteTrutteContainer.addEventListener("click", () => {
    console.log("Sprutte er fundet");
    //toggler mellem normal og bange tilstand
    sprutteTrutteContainer.classList.toggle("active");
    //gå tilbage til normal efter 6 sekunder
    setTimeout(() => {
      sprutteTrutteContainer.classList.remove("active");
    }, 10000);
  });
}
