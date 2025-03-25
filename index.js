const userInput = prompt(
  "Enter a list of froyo flavors seperated by a , dear user"
);
const stringArray = userInput.split(",");
console.log(stringArray);

const vanillaFroYo = {
  name: "vanilla",
  color: "white",
  flavor: "good",
};
const strawberryFroYo = {
  name: "strawberry",
  color: "pink",
  flavor: "good",
};
const coffeeFroYo = {
  name: "coffee",
  color: "brown",
  flavor: "bad",
};

for (i = 0; i < stringArray.length; i++) {
  if (stringArray[i] === "vanilla") {
    console.log(vanillaFroYo);
  }
}
for (i = 0; i < stringArray.length; i++) {
  if (stringArray[i] === "strawberry") {
    console.log(strawberryFroYo);
  }
}

for (i = 0; i < stringArray.length; i++) {
  if (stringArray[i] === "coffee") {
    console.log(coffeeFroYo);
  }
}
console.log(stringArray);
