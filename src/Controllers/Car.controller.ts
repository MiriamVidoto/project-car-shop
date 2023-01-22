import { RequestHandler } from 'express';
import CarService from '../Services/Car.service';

export default class CarController {
  constructor(private _carService = new CarService()) { }

  createCar: RequestHandler = async (req, res) => {
    const car = req.body;
    const result = await this._carService.create(car);
    return res.status(result.status).json(result.message);
  };

  findAllCars: RequestHandler = async (req, res) => {
    const result = await this._carService.findAll();
    return res.status(result.status).json(result.message);
  };

  findCarById: RequestHandler = async (req, res) => {
    const { id } = req.params;
    const result = await this._carService.findById(id);
    return res.status(result.status).json(result.message);
  };

  updateCar: RequestHandler = async (req, res) => {
    const { id } = req.params;
    const carData = req.body;
    const result = await this._carService.update(id, carData);
    return res.status(result.status).json(result.message);
  };
}
