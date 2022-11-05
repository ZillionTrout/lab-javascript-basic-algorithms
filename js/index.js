// Iteration 1: Names and Input

console.log("I'm ready!");

let hacker1 = "Estefania";
console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Carlos";
console.log(`The navigator's name is ${hacker2}`);
//
// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log('The driver has the longest name, it has ${hacker1.lenght} characters');
}
else if (hacker1.length < hacker2.length) {
    console.log('It seems that the navigator has the longest name, it has ${hacker2.lenght} characters');
}
else {
    console.log('Wow, you both have equally long names, ${hacker1.lenght} characters')
}
// Iteration 3: Loops
//3.1

let driverName = "";
for(let i=0; i < hacker1.length; i++) {
    driverName += hacker1[i].toUpperCase() + " ";
}
console.log(driverName)

// 3.2

let navigatorName = "";
for(let i = hacker2.length - 1; i >= 0; i--) {
    navigatorName += hacker2[i];
}
console.log(navigatorName)

 //3.3 

if (hacker1.length > hacker2.length) {
    console.log("The driver's name goes first.");
} else if(hacker1.length < hacker2.length) {
    console.log("The navigator's name goes first definitely.");
} else  {
    console.log("What?! You both have the same name?");
}


