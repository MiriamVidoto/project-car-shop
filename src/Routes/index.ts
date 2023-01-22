import { Router } from 'express';
import carRoute from './car.route';

const routes = Router();

routes.use('/car', carRoute);

export default routes;
