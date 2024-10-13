// if not in fruits, is a dud!
let fruits = ["lemon", "apple", "pineapple", "watermelon", "pear", "mango", "dragonfruit","golden apple"];
let num1;
let num2;
let num3;

const numToFruit = num => {
    if (num > 7) {
        return "bomb";
    } else {
    return fruits[num];
    }
};

const randomNum = function() {
    
    num1 = Math.floor(Math.random() * 9);
    num2 = Math.floor(Math.random() * 9);
    num3 = Math.floor(Math.random() * 9);
    
};

const fruitValues = (num1, num2, num3) => {
    let fruit1 = numToFruit(num1);
    let fruit2 = numToFruit(num2);
    let fruit3 = numToFruit(num3);
    return { fruit1, fruit2, fruit3 };
};

const run = function() {
    randomNum()
    let { fruit1, fruit2, fruit3 } = fruitValues(num1, num2, num3);
    console.log(fruit1);
    console.log(fruit2);
    console.log(fruit3);
};

run();
