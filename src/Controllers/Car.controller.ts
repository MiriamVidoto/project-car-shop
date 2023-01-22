import { RequestHandler } from 'express';
import CarService from '../Services/Car.service';

export default class CarController {
  constructor(private _carService = new CarService()) { }

  createCar: RequestHandler = async (req, res) => {
    const car = req.body;
    const result = await this._carService.create(car);
    return res.status(result.status).json(result.message);
  };
}
