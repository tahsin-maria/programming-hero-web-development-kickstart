//samne as c++ , no difference at all
if (4 > 5) {
  console.log("ok ok");
} else if (1 < 2) {
  console.log("choto");
} else if (1) {
  console.log("boo");
} else {
  console.log("no no");
}
//nested if else (same to same to c++)
// NaN -> Not a Number

//ternery operator , same as c++
const a = 23;
a === 21 ? console.log("yess") : console.log("no");

//ARRAY , index starts from 0
const arr = [1, 2, 3, 4];
const array = ["a", "b"];
const r = [true, false];

console.log(arr.length); //4
console.log(arr[0]); //1
console.log(arr[4]); //undefined
console.log(arr); //[1, 2, 3, 4]

//push(),pop() , pushing or popping from top

arr.push(5, 6);
console.log(arr); //[1, 2, 3, 4, 5, 6]

const popped = arr.pop();
console.log(popped);
console.log(arr); //[1, 2, 3, 4, 5]

//shift(),unshift() , pushing or popping from front

array.shift();
console.log(array); //['b']

array.unshift("xyz");
console.log(array); //['xyz' , 'b']

//includes(),indexOf() -> exists ? it's index?

console.log(arr.includes(6)); //false
console.log(arr.indexOf(2)); //1
console.log(arr.indexOf(999)); //-1 ->not in array



