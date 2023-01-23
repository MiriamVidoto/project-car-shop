import Motorcycle from '../Domains/Motorcycle';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleODM from '../Models/Motorcycle.ODM';

export default class MotorcycleService {
  motorcycleODM = new MotorcycleODM();

  validateId = (id: string) => {
    const regex = /^[a-zA-Z0-9]{24}$/;
    return regex.test(id);
  };

  create = async (motorcycle: IMotorcycle) => {
    const response = await this.motorcycleODM.create(motorcycle);
    const result = new Motorcycle(response);
    return { status: 201, message: result };
  };

  findAll = async () => {
    const motorcycles = await this.motorcycleODM.findAll();
    const result = motorcycles.map((motorcycle) => new Motorcycle(motorcycle));
    return { status: 200, message: result };
  };

  findById = async (id: string) => {
    if (!this.validateId(id)) {
      return { status: 422, message: 'Invalid mongo id' };
    }
    const motorcycle = await this.motorcycleODM.findById(id);
    if (motorcycle != null) {
      const result = new Motorcycle(motorcycle);
      return { status: 200, message: result };
    }
    return { status: 404, message: 'Motorcycle not found' };
  };

  update = async (id: string, motorcycleData: IMotorcycle) => {
    if (!this.validateId(id)) {
      return { status: 422, message: 'Invalid mongo id' };
    }
    const motorcycleChanged = await this.motorcycleODM.update(id, motorcycleData);
    if (motorcycleChanged != null) {
      const result = new Motorcycle(motorcycleChanged);
      return { status: 200, message: result };
    }
    return { status: 404, message: { message: 'Car not found' } };
  };
}