// if not in fruits, is a bomb!
let fruits = ["lemon", "apple", "pineapple", "watermelon", "pear", "mango", "dragonfruit","golden apple"];
let fruit1;
let fruit2;
let fruit3;

const numToFruit = num => {
    if (num > 7) {
        return "bomb";
    } else {
    return fruits[num];
    }
};

const randomNum = function() {
    
    let num1 = Math.floor(Math.random() * 9);
    let num2 = Math.floor(Math.random() * 9);
    let num3 = Math.floor(Math.random() * 9);
    return { num1, num2, num3 };
};

const fruitValues = (num1, num2, num3) => {
    fruit1 = numToFruit(num1);
    fruit2 = numToFruit(num2);
    fruit3 = numToFruit(num3);
};

const checkJackpot = function() {
    if (fruit1 === fruit2 && fruit1 === fruit3) {
        return true;
    } else {
        return false;
    };
};
const checkSecondPrize = function() {
    if (fruit1 === fruit2 || fruit1 === fruit3) {
        return true;
    } else {
        return false;
    };
};

const printFruit = function() {
    console.log(fruit1);
    console.log(fruit2);
    console.log(fruit3);
}

const validate = function() {
    let jackpot = checkJackpot();
    let secondPrize = checkSecondPrize();
    if (jackpot) {
        console.log("Winner!");
    } else if (secondPrize) {
        console.log("You won a ok prize :(");
    } else {
        console.log("Try again...");
    };
    
}

const run = function() {
    let { num1, num2, num3 } = randomNum();
    fruitValues(num1, num2, num3);
    validate();
    printFruit();
    
};

run();
