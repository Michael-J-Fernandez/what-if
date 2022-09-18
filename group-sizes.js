const prompt = require('prompt-sync')({sigint: true});

let classSize = Number(prompt("Enter class size: "))

groupsOf2 = 0
groupsOf3 = 0

if (classSize < 2) {
    console.log("You don't have enough students for groups!");
} else if (classSize % 3 === 0) {
    groupsOf2 = 0
    groupsOf3 = classSize / 3
} else if (classSize % 3 === 2) {
    groupsOf2 = 1
    groupsOf3 = (classSize - 2) / 3
} else if (classSize % 3 < 2) {
    groupsOf2 = 2
    groupsOf3 = (classSize - 4) / 3
}

console.log(`You can make ${groupsOf3} groups of three and ${groupsOf2} groups of two.`);