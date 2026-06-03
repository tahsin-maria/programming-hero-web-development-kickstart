//objects -> {key : values} <- properties

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

//accessing properties -> 1) Dot Notation , 2) Bracket Notation

//dot notation
console.log(Student.courses);
console.log(Student.meritPositions);

//bracket notation
console.log(Student["name"]);
console.log(Student["fav courses"]);

const x = "age"; //key name in a variable
console.log(Student[x]); //22

//dot notation better , use bracket notation when key name contains space

//modifying objects

Student.name = "Mehrin Maisha";
console.log(Student.name); //Mehrin Maisha

//nested object

const DSA = {
  linear: {
    queue: {
      special: "circular",
    },
  },
  nonLinear: {
    trees: {
      special: "B-trees",
      others: ["BST", "Fenwick tree"],
    },
  },
};

console.log(DSA.linear.queue.special);
console.log(DSA.nonLinear.trees.others[1]);
