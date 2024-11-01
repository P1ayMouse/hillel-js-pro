class BankAccount {
    constructor(balance) {
        this.balance = balance;
    }

    deposit(depositNumber) {
        if (this.balance + depositNumber >= 10000) {
            console.log("Щось у тебе забагато грошей. Не хочеш навідатись до податкової?")
        }
        else {
            this.balance += depositNumber;
        }
    }

    getBalance() {
        return this.balance;
    }

    withdraw(withdrawNumber) {
        if (this.balance - withdrawNumber < 0) {
            console.log("Багато хочеш. В тебе всього: " + this.balance);
        }
        else {
            this.balance -= withdrawNumber;
        }
    }
}

const account1 = new BankAccount(1000);

console.log(account1.getBalance()); // 1000

account1.deposit(500);

console.log(account1.getBalance()); // 1500

account1.withdraw(200);

console.log(account1.getBalance()); // 1300

account1.deposit(10500);

account1.withdraw(10500);
