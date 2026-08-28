//q1
type Book ={
id : number
title : string
author : string
price : number
isAvaliable : boolean
};
let Aml:Book={
id : 1,
title : "Atomic Habits ",
author : " James Clear",
price : 300,
isAvaliable : true
}
let Aya:Book={
id : 2,
title : "Rich Dad Poor Dad ",
author : "Robert Kiyosaki ",
price : 500,
isAvaliable : false
}
function displayBook (book:Book):void
{
    console.log(`ID: ${book.id}`);
    console.log(`Title: ${book.title}`);
    console.log(`Author: ${book.author}`);
    console.log(`Price: ${book.price}`);
    console.log(`Available: ${book.isAvaliable}`);
}
function isBookAvailable (book:Book):boolean{
    return book.isAvaliable;
}


//q2
let User: { name: string; age: number; email:string ; isAdmin:boolean } = {
  name: "Aya",
  email: "ayaabdelhamid@gmail.com",
  isAdmin:true,
  age: 20,
};
function print (User: { name: string; age: number; email: string; isAdmin: boolean }): void {
  if (User.isAdmin) {
    console.log(` ${User.name}, you are an Admin`);
  } else {
    console.log(` ${User.name}, you are not admin`);
  }
}

class BankAccount {
  owner: string;
  balance: number;
  constructor(owner: string, balance: number) {
    this.owner = owner;
    this.balance = balance;
  }
  deposit(amount: number) {
    this.balance += amount;
  }
  withdraw(amount: number) {
    if (amount > this.balance) {
      console.log("Error");
    } else {
      this.balance -= amount;
    }
  }
  getBalance(): number {
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
async function process(): Promise<void> {
  const result = await getData();
  console.log(result);
}

//q5
function check(num: number, callback: (result: string) => void): void {
  const result = num % 2 === 0 ? "Even" : "Odd";
  callback(result);
}


