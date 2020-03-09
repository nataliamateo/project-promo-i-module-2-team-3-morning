"use strict";

const userDetails = {};
const fullname = document.querySelector(".js-fullname");
const job = document.querySelector(".js-job");
const email = document.querySelector(".js-email");
const telephone = document.querySelector(".js-telephone");
const linkedin = document.querySelector(".js-linkedin");
const github = document.querySelector(".js-github");

function handleUserDetails(ev) {
  debugger;
  const el = ev.currentTarget;
  userDetails[name] = el.value;
}
fullname.addEventListener("keyup", handleUserDetails);
job.addEventListener("keyup", handleUserDetails);
email.addEventListener("keyup", handleUserDetails);
telephone.addEventListener("keyup", handleUserDetails);
linkedin.addEventListener("keyup", handleUserDetails);
github.addEventListener("keyup", handleUserDetails);

console.log(userDetails);
