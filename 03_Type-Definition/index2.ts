// You can also define the blueprint of the function with type keyword in order to save the bulky syntax for function definition here

type funcBlueprint = (firstName: string, lastName: string) => void;


const function1:funcBlueprint = (firstName,lastName) => {
    console.log("My name is: ", firstName, lastName);
    return;
}

function1("Deependra", "Parmar");