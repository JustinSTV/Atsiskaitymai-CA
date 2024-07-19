"use strict";
class Potion {
    constructor(props) {
        this.color = props.color;
        this.volume = props.volume;
    }
    mix(potion) {
        const newColor = this.color.map((colorComponent, i) => {
            return Math.floor((colorComponent * this.volume + potion.color[i] * potion.volume) /
                (this.volume + potion.volume));
        });
        const newVolume = this.volume + potion.volume;
        return new Potion({ color: newColor, volume: newVolume });
    }
}
const felix_felicis = new Potion({ color: [255, 255, 255], volume: 7 });
const polyJuice = new Potion({ color: [51, 102, 51], volume: 12 });
const newPotion = felix_felicis.mix(polyJuice);
console.log(`New Potion Color: [${newPotion.color.join(", ")}], Volume: ${newPotion.volume}`);
