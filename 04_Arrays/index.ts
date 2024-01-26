const arr1: number[] = [12,12,45,36];
const arr2:Array<string> = ['hello','world'];
const arr3: Array<string | number> = [10,"sad",'hello',494];

console.log("Number array is: ", arr1);
console.log("String array is: ", arr2);
console.log("Mixed array is: ", arr3);
  
// print 
arr2.forEach(item => {
    console.log(item);
});

// creating a tuple(which looks like array ) but has a fixed size.
const arr4: [number,number,number] = [10,20,40];
console.log("Tuple with type number is: ", arr4);
