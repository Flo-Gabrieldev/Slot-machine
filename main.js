// if not in fruits, is a bomb!
let fruits = ["lemon", "apple", "pineapple", "watermelon", "pear", "mango", "dragonfruit","golden apple"];
let fruit1;
let fruit2;
let fruit3;
//variables hold the cash prize(note secondCashPrize always stays the same, while jackpot Prize rises over time)
let jackpotCashPrize = 1000;
let secondCashPrize = 100;
const fee = 100;

class player {
    constructor(name, balance) {
        this._name = name;
        this._balance = balance;
        this._startingBalance = balance;
        this._losses = 0;
        this._profit = 0;
    }
    payFee() {
        this._balance -= fee;
    }
    
    updateProfit() {
        if(this._balance >= this._startingBalance) {
            this._profit = this._balance - this._startingBalance;
        } else {
            this._profit = "No profit";
        }
    }
    updateLosses() {
        if (this._balance <= this._startingBalance) {
            this._losses = this._balance - this._startingBalance;
        } else {
            this._losses = "No Losses";
        }
    }

    set updateBalance(val) {
        if (typeof val === "number") {
            this._balance += val;
            this.updateProfit();
            this.updateLosses();
        } else {
            console.log("error: balance will not update");
        }
    }

}
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
    const checkLst = [fruit1, fruit2, fruit3];
    let pointer = 0;
    let condition = false;
    while (pointer < checkLst.length) {
        for(let i = pointer + 1; i < checkLst.length; i++) {
            if (checkLst[pointer] == checkLst[i]){
                condition = true;
            }
        }
        pointer++;
    }
    return condition;
};
const printFruit = function() {
    console.log(fruit1);
    console.log(fruit2);
    console.log(fruit3);
};
const bombCheck = function() {
    const lst = [fruit1,fruit2,fruit3];
    const checkFor = "bomb";
    for (let i = 0; i < lst.length; i++) {
        if (lst[i] == checkFor) return true;
    } 
    return false;
};
const validate = function(player1) {
    if (bombCheck() === true) {
        console.log("You won nothing...BOOM!");
        printOutcome(player1, 0);
    } else {
        let jackpot = checkJackpot();
        let secondPrize = checkSecondPrize();
        if (jackpot) {
            player1.updateBalance = jackpotCashPrize;
            console.log("Winner!");
            printOutcome(player1, jackpotCashPrize);
        } else if (secondPrize) {
            player1.updateBalance = secondCashPrize
            console.log("You won a ok prize :(");
            printOutcome(player1, secondCashPrize);
        } else {
            console.log("Try again...");
            printOutcome(player1, 0);
        };
    };
    
};
const printOutcome = (player1, prizeMoney) => {
    console.log(`Fee: ${fee}`);
    console.log(`Payout: ${prizeMoney}`);
    console.log(`Remaining balance: ${player1._balance}`)
}




const user = new player("bot1", 1000);
const run = function(player1) {
    player1.payFee();
    let { num1, num2, num3 } = randomNum();
    fruitValues(num1, num2, num3);
    printFruit();
    validate(player1);
};
run(user);
