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

  public async findAll(): Promise<ICar[]> {
    return this.CarModel.find();
  }

  public async findById(id: string): Promise<ICar | null> {
    return this.CarModel.findById(id);
  }

  public async update(id: string, carData: ICar): Promise<ICar | null> {
    return this.CarModel.findByIdAndUpdate(
      id,
      { ...carData },
      { new: true },
    );
  }
}

export default CarODM;
