const froyo = {
  vanilla: "3",
  strawberry: "1",
  coffee: "2",
};

console.log(froyo.vanilla);
console.log(froyo.strawberry);
console.log(froyo.strawberry);

// console.log(froyo)
// console.log(froyo["type"])

const userInputString = prompt(
  "Please enter your order in this format: ex. vanilla:2,coffee:1"
);

const stringArray = userInputString.split(",");

const count = {};
for (const element of stringArray) {
  if (count[element]) {
    count[element] += 1;
  } else {
    count[element] = 1;
  }
}

console.log(count);
// console.log();
// console.log()
