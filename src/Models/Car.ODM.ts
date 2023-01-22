import { Schema, Model, model } from 'mongoose';
import { ICar } from '../Interfaces/ICar';

class CarODM {
  private CarSchema: Schema;
  private CarModel: Model<ICar>;

  constructor() {
    this.CarSchema = new Schema<ICar>({
      model: { type: String, required: true },
      year: { type: Number, required: true },
      color: { type: String, required: true },
      status: { type: Boolean, required: false },
      buyValue: { type: Number, required: true },
      doorsQty: { type: Number, required: true },
      seatsQty: { type: Number, required: true },
    });

    this.CarModel = model<ICar>('Car', this.CarSchema);
  }

  public async create(car: ICar): Promise<ICar> {
    return this.CarModel.create({ ...car });
  }
}

export default CarODM;
