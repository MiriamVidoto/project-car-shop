import { Router } from 'express';
import CarController from '../Controllers/Car.controller';

const carRoute = Router();
const carController = new CarController();

carRoute.post('/', carController.createCar);
carRoute.get('/', carController.findAllCars);
carRoute.get('/:id', carController.findCarById);
carRoute.post('/:id', carController.updateCar);

export default carRoute;