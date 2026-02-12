//// getters and setters

class chaseBankAccount {
  #balance; //private field
  constructor(owner, balance) {
    this.owner = owner;
    this.#balance = balance;
  }

  get balance() {
    return this.#balance;
  }
  set balance(amount) {
    if (amount >= 0) {
      this.#balance = amount;
    } else {
      console.error("balance cannot be negative!");
    }
  }
}

const account = new chaseBankAccount("alice", 500);

console.log(account.balance);

account.balance = 1000;

console.log(account.balance);
///////////////////////////////////////////

class capitalBankAccount {
  #balance; //private field
  constructor(owner, balance) {
    this.owner = owner;
    this.#balance = balance;
  }

  getBalance() {
    return this.#balance;
  }
  setBalance(amount) {
    if (amount >= 0) {
      this.#balance = amount;
    } else {
      console.error("balance cannot be negative!");
    }
  }
}

const account1 = new capitalBankAccount("alice", 500);

console.log(account1.getBalance());

account.setBalance(1000);

console.log(account1.getBalance());
