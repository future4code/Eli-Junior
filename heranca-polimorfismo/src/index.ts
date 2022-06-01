// HERANÇA
// Exercício 1

// class User {
//     private id: string;
//     private email: string;
//     private name: string;
//     private password: string;

//     constructor(
//         id: string,
//         email: string,
//         name: string,
//         password: string
//     ){
//         console.log("Chamando o construtor da classe User")
//         this.id = id
//         this.email = email
//         this.name = name
//         this.password = password
//     }

//     public getId(): string {
//         return this.id
//     }

//     public getEmail(): string {
//         return this.email
//     }

//     public getName(): string {
//         return this.name
//     }
// }

// const myUser = new User("1", "bananinha@labenu.com.br", "Bananinha", "abcdefg")
// console.log(myUser)

// a) Embora não tenha feito o "GetPassword" dentro da classe "User", o password apareceu no console.
// b) A mensagem só apareceu uma vez.

// Exercício 2

// class Customer 
// // extends User
//     {
//     public purchaseTotal: number = 0;
//     private creditCard: string;
  
//     constructor(
//     //   id: string,
//     //   email: string,
//     //   name: string,
//     //   password: string,
//       creditCard: string
//     ) {
//     //   super(id, email, name, password);
//       console.log("Chamando o construtor da classe Customer");
//       this.creditCard = creditCard;
//     }
  
//     public getCreditCard(): string {
//       return this.creditCard;
//     }
// }

// const myCustomer = new Customer("2", "laranjinha@labenu.com.br", "Laranjinha", "gjksghjs", "548525141")
// console.log(myCustomer)

// a) Uma vez.
// b) Uma vez.

// Exercício 3
// a) A senha foi impressa no console. Como ela apareceu no "constructor" e no "super", os dados passam a ser públicos.

// class User extends Customer {
//     private id: string;
//     private email: string;
//     private name: string;
//     private password: string

//     constructor(
//         id: string,
//         email: string,
//         name: string,
//         password: string,
//         creditCard: string
//     ) {
//         super(creditCard)
//         console.log("Chamando o construtor da classe User")
//         this.id = id,
//         this.email = email,
//         this.name = name,
//         this.password = password
//     }

//     public getId(): string {
//         return this.id
//     }

//     public getEmail(): string {
//         return this.email
//     }

//     public getName(): string {
//         return this.name
//     }

//     public getPassword(): string {
//         return this.password
//     }

//     public introduceYourself(): string {
//         return "Olá, bom dia!"
//      }
// }

// const customer = new Customer("8954164")
// customer.introduceYourself()

// POLIMORFISMO

export interface Client {
    name: string;
    // Refere-se ao nome do cliente
  
    registrationNumber: number;
    // Refere-se ao número de cadastro do cliente na concessionária
    // como se fosse um id
  
    consumedEnergy: number;
    // Refere-se à energia consumida pelo cliente no mês
  
    calculateBill(): number;
    // Retorna o valor da conta em reais
}

// Exercício 1

// const myClient: Client = {
//     name: "Mariana",
//     registrationNumber: 84,
//     consumedEnergy: 86,

//     calculateBill: () => {
//         return 2;
//     }
// }

// console.log(myClient)

// a) Foi impresso o "name", "registrationNumber" e o "consumedEnergy", mas não foi impresso o "calculateBill".
// O console somente imprimiu: "calculateBill: [Function: calculateBill]".

// Exercício 2

export class Place {
    constructor(protected cep: string) {}

    public getCep(): string {
        return this.cep;
    }
}

// a) A mensagem diz que não é possível criar uma instância de uma classe abstrata.

// const myPlace = new Place("77600000")
// console.log(myPlace)

// b) Quando tira o "abstract" do código, ela dá a opção de inserir o CEP, e é impresso no console.

// Exercício 3

export class Residence extends Place {
    constructor(
        private dwellersQuantity: number,

        cep: string
    ) {
        super(cep)
    }

    public getDwellersQuantity(): number {
        return this.dwellersQuantity
    }
}

export class Commerce extends Place {
    constructor(
        private floorsQuantity: number,

        cep: string
    ) {
        super(cep)
    }

    public getFloorsQuantity(): number {
        return this.floorsQuantity
    }
}

export class Industry extends Place {
    constructor(
        private machinesQuatity: number,

        cep: string
    ) {
        super(cep)
    }

    public getMachinesQuantity(): number {
        return this.machinesQuatity
    }
}

// Exercício 4

class ResidencialClient extends Residence implements Client {
    constructor(
        private cpf: string,
        public name: string,
        public registrationNumber: number,
        public consumedEnergy: number,
        residentsQuantity: number,
        cep: string
    ) {
        super(residentsQuantity, cep)
    }

    public getCpf(): string {
        return this.cpf
    }

    public calculateBill(): number {
        return this.consumedEnergy * 0.75
    }
}

// Exercício 5

class CommercialClient extends Commerce implements Client {
    constructor(
        public name: string,
        public registrationNumber: number,
        public consumedEnergy: number,
        private cnpj: string,
        floorsQuantity: number,
        cep: string
    ) {
        super(floorsQuantity, cep)
    }

    public calculateBill(): number {
        return this.consumedEnergy * 0.53
    }

    public getCnpj(): string {
        return this.cnpj
    }
}

// a) As semelhanças são que ambas tem os itens nome, número de registro, energia consumida,
// quantidade de pisos.
// b) A diferença é que o Residential Client é para pessoa física (CPF) e o Commercial Client
// é para pessoa jurídica (CNPJ).

// Exercício 6

class IndustrialClient extends Industry implements Client {
    constructor(
        public name: string,
        public registrationNumber: number,
        public consumedEnergy: number,
        private industryNumber: string,
        machinesQuantity: number,
        cep: string
    ) {
        super(machinesQuantity, cep)
    }

    public getIndustryNumber(): string {
        return this.industryNumber
    }

    public calculateBill(): number {
        return this.consumedEnergy * 0.45 + this.machinesQuantity * 100
    }
}