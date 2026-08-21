
// --- BLOQUE SOBRE MÍ ---
const sobreMi = document.getElementById('sobreMi');
const infoExtra = document.getElementById('infoExtra');

sobreMi.addEventListener('mouseenter', () => {
  infoExtra.classList.remove('d-none');
  infoExtra.style.opacity = 1;
});

sobreMi.addEventListener('mouseleave', () => {
  infoExtra.classList.add('d-none');
  infoExtra.style.opacity = 0;
});

// --- BLOQUE CONTACTO ---
const contactoWrapper = document.getElementById('contactoWrapper');
const infoContacto = document.getElementById('infoContacto');

contactoWrapper.addEventListener('mouseenter', () => {
  infoContacto.classList.remove('d-none');
  infoContacto.style.opacity = 1;
});

contactoWrapper.addEventListener('mouseleave', () => {
  infoContacto.classList.add('d-none');
  infoContacto.style.opacity = 0;
});

// --- BLOQUE PORTAFOLIO ---
const portafolioWrapper = document.getElementById('portafolioWrapper');
const portafolioLinks = document.getElementById('portafolioLinks');

portafolioWrapper.addEventListener('mouseenter', () => {
  portafolioLinks.classList.remove('d-none');
  portafolioLinks.style.opacity = 1;
});

portafolioWrapper.addEventListener('mouseleave', () => {
  portafolioLinks.classList.add('d-none');
  portafolioLinks.style.opacity = 0;
});
