interface Human{
    name: string,
    email: string,
}

const deependra: Human = {
    name: "Deependra Parmar",
    email: "me@gmail.com",
}

const getData = (key: keyof Human): void => {
    console.log(deependra[key]);
}

console.log(getData("name"));
