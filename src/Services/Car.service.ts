import Car from '../Domains/Car';
import CarODM from '../Models/Car.ODM';
import { ICar } from '../Interfaces/ICar';

export default class CarService {
  carODM = new CarODM();

  create = async (car: ICar) => {
    const response = await this.carODM.create(car);
    const result = new Car(response);
    return { status: 201, message: result };
  };
}
