const introBtn = document.querySelector("#intro")
const workBtn = document.querySelector("#work")
const aboutBtn = document.querySelector('#about')
const contactBtn = document.querySelector("#contact")

const introDialog = document.querySelector("#introDialog");
const workDialog = document.querySelector("#workDialog");
const aboutDialog = document.querySelector("#aboutDialog");
const contactDialog = document.querySelector("#contactDialog");

const section = document.querySelector("section")


introBtn.addEventListener("click", () => {
   console.log("veikia")
   section.remove()
   introDialog.showModal()
})

workBtn.addEventListener("click", () => {
   section.remove()
   workDialog.showModal()
})

aboutBtn.addEventListener("click", () => {
   section.remove()
   aboutDialog.showModal()
})

contactBtn.addEventListener("click", () => {
   section.remove()
   contactDialog.showModal()
})