/* ------------------------------ TASK 8 ----------------------------
Parašykite TS kodą, kuris leis vartotojui įvesti ilgį metrais ir pamatyti jo pateikto ilgio konvertavimą į:
1. Centimetrus (cm) | Formulė: cm = m * 100
2. Colius (in) | Formulė: in = m * 39.37
3. Pėdas (ft) | Formulė: ft = m * 3.281
4. Mylias (mi) | Formulė: mi = m / 1609
5. Jardus (yd) | Formulė: yd = m * 1.094

Pastaba: Atvaizdavimas turi būti matomas su kiekviena įvestimi ir pateikiamas <div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */

const meterInput = document.querySelector("#meter") as HTMLInputElement;
const outputDiv = document.querySelector("#output") as HTMLDivElement;

meterInput.addEventListener("input", () => {
  outputDiv.innerHTML = "";
  const meters = parseFloat(meterInput.value);

  if (isNaN(meters)) {
    console.log("enter valid number");
    const errorMsg = document.createElement("p");
    errorMsg.textContent = "Enter valid number";
    outputDiv.appendChild(errorMsg);
    return;
  }

  const centimeters = meters * 100;
  const inches = meters * 39.37;
  const feet = meters * 3.281;
  const miles = meters / 1609;
  const yards = meters * 1.094;

  // ?? Centimeters -----------
  const centimetersStrong = document.createElement("strong");
  centimetersStrong.textContent = "Centimeters:";
  const centimetersOutput = document.createElement("p") as HTMLParagraphElement;

  centimetersOutput.appendChild(centimetersStrong);
  centimetersOutput.append(` ${centimeters.toFixed(2)} cm`);

  //?? inches --------
  const inchesStrong = document.createElement("strong");
  inchesStrong.textContent = "Inches:";
  const inchesOutput = document.createElement("p") as HTMLParagraphElement;

  inchesOutput.appendChild(inchesStrong);
  inchesOutput.append(` ${inches.toFixed(2)} in`);

  //?? feets ------
  const feetStrong = document.createElement("strong");
  feetStrong.textContent = "Feet:";
  const feetOutput = document.createElement("p") as HTMLParagraphElement;

  feetOutput.appendChild(feetStrong);
  feetOutput.append(` ${feet.toFixed(2)} ft`);

  //?? miles -----
  const milesStrong = document.createElement("strong");
  milesStrong.textContent = "Miles:";
  const milesOutput = document.createElement("p") as HTMLParagraphElement;

  milesOutput.appendChild(milesStrong);
  milesOutput.append(` ${miles.toFixed(2)} mi`);

  //?? yards-----------------
  const yardsStrong = document.createElement("strong");
  yardsStrong.textContent = "Yards:";
  const yardsOutput = document.createElement("p") as HTMLParagraphElement;

  yardsOutput.appendChild(yardsStrong);
  yardsOutput.append(` ${yards.toFixed(2)} yd`);

  outputDiv.append(
    centimetersOutput,
    inchesOutput,
    feetOutput,
    milesOutput,
    yardsOutput
  );
});
