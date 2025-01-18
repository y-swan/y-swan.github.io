// Helper function to animate an element (Web Animations API)
// Returns a Promise that resolves when the animation finishes.
function animateElement(element, keyframes, options) {
  const anim = element.animate(keyframes, options);
  return anim.finished;
}

async function runSequence() {
  const firstSVG = document.getElementById('firstSVG');
  const secondSVG = document.getElementById('secondSVG');
  const circleOverlay = document.getElementById('circleOverlay');

  // 1) Show the first SVG for 3 seconds.
  //    Since it's already visible, we just wait (no animation).
  await new Promise(resolve => setTimeout(resolve, 3000));

  // 2) Animate the white circle from scale(2) => scale(0),
  //    revealing the #3498db background behind it.
  await animateElement(
    circleOverlay,
    [
      { transform: 'translate(-50%, -50%) scale(2)' },
      { transform: 'translate(-50%, -50%) scale(0)' }
    ],
    {
      duration: 1000,     // 1 second
      easing: 'ease-in-out',
      fill: 'forwards'    // keep final state (circle scale=0)
    }
  );

  // Hide the circle or remove it from the DOM once done
  circleOverlay.style.display = 'none';

  // 3) Hide the first SVG, show the second SVG
  firstSVG.style.display = 'none';
  secondSVG.style.display = 'block';
}

// Start once the DOM is loaded
document.addEventListener('DOMContentLoaded', runSequence);