type Person = {
    name: string,
    age: number,
}

const users: Person[] = [
    {
        name: "user1",
        age: 20
    },
    {
        name: "user2",
        age: 20,
    },
    {
        name: "user3",
        age: 43,
    },
    {
        name: "user4",
        age: 49
    }
];


const filterByPeoples = <T,Key extends keyof T>(arr: T[], property: Key, value: T[Key]): T[] => {
    return arr.filter((item) => item[property] === value);
}

const filteredPeopleByName = filterByPeoples(users, "name",'user1');
const filteredPeopleByAge = filterByPeoples(users, "age", 20);
console.log(filteredPeopleByName);
console.log(filteredPeopleByAge);
