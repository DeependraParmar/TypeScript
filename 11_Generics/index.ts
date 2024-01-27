// Generics is used to define a template which is compatible with all the types of data you can send to a function or even something else. 

// For eg: creating a function which can take parameter of any type and can return value of any type as well.
// Generic automatically determines the type of the value received as parameter and the value being returned as well..

type Person = {
    name: string,
    email: string,
    age: number,
}

const func = <T>(n:T): T => {    
    return n;
}

const person1:Person = {
    name: "Deependra Parmar",
    email: "me@gmail.com",
    age: 22
}

const ans = func<Person>(person1);
