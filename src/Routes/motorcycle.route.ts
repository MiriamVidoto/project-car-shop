import { Router } from 'express';
import MotorcycleController from '../Controllers/Motorcycle.controller';

const motorcycleRoute = Router();
const motorcycleController = new MotorcycleController();

motorcycleRoute.post('/', motorcycleController.createMotorcycle);
motorcycleRoute.get('/', motorcycleController.findAllMotorcycles);
motorcycleRoute.get('/:id', motorcycleController.findMotorcycleById);
motorcycleRoute.put('/:id', motorcycleController.updateMotorcycle);

export default motorcycleRoute;