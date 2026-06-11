console.log(document);
console.log(document.body);
console.log(document.body.children);
console.log(document.body.children[0]);
console.log(document.body.children[0].textContent);

const title = document.getElementById("title");
console.log(title);
title.innerText='Changed by JS';

const title2 = document.querySelector("#title");
console.log(title2.innerText);
title2.innerText = "changed by js";
title2.textContent='helllo';//both same

const para = document.querySelectorAll(".para"); //selects all //can run forEach loop on this
console.log(para);

para.forEach(p => {
  console.log(p.innerText);
});

const para2 = document.getElementsByClassName("para"); //gets all classes //can't run forEach loop
console.log(para2);

// for get single element use -> getElementById,querySelector()

//for multiple elements use -> getElementsByClassName , querySelectorAll()

let text = document.getElementById("item2");
text.innerText = "hello";
console.log(text);

let contentDiv = document.getElementById('content');
contentDiv.innerHTML='<button>Click</button>'
contentDiv.innerHTML='<b><p>HELLO</p></b>'
//js overpowers html tag !!!



const box = document.getElementById("box");
box.style.color = "yellow";
box.style.padding = "24px";
box.style.border = "2px solid red";
box.style.margin = "60px";

function changeStyle() {
  box.classList.add("highlight");
}

function removeStyle() {
  box.classList.remove("highlight");
}

function toggleStyle()
{
    box.classList.add('hidden');
}