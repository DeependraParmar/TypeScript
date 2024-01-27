type Person1 = {
    name: string,
    age: number,
}
type Person2 = {
    name: string,
    email: string,
    age: number,
}

const user1: Person1 = {
    name: "deependra",
    age: 21,
}
const user2: Person2 = {
    name: "deependra parmar",
    age: 9394,
    email: "myself@gmail.com",
}

const func = <T,U extends T>(n: T, m: U): {n: T, m: U} => {
    return {n,m};
}

const ans = func<Person1, Person2>(user1,user2);