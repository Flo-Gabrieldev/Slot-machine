// if not in fruits, is a bomb!
let fruits = ["lemon", "apple", "pineapple", "watermelon", "pear", "mango", "dragonfruit","golden apple"];


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
    let fruit1 = numToFruit(num1);
    let fruit2 = numToFruit(num2);
    let fruit3 = numToFruit(num3);
    return { fruit1, fruit2, fruit3 };
};

const checkJackpot = (fruit1, fruit2, fruit3) => {
    if (fruit1 === fruit2 && fruit1 === fruit3) {
        return true;
    } else {
        return false;
    };
};

const run = function() {
    let { num1, num2, num3 } = randomNum();
    let { fruit1, fruit2, fruit3 } = fruitValues(num1, num2, num3);

    console.log(fruit1);
    console.log(fruit2);
    console.log(fruit3);
};

run();
