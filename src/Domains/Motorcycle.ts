import Vehicle from './Vehicle';
import IMotorcycle from '../Interfaces/IMotorcycle';

export default class Motorcycle extends Vehicle {
  private category: string; 
  private engineCapacity: number;

  constructor(params: IMotorcycle) {
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