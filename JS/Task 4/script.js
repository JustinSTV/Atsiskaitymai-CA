/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotojui atėjus į tinklapį kreipsis į cars.json failą
ir iš jo atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Informacija apie automobilį (brand) (jo kortelė) bei turi turėti 
bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = 'cars.json';

fetch(ENDPOINT)
  .then(res => res.json())
  .then(cars => {
    // console.log(cars)
    const output = document.querySelector('#output')
    cars.forEach(car => {
      // console.log(car)
      const brandCard = document.createElement('div')
      brandCard.classList.add('carCard')

      const carBrandName = document.createElement('h3')
      carBrandName.textContent = car.brand
      brandCard.appendChild(carBrandName)

      // console.log(car.models)
      car.models.forEach(carModel => {
        // console.log(carModel)
        const carModelName = document.createElement('p')
        carModelName.textContent = carModel
        brandCard.appendChild(carModelName)
      })
      output.appendChild(brandCard)
    });
  })