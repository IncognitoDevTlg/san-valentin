"use strict";

console.log("Script cargado correctamente");

const titleElement = document.querySelector(".title");
const buttonsContainer = document.querySelector(".buttons");
const yesButton = document.querySelector(".btn--yes");
const noButton = document.querySelector(".btn--no");
const catImg = document.querySelector(".cat-img");

console.log(titleElement, buttonsContainer, yesButton, noButton, catImg);

const MAX_IMAGES = 5;

let play = true;
let noCount = 0;

yesButton.addEventListener("click", function () {
  console.log("Botón Sí clickeado");
  handleYesClick();
  createHearts();
});

noButton.addEventListener("click", function () {
  console.log("Botón No clickeado");
  if (play) {
    noCount++;
    console.log(`noCount: ${noCount}`);
    const imageIndex = Math.min(noCount, MAX_IMAGES);
    console.log(`Cambiando a la imagen: cat-${imageIndex}.jpg`);
    changeImage(imageIndex);
    resizeYesButton();
    updateNoButtonText();
    if (noCount === MAX_IMAGES) {
      play = false;
    }
  }
});

function handleYesClick() {
  titleElement.innerHTML = "¡Yayyy!! :3";
  buttonsContainer.classList.add("hidden");
  changeImage("yes");
}

function resizeYesButton() {
  const computedStyle = window.getComputedStyle(yesButton);
  const fontSize = parseFloat(computedStyle.getPropertyValue("font-size"));
  const newFontSize = fontSize * 1.6;

  yesButton.style.fontSize = `${newFontSize}px`;
}

function generateMessage(noCount) {
  const messages = [
    "No",
    "¿Estás segura?",
    "Cariño, por favor",
    "No me hagas esto :(",
    "Me estás rompiendo el corazón",
    "Voy a llorar...",
  ];

  const messageIndex = Math.min(noCount, messages.length - 1);
  return messages[messageIndex];
}

function changeImage(image) {
  catImg.src = `img/cat-${image}.jpg`;
  console.log(`Imagen cambiada a: img/cat-${image}.jpg`);
}

function updateNoButtonText() {
  noButton.innerHTML = generateMessage(noCount);
  console.log(`Texto del botón No actualizado a: ${noButton.innerHTML}`);
}

function createHearts() {
  const numberOfHearts = 50;

  for (let i = 0; i < numberOfHearts; i++) {
    const heart = document.createElement("div");
    heart.classList.add("heart");

    // Posición horizontal aleatoria dentro del ancho de la ventana
    const leftPosition = Math.random() * window.innerWidth;
    heart.style.left = `${leftPosition}px`;

    // Duración de la animación aleatoria
    heart.style.animationDuration = Math.random() * 3 + 2 + "s";

    // Opacidad aleatoria
    heart.style.opacity = Math.random();

    // Añadir el corazón al cuerpo del documento
    document.body.appendChild(heart);

    // Eliminar el corazón después de que termine la animación
    setTimeout(() => {
      heart.remove();
    }, 5000);
  }
}