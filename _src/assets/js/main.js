"use strict";

const userDetails = document.querySelectorAll(".js-input-text");

// un bucle que recorra todos los elementos del objeto

function handleUserDetails(ev) {
  debugger;
  const el = ev.currentTarget;
  userDetails[name] = el.value;
}
userDetails.addEventListener("keyup", handleUserDetails);

console.log(userDetails);
