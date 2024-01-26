// whenever we throw error, it return never and if we return, it behaves as normal function.
const throwError = () => {
    throw new Error();
}
const returnError = () => {
    return new Error();
}

throwError(); // throws an error 
returnError(); // gets executed successfully