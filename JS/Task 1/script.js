/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio konvertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formulė: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */

document
    .querySelector('form')
    .addEventListener('submit', e => {
        e.preventDefault()

        const weightInput = e.target.elements.search.value;
        console.log(weightInput)

        let pounds = weightInput * 2.2046
        let grams = weightInput / 0.0010000
        let ounces = weightInput * 35.274

        const outputDiv = document.querySelector('#output')
        outputDiv.innerHTML = ''

        const poundsDiv = document.createElement('div');
        poundsDiv.textContent = `Pounds: ${pounds.toFixed(2)} lb`;

        const gramsDiv = document.createElement('div');
        gramsDiv.textContent = `Grams: ${grams.toFixed(0)} g`;

        const ouncesDiv = document.createElement('div');
        ouncesDiv.textContent = `Ounces: ${ounces.toFixed(2)} oz`;

        outputDiv.append(poundsDiv, gramsDiv, ouncesDiv)
    })