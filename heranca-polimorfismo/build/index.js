"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Place = void 0;
const myClient = {
    name: "Mariana",
    registrationNumber: 84,
    consumedEnergy: 86,
    calculateBill: () => {
        return 2;
    }
};
console.log(myClient);
class Place {
    constructor(cep) {
        this.cep = cep;
    }
    getCep() {
        return this.cep;
    }
}
exports.Place = Place;
const myPlace = new Place("77600000");
console.log(myPlace);
//# sourceMappingURL=index.js.map