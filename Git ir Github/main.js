const introBtn = document.querySelector("#intro")
const workBtn = document.querySelector("#work")
const aboutBtn = document.querySelector('#about')
const contactBtn = document.querySelector("#contact")

const introArticle = document.querySelector("#introArticle");
const workArticle = document.querySelector("#workArticle");
const aboutArticle = document.querySelector("#aboutArticle");
const contactArticle = document.querySelector("#contactArticle");

const section = document.querySelector("section")
const main = document.querySelector("main")

const closeModalBtn = () => {
   document.querySelectorAll(".closeBtn").forEach(btn => {
      btn.addEventListener('click', () => {
         const articles = document.querySelectorAll("article");
         articles.forEach(article => {
            article.classList.remove('show');
            main.append(section);
         });
      });
   })
}

introBtn.addEventListener("click", () => {
   section.remove();
   introArticle.classList.add('show');
   closeModalBtn();
})


workBtn.addEventListener("click", () => {
   section.remove()
   workArticle.classList.add('show')
   closeModalBtn()
})

aboutBtn.addEventListener("click", () => {
   section.remove()
   aboutArticle.classList.add('show')
   closeModalBtn()
})

contactBtn.addEventListener("click", () => {
   section.remove()
   contactArticle.classList.add('show')
   closeModalBtn()
})