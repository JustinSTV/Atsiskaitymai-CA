/* ------------------------------ TASK 6 ---------------------------------------------------------------
Sukurkite klasę "Potion", kuri sukuria objektus su 2 savybėm ir 1 metodu:

Savybės:
  color(masyvas tryjų spalvų 0-255), volume
Metodas: 
  mix(potion) - Pateikiamas kitas eliksyras ir jiedu sumaišomi į vieną naują eliksyrą, kuris yra grąžinamas kaip naujas Klasės objektas.

Pvz.: 
  felix_felicis     =  Potion([255, 255, 255],  7)
  polyjuice         =  Potion([ 51, 102,  51], 12)
  new_potion        =  felix_felicis.mix(polyjuice)

  new_potion.color  =  [127, 159, 127]
  new_potion.volume =  19
------------------------------------------------------------------------------------------------------ */

type PotionType = {
  color: number[];
  volume: number;
};

class Potion {
  color: number[];
  volume: number;
  constructor(props: PotionType) {
    this.color = props.color;
    this.volume = props.volume;
  }
  mix(potion: PotionType): PotionType {
    const newColor = this.color.map((colorComponent, i) => {
      return Math.floor(
        (colorComponent * this.volume + potion.color[i] * potion.volume) /
          (this.volume + potion.volume)
      );
    });
    const newVolume = this.volume + potion.volume;
    return new Potion({ color: newColor, volume: newVolume });
  }
}

const felix_felicis = new Potion({ color: [255, 255, 255], volume: 7 });
const polyJuice = new Potion({ color: [51, 102, 51], volume: 12 });

const newPotion = felix_felicis.mix(polyJuice);

console.log(
  `New Potion Color: [${newPotion.color.join(", ")}], Volume: ${
    newPotion.volume
  }`
);
