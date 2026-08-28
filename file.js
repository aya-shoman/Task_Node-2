"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let Aml = {
    id: 1,
    title: "Atomic Habits ",
    author: " James Clear",
    price: 300,
    isAvaliable: true
};
let Aya = {
    id: 2,
    title: "Rich Dad Poor Dad ",
    author: "Robert Kiyosaki ",
    price: 500,
    isAvaliable: false
};
function displayBook(book) {
    console.log(`ID: ${book.id}`);
    console.log(`Title: ${book.title}`);
    console.log(`Author: ${book.author}`);
    console.log(`Price: ${book.price}`);
    console.log(`Available: ${book.isAvaliable}`);
}
function isBookAvailable(book) {
    return book.isAvaliable;
}
//q2
let User = {
    name: "Aya",
    email: "ayaabdelhamid@gmail.com",
    isAdmin: true,
    age: 20,
};
function print(User) {
    if (User.isAdmin) {
        console.log(` ${User.name}, you are an Admin`);
    }
    else {
        console.log(` ${User.name}, you are not admin`);
    }
}
class BankAccount {
    owner;
    balance;
    constructor(owner, balance) {
        this.owner = owner;
        this.balance = balance;
    }
    deposit(amount) {
        this.balance += amount;
    }
    withdraw(amount) {
        if (amount > this.balance) {
            console.log("Error");
        }
        else {
            this.balance -= amount;
        }
    }
    getBalance() {
        return this.balance;
    }
}
//q3
console.log("A");
setTimeout(() => {
    console.log("B");
}, 0);
console.log("C");
//the output => A -> C -> B
//اول سطر هيتفذ طبيعي عادي بعدين هنروح علي الفانكشن حتي لو التايم بتاعها بصفر بس هي بتبعت ريكويست للمتصفح انه يحط الكود في طابور الانتظار وبعد صفر ثانيه نفذه فهيروح للي بعدها ينفذ ويرجعلها
console.log("Starting...");
console.log("Wait 2 seconds...");
setTimeout(() => {
    console.log("Done");
}, 2000);
//q4
function getData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data received");
        }, 2000);
    });
}
async function process() {
    const result = await getData();
    console.log(result);
}
//q5
function check(num, callback) {
    const result = num % 2 === 0 ? "Even" : "Odd";
    callback(result);
}
//# sourceMappingURL=file.js.map