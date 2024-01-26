type FuncType = (a: number, b: number, c?: number) => number;

const func: FuncType = (n,m,l=1) => {
    if(typeof l === "undefined")
        return n*m;

    return n*m*l;
}

console.log(func(10,20));
console.log(func(10,20,30));