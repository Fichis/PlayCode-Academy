const drone = document.getElementById("drone");

let x = 50;
let y = 50;
let speed = 20;

const obstacles = document.querySelectorAll(".obstacle");
const goal = document.getElementById("goal");

function updateDrone() {
  drone.style.left = x + "px";
  drone.style.top = y + "px";
}

window.addEventListener("keydown", (event) => {
  const key = event.key.toLowerCase();

  if (key === "d") x += speed;
  if (key === "a") x -= speed;
  if (key === "w") y -= speed;
  if (key === "s") y += speed;

  // 1. Primero actualizas la posición visual
  updateDrone();

  // 2. AHORA recalculas posiciones reales
  const droneRect = drone.getBoundingClientRect();
  const goalRect = goal.getBoundingClientRect();

  // 3. Colisiones con obstáculos
  for (let obstacle of obstacles) {
    const obstacleRect = obstacle.getBoundingClientRect();

    if (touching(droneRect, obstacleRect)) {
      alert("💥 Choque!");
      return; // importante: corta el movimiento
    }
  }

  // 4. Meta
  if (touching(droneRect, goalRect)) {
    alert("🎉 Misión completada!");
    return;
  }
});

function touching(a, b) {
  return !(
    a.right < b.left ||
    a.left > b.right ||
    a.bottom < b.top ||
    a.top > b.bottom
  );
}

function moveRight() {
  x += speed;
  updateDrone();
}

function moveDown() {
  y += speed;
  updateDrone();
}


setTimeout(moveRight, 500);
setTimeout(moveRight, 1000);
setTimeout(moveDown, 1500);
setTimeout(moveDown, 2000);
