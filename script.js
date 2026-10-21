
const stars = document.getElementById("stars");

// Create twinkling stars
for (let i = 0; i < 180; i++) {
  const star = document.createElement("div");
  star.className = "star";
  star.style.left = Math.random() * 100 + "%";
  star.style.top = Math.random() * 100 + "%";
  star.style.animationDelay = Math.random() * 3 + "s";
  stars.appendChild(star);
}

// All romantic scenes
const scenes = [
  document.getElementById("scene1"),
  document.getElementById("scene2"),
  document.getElementById("scene3"),
  document.getElementById("scene4"),
  document.getElementById("scene5")
];

let current = 0;
let isChanging = false;

// Change scene with animation
function changeScene(next) {
  if (
    next === current ||
    isChanging ||
    next < 0 ||
    next >= scenes.length
  ) {
    return;
  }

  isChanging = true;

  const oldScene = scenes[current];
  const newScene = scenes[next];

  oldScene.classList.remove("active");
  oldScene.classList.add("exit");

  window.setTimeout(() => {
    oldScene.classList.remove("exit");
    newScene.classList.add("active");

    current = next;
    isChanging = false;
  }, 1200);
}

// Flowers and warning
const red = document.getElementById("red");
const black = document.getElementById("black");
const warning = document.getElementById("warning");
const warningText = document.getElementById("warningText");

// Move black flower to a random position

function moveBlackFlower() {
  const area = document.querySelector("#scene1 .flowers");

  if (!area || !warning || !black) return;

  // Keep the flower inside the flowers area
  const areaWidth = area.clientWidth;
  const areaHeight = area.clientHeight;

  // Switch to absolute positioning after the first click
  if (getComputedStyle(black).position !== "absolute") {
    const flowerRect = black.getBoundingClientRect();
    const areaRect = area.getBoundingClientRect();

    black.style.position = "absolute";
    black.style.left = `${flowerRect.left - areaRect.left}px`;
    black.style.top = `${flowerRect.top - areaRect.top}px`;
  }

  const flowerWidth = black.offsetWidth;
  const flowerHeight = black.offsetHeight;

  const maxX = Math.max(0, areaWidth - flowerWidth);
  const maxY = Math.max(0, areaHeight - flowerHeight);

  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;

  black.style.left = `${randomX}px`;
  black.style.top = `${randomY}px`;

  // Show the warning on every click
  const messages = [
    "EXCUSE ME, MADAM?! 😂💋",
    "Baby, why are you choosing BLACK?! 😭🖤",
    "Stop running after the black flower!❤️😂",
    "Your honey is getting jealous! 🥹💗"
  ];

  const randomMessage =
    messages[Math.floor(Math.random() * messages.length)];

  warningText.innerHTML =
    `${randomMessage}<br><br>` +
    "Don't make me jealous of a flower! 😂💋";

  warning.classList.remove("show");

  // Restart the warning animation
  void warning.offsetWidth;

  warning.classList.add("show");
}


// Black flower click
black.addEventListener("click", moveBlackFlower);

// Black flower keyboard support
black.addEventListener("keydown", (event) => {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    moveBlackFlower();
  }
});

const bgMusic = document.getElementById("bgMusic");
const musicStart = document.getElementById("musicStart");

if (bgMusic && musicStart) {
  musicStart.addEventListener("click", async () => {
    if (bgMusic.paused) {
      try {
        await bgMusic.play();
        musicStart.textContent = "⏸ Stop Song 💔";
      } catch (error) {
        console.error("Music error:", error);
        musicStart.textContent = "🎵 Tap to Play Song ❤️";
      }
    } else {
      bgMusic.pause();
      musicStart.textContent = "🎵 Play Song ❤️";
    }
  });

  bgMusic.addEventListener("ended", () => {
    musicStart.textContent = "🎵 Play Song ❤️";
  });
}


// Red flower: continue to romantic message
red.addEventListener("click", () => {
  changeScene(1);
});


// Red flower keyboard support
red.addEventListener("keydown", (event) => {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    changeScene(1);
  }
});

// Next buttons
document.getElementById("next2").addEventListener("click", () => {
  changeScene(2);
});

document.getElementById("next3").addEventListener("click", () => {
  changeScene(3);
});

document.getElementById("next4").addEventListener("click", () => {
  changeScene(4);
});

// Floating hearts, roses and sparkles
const particleSymbols = ["❤️", "💕", "✨", "🌹", "💗", "✦"];

function createParticle() {
  const app = document.getElementById("app");
  if (!app) return;

  const particle = document.createElement("div");
  particle.className = "particle";

  particle.textContent =
    particleSymbols[
      Math.floor(Math.random() * particleSymbols.length)
    ];

  particle.style.left = Math.random() * 100 + "%";
  particle.style.animationDuration =
    (5 + Math.random() * 7) + "s";

  app.appendChild(particle);

  window.setTimeout(() => {
    particle.remove();
  }, 13000);
}

window.setInterval(createParticle, 500);
