// Warm up

let apples = 14
console.log(apples);

console.log(`I have ${apples} apples.`);

console.log("----------");

let materials = ['wood', 'metal', 'stone']

const words = {
  elephant: "The world's largest land mammal.",
  school: 'A place of learning.',
  iceCream: 'A delicious milk-based dessert.'
};

console.log(materials);
console.log(words);

console.log("----------");

let num = 16

if (num > 10) {
  console.log(`num is greater than 10.`);
} else if (num === 10 ) {
  console.log(`num is exactly 10.`);
} else {
  console.log(`num must be less than 10.`);
}

console.log(num);

console.log("----------");

  //  Don't fully understand
  let i = 1
  let text = "Doing the same thing over and over.";
  while(i <= 10) {
      console.log(text);
    i++;
  }

console.log("----------");

const base = 5;
let num = 0;
while(num < 21) {
    console.log(num + base);
  num++;
}

console.log("----------");

let total = 0;
let num = 0;
while (num < 101) {
  total += num;
  num++;
}
console.log(total);

console.log("----------");

let height = 3
while (height <= 15)
{ if (height < 9) {
    console.log("You are too short to ride this rollercoaster.");
  } else {
    console.log("You can get on the rollercoaster!");
  }
  height ++;
}

console.log("----------");

const containers = ['purse', 'wallet', 'backpack']

for (let i = 0; i < 3; i++) {
  console.log(`- ${containers[i]}`);
}

console.log("----------");

function helloWorld() {
  console.log("Hello world!");
}

// calling a fucntion w no paramaters
helloWorld()

console.log("----------");

function add(firstNum, secondNum) {
  return firstNum + secondNum;
}
const result = add(5, 7);
console.log(result);

console.log("----------");
