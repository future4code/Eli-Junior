// Exercício 1

// a) O construtor serve para fazer a tipagem dos itens, já que as tipagens da
// classe estão privadas.

// b)

// type Transaction = {
//     description: string,
//     value: number,
//     date: string
// }

// class UserAccount {
//     private cpf: string;
//     private name: string;
//     private age: number;
//     private balance: number = 0;
//     private transactions: Transaction[] = [];

//     constructor(
//         cpf: string,
//         name: string,
//         age: number,
//     ) {
//         console.log("Chamando o construtor da classe UserAccount")
//         this.cpf = cpf;
//         this.name = name;
//         this.age = age;
//     }

//     public getName(): string {
//         return this.name;
//     }

//     public getCpf(): string {
//         return this.cpf;
//     }

//     public getAge(): number {
//         return this.age;
//     }

//     public getBalance(): number {
//         return this.balance;
//     }

//     public getTransactions(): Transaction[] {
//         return this.transactions;
//     }
// }

// const firstUser: UserAccount = new UserAccount("222.333.444-55", "Jonathan", 27);

// console.log(firstUser)

// A mensagem "Chamando o construtor da classe UserAccount" só apareceu uma vez.

// c) As variáveis privadas só podem ser acessadas de dentro da própria classe
// (usando a keyword 'this').

// Exercício 2

class Transaction {
    private description: string;
    private value: number;
    private date: string;

    constructor(description: string, value: number, date: string) {
        this.description = description;
        this.value = value;
        this.date = date;
    }

    public getDescription(): string {
        return this.description;
    }

    public getValue(): number {
        return this.value;
    }

    public getDate(): string {
        return this.date;
    }
}

class UserAccount {
    private cpf: string;
    private name: string;
    private age: number;
    private balance: number = 0;
    private transactions: Transaction[] = [];

    constructor(
        cpf: string,
        name: string,
        age: number
    ) {
        this.cpf = cpf;
        this.name = name;
        this.age = age;
    }

    public getCpf(): string {
        return this.cpf;
    }

    public getName(): string {
        return this.name;
    }

    public getAge(): number {
        return this.age;
    }

    public getBalance(): number {
        return this.balance;
    }

    public getTransactions(): Transaction[] {
        return this.transactions;
    }

    public setBalance(newValue: number): void {
        this.balance += newValue;
    }

    public setTransactions(newTransaction: Transaction): void {
        this.transactions = [...this.transactions, newTransaction]

        this.balance -= newTransaction.getValue()
    }
}

const myAccount = new UserAccount("222.333.444-55", "Jonathan", 27)
const firstTransaction = new Transaction("Pagamento conta luz", 620, "03/05/2022")
const secondTransaction = new Transaction("Pagamento conta de água", 275, "16/05/2022")
const thirdTransaction = new Transaction("Pagamento da internet", 110, "20/05/2022")

myAccount.setTransactions(firstTransaction)
myAccount.setTransactions(secondTransaction)
myAccount.setTransactions(thirdTransaction)
console.log(myAccount)

// Exercício 3

class Bank {
    private accounts: UserAccount[];

    constructor(accounts: UserAccount[]) {
        this.accounts = accounts;
    }

    public getAccounts(): UserAccount[] {
        return this.accounts;
    }

    public setAccounts(newAccount: UserAccount): void {
        this.accounts.push(newAccount);
    }
}