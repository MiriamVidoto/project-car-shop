import { Router } from 'express';
import CarController from '../Controllers/Car.controller';

const carRoute = Router();
const carController = new CarController();

carRoute.post('/', carController.createCar);

export default carRoute;