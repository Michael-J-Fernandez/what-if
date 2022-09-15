// THIS IS A WORK IN PROGRESS AND WILL BE FINISHED ON SATURDAY SEPT 17


const prompt = require('prompt-sync')({sigint: true});

let classSize = Number(prompt("Enter class size: "))
// console.log(classSize);


if (classSize % 3 === 0) {
    groupsOf3 = classSize / 3
}

if ()

console.log(`You can make ${groupsOf3} groups of three.`);
// console.log(`You can make ${groupsOf2} groups of two.`);

// let 
// let groupsOf2 = 0;

// if (classSize % 3 === 0) {
//     console.log(`You can make ${classSize / 3} groups of three.`);
// }