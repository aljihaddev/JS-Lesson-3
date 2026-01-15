// For Loop Start
console.log("For Loop");

for(let i = 1; i < 101;  i++){
    console.log(i);
}

// For Loop End

// ==================================================
console.log(" ");
// ==================================================

// Namta using for loop Start
console.log("Namta");

let namta = 923.923

for(let i = 1; i < 11;  i++){
    console.log(namta + " " + "X" + " " + i + " " + "=" + " " + namta*i);
}

// Namta using for loop End

// ==================================================
console.log(" ");
// ==================================================

// Back Tik Start
console.log("Back Tik");

let bd = ("9 October, 2003 Thursday.")
console.log(`My Birth Date is ${bd}`);

// Back Tik End

// ==================================================
console.log(" ");
// ==================================================

// Object Start
console.log("Object");

let teamOne = {
    name: "Al Jihad",
    age: 22,
    area: "Sukrabad",
}
console.log(teamOne);
console.log(teamOne.name);
console.log(teamOne.age);
console.log(teamOne.area);

// =========================
console.log(" ");
// =========================

let {name, age, area} = {
    name: "Al Jihad",
    age: 22,
    area: "Sukrabad",
}
console.log(name);
console.log(age);
console.log(area);
console.log(`My name's ${name}. I'm ${age} years old. I live in ${area}.`);

// Object End

// ==================================================
console.log(" ");
// ==================================================

// Array Start
console.log("Array");

let teamTwo = ["Sam Bro the Next Kenneth Flex Wheeler", "Jabbar Vai Front-End Web Developer", "Pial Vai the Ultimate Gamer", "Rony Vai Chill Mode ON", "Istiak Vai the Married Men"];
console.log(teamTwo);
console.log(teamTwo[0]);
console.log(teamTwo[2]);

// Array End

// ==================================================
console.log(" ");
// ==================================================

// Array with Object Start
console.log("Array with Object");
let team = [
    {name:"Al Jihad", age: "22", area: "Sukrabad"},
    {name:"Samir", age: "21", area: "New Elephant Road"},
    {name:"Abdur Jabbar", age: "Jani Na", area: "BDR Gate-1"},
]

console.log(team);
console.log(team[1]);

// Array with Object End

// ==================================================
console.log(" ");
// ==================================================

// Object with Object Start
console.log("Object with Object");

let teams = {
    myTeamOne: {name:"Al Jihad", age: "22", area: "Sukrabad"},
    myTeamTwo: {name:"Samir", age: "21", area: "New Elephant Road"},
    myTeamThree: {name:"Abdur Jabbar", age: "Jani Na", area: "BDR Gate-1"},
}

console.log(teams);
console.log(teams.myTeamTwo);
console.log(teams.myTeamTwo.name);

// Object with Object End

// ==================================================
console.log(" ");
// ==================================================

// Function Start
console.log("Function");

function one(){
    let a = 9;
    let b = 23;
    let c = a + b;
    console.log(c);
}

one()
one()
one()

// Arrow Function
console.log(" ");
console.log("Arrow Function");

let d = () => {
    let e = 10;
    console.log(e);
}

d();

// Function End

// ==================================================
console.log(" ");
// ==================================================

// if, else Shortcut Start
console.log("if, else Shortcut");


let p = 9;

p == 9 ? console.log("Contition True") : console.log("Condition False");

p == 8 ? console.log("Contition True") : console.log("Condition False");

// if, else Shortcut End

// ==================================================

// ==================================================
// AOS JS Code Start
AOS.init();
// AOS JS Code End
// ==================================================