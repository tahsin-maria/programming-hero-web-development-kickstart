const Student = {
  name: "TAHSIN MARIA",
  age: 100,

  courses: ["analog", "dt", "math"],

  "fav courses": ["DSA", "Discrete Math"],

  cgpa: 3.97,

  meritPositions: {
    firstSemester: "3rd",
    secondSemester: "2nd",
  },
};

const x = Object.keys(Student);
console.log(x); //[ 'name', 'age', 'courses', 'fav courses', 'cgpa', 'meritPositions' ]

const y = Object.values(Student);
console.log(y); //shows all values

//check if a property exists or not

if ("cgpa" in Student) {
  console.log("exists");
}

//is it's own property ? or by inheritance?
if (Student.hasOwnProperty("cgpa")) {
  //true
  console.log("Own");
} else {
  console.log("Nope");
}

if (Student.hasOwnProperty("firstSemester")) {
  //false
  console.log("Own");
} else {
  console.log("Nope");
}

//see all properties as pairs -> 2D arrays

const arr = Object.entries(Student);
console.log(arr);

// for ... of -> arrays only
// for ... in -> objects

for (const keys in Student) {
  console.log(keys, Student[keys]);
}

Student.neww = "hello"; //adding a totally new property

//delete a property
delete Student.cgpa;

//freeze an object -> no modifications can be made then

Object.freeze(Student);

//try to modify but no change
delete Student.name;
console.log(Student.name);

//seal an object -> can only modify existing properties (no add or delete)

const User = {
  email: "qjijwgygdyv@gmail.com",
  password: "1237t8t[,",
};

Object.seal(User);

User.password = "123";
console.log(User.password);


// seal vs freeze 
// seal allows modification (except adding or deleting a property)
// freeze forbids all kinds of modification


//ES6 -> ECMAScript 6 (official name of javascript)
