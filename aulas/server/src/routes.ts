import express from 'express';

import PointsControler from './controlers/PointsControler';
import ItensControler from './controlers/ItensControler';

// index, show, create, update, delete

const routes = express.Router();
const pointsControler = new PointsControler();
const itensControler = new ItensControler();

routes.get('/itens', itensControler.index);

routes.post('/points', pointsControler.create);
routes.get('/points', pointsControler.index);
routes.get('/points/:id', pointsControler.show);


export default routes;
