'use strict';

// const copyName = document.querySelector('.js-copyname');
// const pasteName = document.querySelector('.js-pastename');
// const copyJob = document.querySelector('.js-copyjob');
// const pasteJob = document.querySelector('.js-pastejob');

// function addText(ev) {
//   pasteName.innerHTML = event.currentTarget.value;
//   console.log(pasteName.innerHTML);
// }
// copyName.addEventListener('keyup', addText);

// function addJob(ev) {
//   pasteJob.innerHTML = event.currentTarget.value;
// }

// copyJob.addEventListener('keyup', addJob);

//BOTON RESET
//necesitamos recorrer todos los imputs, y poner todos sus values a '', userDetailsoff.value = "";, tocando solo el value, los placeholder igual se quedan.
// cuanto se tenga el objeto con los imputs, lo que hay que hacer es recorrer ese obejto y poner sus valores a '';
const imageName = document.querySelector('.js-pastename');
const imageJob = document.querySelector('.js-pastejob');
const imageButtonReset = document.querySelector('.js-reset');

function resetUserData() {
  // for (const userDetailson of userDetails) { //userDetails es el objeto que creamos con los datos
  //   userDetailson.value = '';
  // } //esto solo resetea los valores del objeto, pero también resetea los imputs? no verdad?
  const allInputData = document.querySelectorAll('.js-input-text');
  console.log(allInputData);
  for (const allInputDataOff of allInputData) {
    console.log(allInputDataOff);
    allInputDataOff.value = '';
  }

  document.querySelector('.js-cardname').innerHTML = 'Nombre Apellido';
  document.querySelector('.js-cardjob').innerHTML = 'Front-end developer';
  cardElement.classList.remove('js-card-palette2');
  cardElement.classList.remove('js-card-palette3');
  cardElement.classList.add('js-card-palette1');
  console.log(cardElement);
}
imageButtonReset.addEventListener('click', resetUserData);

//AQUI ACABA BOTON RESET

// const userDetails = document.querySelectorAll(".js-input-text");

// // un bucle que recorra todos los elementos del objeto

// for (const details of userDetails) {
//   console.log(`${details}`);
// }

// function handleUserDetails(ev) {
//   debugger;
//   const el = ev.currentTarget;
//   userDetails[name] = el.value;
// }

// userDetails.addEventListener("keyup", handleUserDetails);

//START COLLAPSIBLE
const collapsibleTrigger = document.querySelectorAll('.js-collapsible--trigger');
const collapsibleTrigger2 = document.querySelector('.js-collapsible--trigger--2');
console.log(collapsibleTrigger2);

function updateCollapsible(ev) {
  const currentCollapsible = ev.currentTarget.parentElement;
  if (currentCollapsible.classList.contains('collapsable--open')) {
    // Si está abierto, lo puedo cerrar
    currentCollapsible.classList.remove('collapsable--open');
  } else {
    // Si está cerrado:
    // Los cierro todos
    for (const item of collapsibleTrigger) {
      item.parentElement.classList.remove('collapsable--open');
    }
    // Abro el correcto
    currentCollapsible.classList.add('collapsable--open');
  }
}
for (const item of collapsibleTrigger) {
  item.addEventListener('click', updateCollapsible);
}

function updateCollapsibleTwitter(ev) {
  const currentCollapsibleTwitter = ev.currentTarget.parentElement;
  if (currentCollapsibleTwitter.classList.contains('collapsable--open2')) {
    currentCollapsibleTwitter.classList.remove('collapsable--open2');
  } else {
    currentCollapsibleTwitter.classList.add('collapsable--open2');
    // } else if {

    // }
  }
}
collapsibleTrigger2.addEventListener('click', updateCollapsibleTwitter);

// COLORES DE LA PALETA

const inputPalette1 = document.querySelector('.js-palette1');
const inputPalette2 = document.querySelector('.js-palette2');
const inputPalette3 = document.querySelector('.js-palette3');
const cardElement = document.querySelector('.js-card');

function paintPalette() {
  cardElement.classList.remove('js-card-palette1');
  cardElement.classList.remove('js-card-palette2');
  cardElement.classList.remove('js-card-palette3');
  let selectedPalette = document.querySelector('.js-radio:checked');
  console.log(selectedPalette);
  selectedPalette = selectedPalette.value;
  console.log(selectedPalette);
  cardElement.classList.add('js-card-palette' + selectedPalette);
}

inputPalette1.addEventListener('click', paintPalette);
inputPalette2.addEventListener('click', paintPalette);
inputPalette3.addEventListener('click', paintPalette);

// AQUÍ ACABAN COLORES DE LA PALETA

// FORMULARIO RELLENA REALIZADO DE MANERA LARGA
const userName = document.querySelector('.js-input-name');
const userJob = document.querySelector('.js-input-job');
const userMail = document.querySelector('.js-input-email');
const userPhone = document.querySelector('.js-input-phone');
const userLinkedin = document.querySelector('.js-input-linkedin');
const userGithub = document.querySelector('.js-input-github');

function getUserName() {
  document.querySelector('.js-cardname').innerHTML = userName.value;
}

function getUserJob() {
  document.querySelector('.js-cardjob').innerHTML = userJob.value;
}
function getUserMail() {
  document.querySelector('.js-cardemail').href = 'mailto:' + userMail.value;
}

function getUserPhone() {
  document.querySelector('.js-cardphone').href = 'tel:' + userPhone.value;
}
function getUserLinkedin() {
  document.querySelector('.js-cardlinkedin').href + userLinkedin.value;
}

function getUserGithub() {
  document.querySelector('.js-cardgithub').href = '' + userGithub.value;
}

userName.addEventListener('keyup', getUserName);
userJob.addEventListener('keyup', getUserJob);
userMail.addEventListener('keyup', getUserMail);
userPhone.addEventListener('keyup', getUserPhone);
userLinkedin.addEventListener('keyup', getUserLinkedin);
userGithub.addEventListener('keyup', getUserGithub);

// AQUI ACABA LA PARTE DEL FORMULARIO RELLENAR

// AÑADIR IMAGEN
const fr = new FileReader();
const uploadBtn = document.querySelector('.js__profile-trigger');
const fileField = document.querySelector('.js__profile-upload-btn');
const profileImage = document.querySelector('.js__profile-image');
const profilePreview = document.querySelector('.js__profile-preview');

/**
 * Recoge el archivo añadido al campo de tipo "file"
 * y lo carga en nuestro objeto FileReader para que
 * lo convierta a algo con lo que podamos trabajar.
 * Añade un listener al FR para que ejecute una función
 * al tener los datos listos
 * @param {evento} e
 */
function getImage(e) {
  var myFile = e.currentTarget.files[0];
  fr.addEventListener('load', writeImage);
  fr.readAsDataURL(myFile);
}

/**
 * Una vez tenemos los datos listos en el FR podemos
 * trabajar con ellos ;)
 */
function writeImage() {
  /* En la propiedad `result` de nuestro FR se almacena
   * el resultado
   */
  profileImage.style.backgroundImage = `url(${fr.result})`;
  profilePreview.style.backgroundImage = `url(${fr.result})`;
}

/**
 * Genera un click automático en nuesto campo de tipo "file"
 * que está oculto
 */
function fakeFileClick() {
  fileField.click();
}

/**
 * Añadimos los listeners necesarios:
 * - al botón visible para generar el click automático
 * - al campo oculto para cuando cambie su value
 */
uploadBtn.addEventListener('click', fakeFileClick);
fileField.addEventListener('change', getImage);

// FINAL AÑADIR IMAGEN
