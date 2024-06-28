/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Pateikiamas informacijos atvaizdavimas <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Informacija apie user'į (jo kortelė) bei turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = 'https://api.github.com/users';

document.querySelector('#btn').addEventListener('click', () => {
   fetch(ENDPOINT)
      .then(res => res.json())
      .then(users => {
         const output = document.querySelector('#output')
         output.innerHTML = '';
         users.forEach(user => {
            console.log(user)
            const userCard = document.createElement('div')
            const userCardImg = document.createElement('img')
            userCardImg.setAttribute('src', `${user.avatar_url}`)
            userCardImg.setAttribute('alt', `${user.login}`)

            const userName = document.createElement('p')
            userName.textContent = user.login
            userCard.append(userCardImg, userName)
            output.appendChild(userCard)
         });
      })
})