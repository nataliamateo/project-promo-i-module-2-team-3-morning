'use strict';
// debugger;

// NOMBRAR VARIABLES FLECHAS COLAPSABLES

const arrowButtonForm = document.querySelector('.js-arrow');
const arrowButtonForm2 = document.querySelector('.js-arrow2');
const arrowButtonForm3 = document.querySelector('.js-arrow3');

const collapsibleDesign = document.querySelector('.js-hidden');
const collapsibleForm = document.querySelector('.js-hidden-fill');
const collapsibleShare = document.querySelector('.js-hidden-share');

// NOMBRAR RESTO DE VARIABLES

const imageButtonReset = document.querySelector('.js-button-reset');
const inputNameUser = document.getElementById('completename');
const imageName = document.querySelector('.js-image-name');
const inputProffesionUser = document.getElementById('job');
const imageProffesion = document.querySelector('.img-creation__card--profession');
const imageListLinks = document.querySelector('.img-creation__card--list');

const inputEmailUser = document.getElementById('email');
const imageEmail = document.querySelector('.js-image-mail');

// FUNCIONES PARA LOS COLAPSABLES

function showForm() {
  collapsibleDesign.classList.toggle('js-hidden');
}

function showForm2() {
  collapsibleForm.classList.toggle('js-hidden-fill');
}
function showForm3() {
  collapsibleShare.classList.toggle('js-hidden-share');
}

// FUNCIÓN BOTÓN RESET

function resetImageData() {
  imageName.innerHTML = 'Nombre Apellido';
  imageProffesion.innerHTML = 'Front-end developer';
}

// FUNCIÓN NOMBRE Y PROFESIÓN

imageButtonReset.addEventListener('click', resetImageData);

function handleShowNameUser() {
  imageName.innerHTML = event.currentTarget.value;
}
function handleShowProffesionUser() {
  imageProffesion.innerHTML = event.currentTarget.value;
}

// PINTAR LISTA ENLACES

function paintLinksHtmlCode() {
  imageListLinks.innerHTML = `<li class="img-creation__card--round">
    <a href="#" title="teléfono"><i class="fas fa-mobile-alt"></i></a>
  </li>`;
  imageListLinks.innerHTML += `<li class="img-creation__card--round">
      <a class="js-image-mail" href="#" title="correo"><i class="far fa-envelope"></i></a>
    </li>`;
  imageListLinks.innerHTML += `<li class="img-creation__card--round">
      <a href="#" title="linkedin"><i class="fab fa-linkedin-in"></i></a>
    </li>`;
  imageListLinks.innerHTML += `<li class="img-creation__card--round">
      <a href="#" title="github"><i class="fab fa-github-alt"></i></a>
    </li>`;
}
paintLinksHtmlCode();

// INTENTO DE METER UNA URL EN LA LISTA DE LA IMAGEN
console.log(imageEmail);

function handleAddEmail(ev) {
  const email = imageEmail.href;
  imageEmail[email].innerHTML = ev.currentTarget.value;
}

// LISTENERS

arrowButtonForm.addEventListener('click', showForm);
arrowButtonForm2.addEventListener('click', showForm2);
arrowButtonForm3.addEventListener('click', showForm3);

inputNameUser.addEventListener('keyup', handleShowNameUser);
inputProffesionUser.addEventListener('keyup', handleShowProffesionUser);
inputEmailUser.addEventListener('keyup', handleAddEmail);

console.log('>> Ready :)');

// function showForm() {
//   if (collapsibleDesign.classList.contains('js-hidden')) {
//     collapsibleDesign.classList.remove('js-hidden');
//   } else {
//     collapsibleDesign.classList.add('js-hidden');
//   }
// }
