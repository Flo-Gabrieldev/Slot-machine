// if not in fruits, is a dud!
fruits = ["lemon", "apple", "pineapple", "watermelon", "pear", "mango", "dragonfruit","golden apple"];
let num1 = 0;
let num2 = 0;
let num3 = 0;
const randomNum = function() {
    num1 = Math.floor(Math.random() * 9);
    num2 = Math.floor(Math.random() * 9);
    num3 = Math.floor(Math.random() * 9);
};

const numToFruit = num => {
    return fruits[num];
};
