// Rest operator is used when we don't know the number of parameters we are going to receive so, despite this, we receive all the values as an array.

const returnSum = (...m:number[]) : number => {
    let sum:number = 0;
    
    m.forEach((item) => {
        sum += item;
    });

    return sum;
}

console.log(returnSum(10,20,30,40,50,60,70,80,90,100));
