class Account{
  constructor(username){
    this.username = username;
    this.transactions = [];
  }
  get balance(){
    let balance = 0;
    balance = this.transactions.reduce((a,b)=>
      a+b,0 )
    return balance;
  }
  addTransaction(transaction){
    this.transactions.push(transaction);
  }
}

class Transaction{
  constructor(amount,account){
    this.amount = amount;
    this.account = account;
  }
  commit(){
    this.time = new Date();
    this.account.addTransaction(this);
  }
}

class Withdrawal extends Transaction {
  // commit() {
  //   this.account.balance -= this.amount;
  // }
  get value(){
    return  -this.amount;
  }

}

class Deposit extends Transaction {
  // commit(){
  //   this.account.balance += this.amount;
  // }
  get value(){
    return  this.amount;
  }
}

const myAccount = new Account("snow-patrol")
t1 = new Withdrawal(50.25,myAccount);
t1.commit();//commit the change
console.log("starting balance", t1.balance)

t2 = new Deposit(1000, myAccount);
t2.commit();
console.log(t2.balance)
// t1 = new Withdrawal(50.25,myAccount);
// t1.commit();
// console.log('Transaction 1: ', t1)

// t2 = new Withdrawal(9.99,myAccount);
// t2.commit();
// console.log('Transaction 2: ', t2);
// console.log('balance' ,balance);

// t3 = new Deposit(1000,myAccount);
// t3.commit();
// console.log('Transaction 3: ', t3);
// console.log('balance', balance)
