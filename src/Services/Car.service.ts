import Car from '../Domains/Car';
import CarODM from '../Models/Car.ODM';
import ICar from '../Interfaces/ICar';

export default class CarService {
  carODM = new CarODM();

  validateId = (id: string) => {
    const regex = /^[a-zA-Z0-9]{24}$/;
    return regex.test(id);
  };

  create = async (car: ICar) => {
    const response = await this.carODM.create(car);
    const result = new Car(response);
    return { status: 201, message: result };
  };

  findAll = async () => {
    const cars = await this.carODM.findAll();
    const result = cars.map((car) => new Car(car));
    return { status: 200, message: result };
  };

  findById = async (id: string) => {
    if (!this.validateId(id)) {
      return { status: 422, message: 'Invalid mongo id' };
    }
    const car = await this.carODM.findById(id);
    if (car != null) {
      const result = new Car(car);
      return { status: 200, message: result };
    }
    return { status: 404, message: 'Car not found' };
  };

  update = async (id: string, carData: ICar) => {
    if (!this.validateId(id)) {
      return { status: 422, message: 'Invalid mongo id' };
    }
    const carChanged = await this.carODM.update(id, carData);
    if (carChanged != null) {
      const result = new Car(carChanged);
      return { status: 200, message: result };
    }
    return { status: 404, message: { message: 'Car not found' } };
  };
}
