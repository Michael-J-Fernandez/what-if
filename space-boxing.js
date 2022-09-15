const prompt = require('prompt-sync')({sigint: true});

let weight = Number(prompt("Enter your current weight on Earth: "));

console.log("Enter the number for the planet you want to fight on: ");

let planet = Number(prompt("1-Venus, 2-Mars, 3-Jupiter, 4-Saturn, 5-Uranus, 6-Neptune: >"));

if (planet === 1) {
    console.log(`Your weight in Venus is ${weight*0.78}Lbs!`);
} else if (planet === 2) {
    console.log(`Your weight in Mars is ${weight*0.39}Lbs!`);
} else if (planet === 3) {
    console.log(`Your weight in Jupiter is ${weight*2.65}Lbs!`);
} else if (planet === 4) {
    console.log(`Your weight in Saturn is ${weight*1.17}Lbs!`);
} else if (planet === 5) {
    console.log(`Your weight in Uranus is ${weight*1.05}Lbs!`);
} else if (planet === 6) {
    console.log(`Your weight in Neptune is ${weight*1.23}Lbs!`);
} else {
    console.log("That is not a planet within the Interstellar Boxing Federation!");
}