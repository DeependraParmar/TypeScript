let a = 933;
// a = "Hello"; // gives error as you cannot assign a data with different type in typescript as the name itself says "TYPESCRIPT"

let firstName = "Deependra";
console.log("Ok, my name is: ", firstName);

// explicit type definition in typescript
// there also exists a type "ANY" where you can give it any value.

let lastName: string = "Parmar";
let isWorking: boolean = true;
let num: number = 103943;
let decimal: number = 9343.23403;

// other way of explicit declaration
let lastName2 = <string>"Parmar";
let isWorking2 = <boolean>true;
let num2 = <number>203438;
let decimal2 = <number>20348.28034;

// declaring a variable which can either take string or number
let surname: string | number;
