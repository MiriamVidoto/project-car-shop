import Vehicle from './Vehicle';
import { ICar } from '../Interfaces/ICar';

export default class Car extends Vehicle {
  private doorsQty: number;
  private seatsQty: number;

  constructor(params: ICar) {
    super({ id: params.id,
      model: params.model,
      year: params.year,
      color: params.color,
      status: params.status,
      buyValue: params.buyValue });
    this.doorsQty = params.doorsQty;
    this.seatsQty = params.seatsQty;
  }
}