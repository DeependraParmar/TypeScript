interface Obj {
  firstName: string,
  lastName: string,
  age: number,
  gender? : string, // making the gender optional with the question mark
};

type FuncType = (n: number, m: number) => void;

interface NewObj extends Obj{
  isEducated?: boolean, // also making the isEducated filed optional with ?
  func: FuncType,
}

const obj1: Obj = {
  firstName: "Deependra",
  lastName: "Parmar",
  age: 20,
  gender: "male"
};

const obj2: NewObj = {
  firstName: "Ragini",
  lastName: "Singh",
  age: 18,
  func: (n,m) => {
    console.log(n*m);
  }
}

console.log("Obj1 says: ", obj1);
console.log("Obj2 says: ", obj2);

obj2.func(10,20);