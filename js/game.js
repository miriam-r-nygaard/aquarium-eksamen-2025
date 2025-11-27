// --- Trash data ---
"use strict";
//Intro lyd/loop der siger:: Mini helt, hjælp mig, jeg har brug for din hjælp!
//Yes, så kører vi, det tager kun 2minutter men du redder nutte!

const trashData = [
  {
    img: "./assets/svg/cykelhjul.svg",
    name: "Cykelhjul",
    audio: "./assets/audio/findcykelhjulet.mp3",
  },
  {
    img: "./assets/svg/gummistoevle.svg",
    name: "Gummistøvler",
    audio: "./assets/audio/findgummistoevlen.mp3",
  },
  {
    img: "./assets/svg/flaske.svg",
    name: "Glas Flaske",
    audio: "./assets/audio/findpantflaske.mp3",
  },
  {
    img: "./assets/svg/can.svg",
    name: "Metal dåse",
    audio: "./assets/audio/findmetalcan.mp3",
  },
];

const nutte = document.getElementById('nutte');
const livesLeft = document.getElementById('livesLeft');
const itemsContainer = document.querySelector(".items");
const swimmer = document.querySelector(".swimmer");
const home = document.querySelector(".home");

let carrying = null;
let carriedIndex = null;
let nextIndex = 0;
let finished = false;
let lives = 3;
let fish;
let sharkCooldown = false;


// --- Smooth camera scroll setup ---
let targetScroll = window.scrollY;

function smoothScroll() {
  // Ease scroll toward the target (interpolated instead of jump)
  const current = window.scrollY;
  const diff = targetScroll - current;
  window.scrollTo({ top: current + diff * 0.1 });
  requestAnimationFrame(smoothScroll);
}
smoothScroll();

let hasPlayed = false;

document.body.addEventListener("scroll", () => {
  if (!hasPlayed && window.scrollY >= 400) {
    const resetGameAudio = new Audio("../assets/audio/sharkdanger.mp3");
    resetGameAudio.play();
    hasPlayed = true;
  }
});

// Get the div to display the timer
const timerDiv = document.getElementById("timer");

// Initialize the timer variables
// let startTime;
// let stopTime;

// function startTimer() {
//   // Start the timer when the button is clicked
//   startTime = new Date().getTime();
//   setInterval(updateTimer, 10);
// }

// function stopTimer() {
//   // Stop the timer when the button is clicked
//   clearInterval(intervalId);
//   const elapsedTime = (new Date().getTime() - startTime) / 1000;
//   timerDiv.innerHTML = `Elapsed time: ${elapsedTime} seconds`;
//   //saveTime?
//   //const name =
//   //to localstorage here!!!!
// }
// let intervalId;
// // Update the timer every 10ms
// function updateTimer() {
//   const currentTime = new Date().getTime();
//   if (!startTime || !stopTime) return; // Timer not started or stopped yet
//   const elapsedTime = currentTime - startTime;
//   timerDiv.innerHTML = `Elapsed time: ${elapsedTime} ms`;
// }

// Start the timer when the page loads
//document.addEventListener('DOMContentLoaded', startTimer);

// Stop and restart the timer on button clicks
const stopButton = document.getElementById("stop-button");
// stopButton.addEventListener('click', () => {
//   stopTimer();
// });

const startAgainButton = document.getElementById("start-again-button");
//startAgainButton.addEventListener('click', );
// startTimer();
// --- Setup game ---
function setupGame() {
  const intro = new Audio("../assets/audio/balladenhavet.mp3");
  intro.play();
  itemsContainer.innerHTML = "";
  document
    .querySelectorAll(".trash, .finish-message, .fish")
    .forEach((el) => el.remove());

  carrying = null;
  carriedIndex = null;
  nextIndex = 0;
  finished = false;

  const screenWidth = window.innerWidth;
  const spacing = screenWidth / (trashData.length + 1);

  trashData.forEach(({ img }, i) => {
    // Top item bar
    const image = document.createElement("img");
    image.src = img;
    image.className = "item";
    image.dataset.index = i;
    image.style.filter = "grayscale(1) brightness(0.4)";
    itemsContainer.appendChild(image);

    // Trash on ground (3vh from bottom)
    const trash = document.createElement("div");
    trash.className = "trash";
    //trash.className += "trash";
    trash.dataset.index = i;
    trash.style.position = "absolute";
    trash.style.left = `${spacing * (i + 1)}px`;
    // trash.style.transform = `rotate(${Math.floor(Math.random() * 120)}deg)`;
    trash.style.bottom = "30vh";
    trash.style.zIndex = "10";
    trash.innerHTML = `<img src="${img}" height="150" width="auto">`;
    document.body.appendChild(trash);
  });

  console.log(`🐢 Collect the ${trashData[nextIndex].name} first!`);
  //dashboard to show info?
  const sound = new Audio(trashData[nextIndex].audio);
  sound.play();

  createFish();
}

