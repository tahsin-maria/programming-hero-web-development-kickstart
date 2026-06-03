//parentheses don't matter '' or " "

console.log("JS connected")
console.log(document.title)

document.getElementById("h1-Tag").innerText="Got changed by Javascript";

console.log(document.getElementsByClassName("para"));//html collection

document.getElementsByClassName("para")[1].innerText = "This is written using JS";

//tag selector
const x = document.querySelector('h1');
console.log(x);

//id selector
const y = document.querySelector('#para-id');
console.log(y);

//class selector
const z = document.querySelector('.para');
console.log(z); //only gets the first class

// all class selector
const m = document.querySelectorAll('.para');
console.log(m);

//alert("Hello it's just an alert");
//prompt("are u a female?");


const buttn = document.getElementById("btn");
buttn.addEventListener('click',()=>{
   // alert("hello it shows when u click");
   let c = prompt("are u a female?");
   alert(c); //shows my entered ans as alert
})


const changebackgrndcol=()=>{
document.body.style.backgroundColor = "pink";
alert("background color changed to pink");
}

