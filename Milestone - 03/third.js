//loops (same as c++)

let x = 0;

while (x < 6) {
  console.log("value of x: ", x);
  x++;
}

for (let i = 0; i < 5; i++) {
  if (i == 1) {
    continue;
  }
  console.log(i);
  if (i == 3) {
    break;
  }
}

//function

//function name(){}
function sum(a, b) {
  console.log(a + b);
}
sum(3, 4);

//modern js syntax
const sub = (a, b) => {
  // function sub(a,b){}
  return a - b;
};
//shorter form : const sub =(a,b) => a-b;
let result = sub(10, 5);
console.log(result);

function fun(a, b, c, d) {
  for (const x of arguments) {
    console.log(x); // 1 2 3 4
  }
}
fun(1, 2, 3, 4);

const arr = [999, 99, 9];

const func = (numArr) => {
  console.log(numArr); //[999 , 99, 9]
};
func(arr);

// difference between "function" and "const"
// "function" declared function can be called before function , the other one can't be called like that

cc();
function cc() {}


const summation = (numArr) => {
  for (const x of numArr) {
    console.log(x);
  }
  console.log(numArr); //[999 , 99, 9]
};
summation(arr);
