"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Vehicle {
    constructor(params) {
        this.id = params.id;
        this.model = params.model;
        this.year = params.year;
        this.color = params.color;
        this.status = params.status || false;
        this.buyValue = params.buyValue;
    }
}
exports.default = Vehicle;
