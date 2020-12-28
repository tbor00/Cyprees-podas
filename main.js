let p = {
  flecha: document.querySelector("#buttn"),
};

let m = {
  reflejo: function () {
    setInterval(function () {
      p.flecha.style.opacity = p.flecha.style.opacity == 0.5 ? 1 : 0.5;
    }, 1000);
  },
};

m.reflejo();

ScrollReveal().reveal("#nosotros", {
  duration: 3000,
  origin: "bottom",
  distance: "-80px",
});

ScrollReveal().reveal("#faq", {
  duration: 3000,
  origin: "top",
  distance: "-80px",
});

ScrollReveal().reveal("#trabajos", {
  duration: 3000,
  origin: "bottom",
  distance: "-80px",
});

ScrollReveal().reveal("#hacemos", {
  duration: 3000,
  origin: "top",
  distance: "-80px",
});

ScrollReveal().reveal("#menu", {
  duration: 3000,
  origin: "bottom",
  distance: "-80px",
});

ScrollReveal().reveal("#encontranos", {
  duration: 3000,
  origin: "bottom",
  distance: "-80px",
});

ScrollReveal().reveal("#contacto", {
  duration: 3000,
  origin: "bottom",
  distance: "-80px",
});
