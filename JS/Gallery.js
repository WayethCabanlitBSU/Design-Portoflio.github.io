// Registering ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Creating a Lenis instance for smoother scrolling animation
const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
});

// Function to continuously requestAnimationFrame
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

// Creating a timeline animation with ScrollTrigger
const tl = gsap.timeline({
  scrollTrigger: {
    trigger: '.img',
    scrub: true
  }
}).to('.img', {
  stagger: 0.2,
  y: -630,
  scrub: true
});
