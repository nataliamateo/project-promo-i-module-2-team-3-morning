"use strict";
debugger;

const copyName = document.querySelector(".js-copyname");
const pasteName = document.querySelector(".js-pastename");
const copyJob = document.querySelector(".js-copyjob");
const pasteJob = document.querySelector(".js-pastejob");

function addText(ev) {
  pasteName.innerHTML = event.currentTarget.value;
  console.log(pasteName.innerHTML);
}
copyName.addEventListener("keyup", addText);

function addJob(ev) {
  pasteJob.innerHTML = event.currentTarget.value;
}

copyJob.addEventListener("keyup", addJob);

// botón reset
const imageName = document.querySelector(".js-pastename");
const imageJob = document.querySelector(".js-pastejob");
const imageButtonReset = document.querySelector(".js-reset");

function resetImageData() {
  imageName.innerHTML = "Nombre Apellido";
  imageJob.innerHTML = "Front-end developer";
}
imageButtonReset.addEventListener("click", resetImageData);

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

//start collapsible
const collapsibleTrigger = document.querySelectorAll(".js-collapsible--trigger");
const collapsibleTrigger2 = document.querySelector(".js-collapsible--trigger--2");
console.log(collapsibleTrigger2);

function updateCollapsible(ev) {
  const currentCollapsible = ev.currentTarget.parentElement;
  if (currentCollapsible.classList.contains("collapsable--open")) {
    // Si está abierto, lo puedo cerrar
    currentCollapsible.classList.remove("collapsable--open");
  } else {
    // Si está cerrado:
    // Los cierro todos
    for (const item of collapsibleTrigger) {
      item.parentElement.classList.remove("collapsable--open");
    }
    // Abro el correcto
    currentCollapsible.classList.add("collapsable--open");
  }
}
for (const item of collapsibleTrigger) {
  item.addEventListener("click", updateCollapsible);
}

function updateCollapsibleTwitter(ev) {
  const currentCollapsibleTwitter = ev.currentTarget.parentElement;
  if (currentCollapsibleTwitter.classList.contains("collapsable--open2")) {
    currentCollapsibleTwitter.classList.remove("collapsable--open2");
  } else {
    currentCollapsibleTwitter.classList.add("collapsable--open2");
    // } else if {

    // }
  }
}
collapsibleTrigger2.addEventListener("click", updateCollapsibleTwitter);
