//Scroll Reaveal
window.sr = ScrollReveal();
sr.reveal(".container", {
  duration: 2000,
  origin: "top",
  distance: "100px",
});

sr.reveal(".btn", {
    duration: 2000,
    origin: "bottom",
    delay: 1500,
    distance: "50px",
    easing: "ease-in-out",
  });