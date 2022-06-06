class Transaction {
    constructor(description, value, date) {
        this.description = description;
        this.value = value;
        this.date = date;
    }
    getDescription() {
        return this.description;
    }
    getValue() {
        return this.value;
    }
    getDate() {
        return this.date;
    }
}
class UserAccount {
    constructor(cpf, name, age) {
        this.balance = 0;
        this.transactions = [];
        this.cpf = cpf;
        this.name = name;
        this.age = age;
    }
    getCpf() {
        return this.cpf;
    }
    getName() {
        return this.name;
    }
    getAge() {
        return this.age;
    }
    getBalance() {
        return this.balance;
    }
    getTransactions() {
        return this.transactions;
    }
    setBalance(newValue) {
        this.balance += newValue;
    }
    setTransactions(newTransaction) {
        this.transactions = [...this.transactions, newTransaction];
        this.balance -= newTransaction.getValue();
    }
}
const myAccount = new UserAccount("222.333.444-55", "Jonathan", 27);
const firstTransaction = new Transaction("Pagamento conta luz", 620, "03/05/2022");
const secondTransaction = new Transaction("Pagamento conta de água", 275, "16/05/2022");
const thirdTransaction = new Transaction("Pagamento da internet", 110, "20/05/2022");
myAccount.setTransactions(firstTransaction);
myAccount.setTransactions(secondTransaction);
myAccount.setTransactions(thirdTransaction);
console.log(myAccount);
class Bank {
    constructor(accounts) {
        this.accounts = accounts;
    }
    getAccounts() {
        return this.accounts;
    }
    setAccounts(newAccount) {
        this.accounts.push(newAccount);
    }
}
//# sourceMappingURL=index.js.map