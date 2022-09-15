const prompt = require('prompt-sync')({sigint: true});

let dayNumber = Number(prompt("Enter a number for the day of the week: "))

if (dayNumber === 1) {
    console.log("Today is Monday!");
} else if (dayNumber === 2) {
    console.log("Today is Tuesday!");
} else if (dayNumber === 3) {
    console.log("Today is Wednesday!");
} else if (dayNumber === 4) {
    console.log("Today is Thursday!");
} else if (dayNumber === 5) {
    console.log("Today is Friday!");
} else if (dayNumber === 6) {
    console.log("Today is Saturday!");
} else if (dayNumber === 7) {
    console.log("Today is Sunday!");
} else {
    console.log("Error")
}