const canvas = document.getElementById("dotCanvas");
    const ctx = canvas.getContext("2d");

    // --- Resize canvas to full window ---
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    window.addEventListener("resize", () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init();
    });

    // --- Mouse tracking ---
    const mouse = {
      x: null,
      y: null,
      radius: 150, // The radius of influence around the mouse
    };

    window.addEventListener("mousemove", (e) => {
      mouse.x = e.x;
      mouse.y = e.y;
    });

    // --- Array to store our dots ---
    let dotsArray = [];

    // --- Helper: Generate random HSL color for variety ---
    function randomColor() {
      return `hsl(${Math.random() * 360}, 100%, 50%)`;
    }

    // --- Dot class ---
    class Dot {
      constructor(x, y) {
        // Base (original) position in the grid
        this.baseX = x;
        this.baseY = y;
        // Current position (starts at the same place as base)
        this.x = x;
        this.y = y;

        this.size = 1;             // Dot radius
        this.color = '#151515'; //  randomColor();

        // You can tune these factors to get different "push" or "return" behaviors
        this.returnSpeed = 0.05;   // How fast the dot moves back to its grid position
        this.pushFactor = 5;       // How strongly dots are pushed away from the mouse
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
      }

      update() {
        // Calculate distance from mouse
        let dx = this.x - mouse.x;
        let dy = this.y - mouse.y;
        let distance = Math.sqrt(dx * dx + dy * dy);

        // If the mouse is within influence radius, push the dot away
        if (distance < mouse.radius) {
          let angle = Math.atan2(dy, dx);
          // The closer to the mouse, the stronger the push
          let force = (mouse.radius - distance) / mouse.radius;
          let moveX = Math.cos(angle) * force * this.pushFactor;
          let moveY = Math.sin(angle) * force * this.pushFactor;

          this.x += moveX;
          this.y += moveY;
        } 
        else {
          // If mouse is not close, move dot back toward its base position
          let backX = this.baseX - this.x;
          let backY = this.baseY - this.y;
          this.x += backX * this.returnSpeed;
          this.y += backY * this.returnSpeed;
        }

        // Draw every frame
        this.draw();
      }
    }

    // --- Initialize the dots in a grid ---
    function init() {
      dotsArray = [];

      // 30px spacing, so we start at 15 to center them a bit (optional).
      // Adjust as you see fit:
      for (let y = 15; y < canvas.height; y += 30) {
        for (let x = 15; x < canvas.width; x += 30) {
          dotsArray.push(new Dot(x, y));
        }
      }
    }

    // --- Animation loop ---
    function animate() {
      requestAnimationFrame(animate);
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      dotsArray.forEach((dot) => dot.update());
    }

    // --- Start it all up ---
    init();
    animate();