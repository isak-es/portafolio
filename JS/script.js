
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
// --- HABILIDADES TECNICAS ---

const habilidadesWrapper = document.getElementById('habilidadesWrapper');
const habilidadesContenido = document.getElementById('habilidadesContenido');

habilidadesWrapper.addEventListener('mouseenter', () => {
    habilidadesContenido.classList.remove('d-none');
    habilidadesContenido.style.opacity = 1;
});

habilidadesWrapper.addEventListener('mouseleave', () => {
    habilidadesContenido.classList.add('d-none');
    habilidadesContenido.style.opacity = 0;
});
const casoWrapper = document.getElementById('casoWrapper');
const casoContenido = document.getElementById('casoContenido');

casoWrapper.addEventListener('mouseenter', () => {
    casoContenido.classList.remove('d-none');
    casoContenido.style.opacity = 1;
});

casoWrapper.addEventListener('mouseleave', () => {
    casoContenido.classList.add('d-none');
    casoContenido.style.opacity = 0;
});
const habilidades = document.getElementById("habilidadesContenido");
const flecha = document.querySelector(".flecha-collapse");

habilidades.addEventListener("show.bs.collapse", function () {
    flecha.classList.remove("ti-chevron-down");
    flecha.classList.add("ti-chevron-up");
});

habilidades.addEventListener("hide.bs.collapse", function () {
    flecha.classList.remove("ti-chevron-up");
    flecha.classList.add("ti-chevron-down");
});