// --- Create fixed fish (danger!) ---
function createFish() {
  fish = document.createElement("img");
  fish.className = "fish";
  fish.src = "assets/svg/shark.svg";
  //fish.style.position = "absolute"; // 👈 stays visible on scroll
  fish.style.top = "550px";
  fish.style.left = "10vw";
  document.body.appendChild(fish);

  // startTimer();

  let direction = 1;
  setInterval(() => {
    if (finished) return;
    let left = parseFloat(fish.style.left);
    if (left > window.innerWidth - 80) direction = -1;
    if (left < 0) direction = 1;
    fish.style.left = left + direction * 2 + "px";
  }, 30);
}

// --- Collision detection ---
function isColliding(a, b) {
  return !(
    a.right < b.left ||
    a.left > b.right ||
    a.bottom < b.top ||
    a.top > b.bottom
  );
}

// --- Deliver trash ---
function deliverTrash(trash, index) {
  const carriedImg = swimmer.querySelector(".carried-trash");
  if (carriedImg) carriedImg.remove();

  if (index === nextIndex) {
    trash.remove();
    const uiImg = itemsContainer.querySelector(`.item[data-index="${index}"]`);
    if (uiImg) uiImg.style.filter = "none";
    console.log(`✅ Delivered the ${trashData[index].name} correctly!`);
    nextIndex++;
    if (nextIndex < trashData.length) {
      console.log(`👉 Next: collect the ${trashData[nextIndex].name}`);
      const findNextAudio = new Audio(trashData[nextIndex].audio);
      findNextAudio.play();
    } else {
      const gameDoneAudio = new Audio("../assets/audio/juhuugennemfoert.mp3");
      gameDoneAudio.play();

      finishGame();
    }
  } else {
    console.log(
      `❌ Wrong item! That was the ${trashData[index].name}, you should deliver the ${trashData[nextIndex].name}!`
    );

    const wrongItemGameAudio = new Audio("../assets/audio/provIgen.mp3");
    wrongItemGameAudio.play();
    flyBack(trash);
  }

  carrying = null;
  carriedIndex = null;
}

// --- Smooth fly-back animation ---
function flyBack(trash) {
  const startLeft = parseFloat(trash.style.left);
  const startBottom = parseFloat(trash.style.bottom);
  const endBottom = 3; // back to 3vh
  const duration = 500;
  const start = performance.now();

  function animate(time) {
    const t = Math.min(1, (time - start) / duration);
    const ease = 1 - Math.pow(1 - t, 3);
    trash.style.left = startLeft + "px";
    trash.style.bottom = startBottom + (endBottom - startBottom) * ease + "vh";
    if (t < 1) requestAnimationFrame(animate);
    else trash.style.opacity = 1;
  }
  requestAnimationFrame(animate);
}

// -----||||-- MAKE TO HTML DELETE THIS SHIT CODE!
function finishGame() {
  //need the button and toggle for show class!
  finished = true;
  const msg = document.createElement("div");
  msg.className = "finish-message";
  msg.textContent = "Alt skrald samlet! Godt arbejde!";
  msg.style.position = "fixed";
  msg.style.top = "50%";
  msg.style.left = "50%";
  msg.style.transform = "translate(-50%, -50%)";
  msg.style.background = "rgba(0,0,0,0.7)";
  msg.style.color = "white";
  msg.style.padding = "20px 40px";
  msg.style.borderRadius = "12px";
  msg.style.fontSize = "24px";
  msg.style.textAlign = "center";
  msg.style.zIndex = "1000";
  msg.style.cursor = "pointer";
  msg.textContent += "\n\n🔄 Tryk for at spille igen!!";
  msg.addEventListener("click", setupGame);
  document.body.appendChild(msg);
  
  const resetGameAudio = new Audio("../assets/audio/spilleigen.mp3");
  resetGameAudio.play();
}

