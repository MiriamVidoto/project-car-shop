"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Vehicle_1 = require("./Vehicle");
class Motorcycle extends Vehicle_1.default {
    constructor(params) {
        super({
            id: params.id,
            model: params.model,
            year: params.year,
            color: params.color,
            status: params.status,
            buyValue: params.buyValue,
        });
        this.category = params.category;
        this.engineCapacity = params.engineCapacity;
    }
}
exports.default = Motorcycle;
