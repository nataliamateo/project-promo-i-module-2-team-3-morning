"use strict";const copyName=document.querySelector(".js-copyname"),pasteName=document.querySelector(".js-pastename"),copyJob=document.querySelector(".js-copyjob"),pasteJob=document.querySelector(".js-pastejob");function addText(e){pasteName.innerHTML=event.currentTarget.value,console.log(pasteName.innerHTML)}function addJob(e){pasteJob.innerHTML=event.currentTarget.value}copyName.addEventListener("keyup",addText),copyJob.addEventListener("keyup",addJob);