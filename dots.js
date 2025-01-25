const canvas = document.getElementById("dotCanvas");
const ctx = canvas.getContext("2d");

// ------------------------------
// 1. SETUP CANVAS SIZE
// ------------------------------
function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener("resize", resizeCanvas);
resizeCanvas(); // initial size

// ------------------------------
// 2. MOUSE & TOUCH SETUP
// ------------------------------
const mouse = {
  x: null,
  y: null,
  radius: 150,  // how far the dots react around the pointer
};

// Mouse events
window.addEventListener("mousemove", (e) => {
  mouse.x = e.x;
  mouse.y = e.y;
});
window.addEventListener("mouseout", () => {
  mouse.x = null;
  mouse.y = null;
});

// Touch events
window.addEventListener("touchstart", (e) => {
  if (e.touches.length > 0) {
    mouse.x = e.touches[0].clientX;
    mouse.y = e.touches[0].clientY;
  }
});

window.addEventListener("touchmove", (e) => {
  if (e.touches.length > 0) {
    mouse.x = e.touches[0].clientX;
    mouse.y = e.touches[0].clientY;
  }
});

window.addEventListener("touchend", () => {
  mouse.x = null;
  mouse.y = null;
});

// ------------------------------
// 3. DOT CLASS
// ------------------------------
class Dot {
  constructor(x, y) {
    // The dot's "home" position (the grid location)
    this.baseX = x;
    this.baseY = y;

    // Current position (start at base)
    this.x = x;
    this.y = y;

    this.size = 1;             // radius of the dot
    this.color = "#151515";    // single color for all dots

    this.returnSpeed = 0.05;   // how fast it returns to base
    this.pushFactor = 5;       // how strongly the dot is pushed away
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
  }

  update() {
    // Distance from current dot to mouse (or touch)
    if (mouse.x !== null && mouse.y !== null) {
      let dx = this.x - mouse.x;
      let dy = this.y - mouse.y;
      let distance = Math.sqrt(dx * dx + dy * dy);

      // If within the mouse radius, push away
      if (distance < mouse.radius) {
        // The closer the dot is, the stronger the push
        const angle = Math.atan2(dy, dx);
        const force = (mouse.radius - distance) / mouse.radius;
        const pushX = Math.cos(angle) * force * this.pushFactor;
        const pushY = Math.sin(angle) * force * this.pushFactor;

        this.x += pushX;
        this.y += pushY;
      } 
      else {
        // Move dot back to its base position
        let backX = this.baseX - this.x;
        let backY = this.baseY - this.y;
        this.x += backX * this.returnSpeed;
        this.y += backY * this.returnSpeed;
      }
    } 
    else {
      // If no mouse or touch is present, always return to base
      let backX = this.baseX - this.x;
      let backY = this.baseY - this.y;
      this.x += backX * this.returnSpeed;
      this.y += backY * this.returnSpeed;
    }

    this.draw();
  }
}

// ------------------------------
// 4. CREATE A GRID OF DOTS
// ------------------------------
let dotsArray = [];

function init() {
  dotsArray = [];
  // We'll create dots every 30px in both directions
  // Start at 15 so the dots are offset from the edges
  for (let y = 15; y < canvas.height; y += 30) {
    for (let x = 15; x < canvas.width; x += 30) {
      dotsArray.push(new Dot(x, y));
    }
  }
}

// ------------------------------
// 5. ANIMATION LOOP
// ------------------------------
function animate() {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Update and draw each dot
  dotsArray.forEach((dot) => dot.update());
}

// Initialize everything and start
init();
animate();