// --- Pointer move logic ---
document.body.onpointermove = (event) => {
  if (finished) return;

  const { pageX, pageY, clientY } = event;
swimmer.style.transform = `translate(${event.clientX}px, ${
  event.clientY + window.scrollY + 50
}px)`;

  swimmer.style.zIndex = "20";

  // console.log(`translate(${event.clientX}px, ${
  //   event.clientY + window.scrollY
  // }px)`)

  const distanceFromBottom = window.innerHeight - clientY;
  const distanceFromTop = clientY;

  if (distanceFromBottom < 200) targetScroll += 50;
  if (distanceFromTop < 200) targetScroll -= 50;

  const swimmerRect = swimmer.getBoundingClientRect();
  const trashItems = document.querySelectorAll(".trash");

  // --- Fish danger ---
const fishRect = fish.getBoundingClientRect();

if (!sharkCooldown && isColliding(swimmerRect, fishRect)) {

  sharkCooldown = true;  // start cooldown

  lives--;
  //livesLeft.innerText=lives
  const fartSound = new Audio("../assets/audio/fart2.mp3");
  fartSound.play();
  //   fartSound.addEventListener("ended", () => {
  //     fartSound.currentTime = 0;
  //     fartSound.play();
  // });

  console.log(`🔥 Ramt af hajen! Du har ${lives} liv tilbage`);

  // Nutte animation
  nutte.setAttribute("src","./assets/svg/nutte-puff.svg");
  setTimeout(() => nutte.setAttribute("src","./assets/svg/nutte.svg"), 4000);

  spawnFartBubbles();

  document.querySelector('.fart').style.opacity = "1";
  setTimeout(()=>document.querySelector('.fart').style.opacity = "0", 2000);

  // Reset shark cooldown after 5 seconds
  setTimeout(() => {
    sharkCooldown = false;
    console.log("🧊 Shark cooldown ended — can take damage again");
  }, 5000);

  // Optional: if lives reach 0 → restart game
  if (lives < 0) {
    console.log("💀 Ingen liv tilbage — spiller igen!");
    //setupGame();
    window.location.reload();
  }
}

  // --- Pick up ---
  if (!carrying) {
    trashItems.forEach((trash) => {
      const trashRect = trash.getBoundingClientRect();
      const index = parseInt(trash.dataset.index);
      if (isColliding(swimmerRect, trashRect)) {
        carrying = trash;
        carriedIndex = index;
        console.log(`🧺 Picked up the ${trashData[index].name}`);
        const img = trash.querySelector("img").cloneNode(true);
        img.className = "carried-trash";
        img.style.width = "40px";
        img.style.position = "absolute";
        img.style.top = "-10px";
        img.style.left = "10px";
        img.style.filter = "none";
        swimmer.appendChild(img);
        trash.style.opacity = 0.5;
      }
    });
  }

  // --- Deliver to home ---
  if (carrying) {
    const homeRect = home.getBoundingClientRect();
    if (isColliding(swimmerRect, homeRect)) {
      deliverTrash(carrying, carriedIndex);
    }
  }
};

function playThrice(src) {
  let count = 0;
  const audio = new Audio(src);

  audio.addEventListener("ended", () => {
    count++;
    if (count < 3) {
      audio.currentTime = 0;
      audio.play();
    }
  });

  audio.play();
}


// Wait for user to interact before starting the game
document.body.addEventListener("pointermove", setupGame, { once: true });


// prutbobler nutte

function spawnFartBubbles() {
  const fart = document.querySelector('.fart');
  const bubbleCount = Math.floor(Math.random() * 10) + 10; // 3-5 bobler

  for (let i = 0; i < bubbleCount; i++) {
    setTimeout(() => {
      const bubble = document.createElement('div');
      bubble.classList.add('fart-bubble');

      // Tilfældig størrelse
      const size = Math.random() * 20 + 20; // 20px - 40px
      bubble.style.width = `${size}px`;
      bubble.style.height = `${size}px`;

      // Tilfældig X-position indenfor fart
      const x = Math.random() * (fart.offsetWidth - size);
      bubble.style.left = `${x}px`;

      fart.appendChild(bubble);

      // Fjern boblen efter animation
      setTimeout(() => {
        bubble.remove();
      }, 800);
    }, i * 100); // små forsinkelser mellem bobler
  }
}