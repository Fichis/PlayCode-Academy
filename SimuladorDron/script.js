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


setTimeout(moveDown, 500);
setTimeout(moveDown, 1000);
setTimeout(moveDown, 1500);
setTimeout(moveDown, 2000);
setTimeout(moveDown, 2500);
setTimeout(moveDown, 3000);
setTimeout(moveDown, 3500);
setTimeout(moveDown, 4000);
setTimeout(moveDown, 4500);
setTimeout(moveDown, 5000);
setTimeout(moveDown, 5500);
setTimeout(moveDown, 6000);
setTimeout(moveDown, 6500);
setTimeout(moveDown, 7000);
setTimeout(moveDown, 7500);
setTimeout(moveRight, 8000);
setTimeout(moveRight, 8500);
setTimeout(moveRight, 9000);
setTimeout(moveRight, 9500);
setTimeout(moveRight, 10000);
setTimeout(moveRight, 10500);
setTimeout(moveRight, 11000);
setTimeout(moveRight, 11500);
setTimeout(moveRight, 12000);
setTimeout(moveRight, 12500);
setTimeout(moveRight, 13000);
setTimeout(moveRight, 13500);
setTimeout(moveRight, 14000);
setTimeout(moveRight, 14500);
setTimeout(moveRight, 15000);
setTimeout(moveRight, 15500);
setTimeout(moveRight, 16000);
setTimeout(moveRight, 16500);
setTimeout(moveRight, 17000);
setTimeout(moveRight, 17500);
setTimeout(moveRight, 18000);
setTimeout(moveRight, 18500);
setTimeout(moveRight, 19000);
setTimeout(moveRight, 19500);
setTimeout(moveRight, 20000);
setTimeout(moveRight, 20500);

