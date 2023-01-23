import { Router } from 'express';
import carRoute from './car.route';
import motorcycleRoute from './motorcycle.route';

const routes = Router();

routes.use('/car', carRoute);
routes.use('/motorcycle', motorcycleRoute);

export default routes;
