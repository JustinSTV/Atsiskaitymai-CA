const introBtn = document.querySelector("#intro")
const workBtn = document.querySelector("#work")
const aboutBtn = document.querySelector('#about')
const contactBtn = document.querySelector("#contact")

const introDialog = document.querySelector("#introDialog");
const workDialog = document.querySelector("#workDialog");
const aboutDialog = document.querySelector("#aboutDialog");
const contactDialog = document.querySelector("#contactDialog");

const section = document.querySelector("section")
const main = document.querySelector("main")

const closeModalBtn = () => {
   document.querySelectorAll(".closeBtn").forEach(btn => {
      btn.addEventListener('click', () => {
         const dialogs = document.querySelectorAll("dialog");
         dialogs.forEach(dialog => {
            if (dialog.open) {
               dialog.close();
               main.append(section)
            }
         });
      })
   })
}

introBtn.addEventListener("click", () => {
   section.remove()
   introDialog.showModal()
   closeModalBtn()
})


workBtn.addEventListener("click", () => {
   section.remove()
   workDialog.showModal()
   closeModalBtn()
})

aboutBtn.addEventListener("click", () => {
   section.remove()
   aboutDialog.showModal()
   closeModalBtn()
})

contactBtn.addEventListener("click", () => {
   section.remove()
   contactDialog.showModal()
   closeModalBtn()
})