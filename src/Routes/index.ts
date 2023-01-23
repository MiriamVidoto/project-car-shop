import { Router } from 'express';
import carRoute from './car.route';
import motorcycleRoute from './motorcycle.route';

const routes = Router();

routes.use('/cars', carRoute);
routes.use('/motorcycles', motorcycleRoute);

export default routes;
