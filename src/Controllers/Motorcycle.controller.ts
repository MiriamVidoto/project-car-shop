import { RequestHandler } from 'express';
import MotorcycleService from '../Services/Motorcycle.service';

export default class MotorcycleController {
  constructor(private _motorcycleService = new MotorcycleService()) { }

  createMotorcycle: RequestHandler = async (req, res) => {
    const motorcycle = req.body;
    const result = await this._motorcycleService.create(motorcycle);
    return res.status(result.status).json(result.message);
  };

  findAllMotorcycles: RequestHandler = async (req, res) => {
    const result = await this._motorcycleService.findAll();
    return res.status(result.status).json(result.message);
  };

  findMotorcycleById: RequestHandler = async (req, res) => {
    const { id } = req.params;
    const result = await this._motorcycleService.findById(id);
    return res.status(result.status).json(result.message);
  };

  updateMotorcycle: RequestHandler = async (req, res) => {
    const { id } = req.params;
    const motorcycleData = req.body;
    const result = await this._motorcycleService.update(id, motorcycleData);
    return res.status(result.status).json(result.message);
  };
}