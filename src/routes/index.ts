import { Application } from 'express';
import { required } from '../middlewares';
import { sessionController } from '../controllers';

const registRoutes = (app: Application) => {
  app.post('/auth', sessionController.createSession);
  app.get('/auth', required, sessionController.getSession);
  app.delete('/auth', required, sessionController.deleteSessioin);
};

export default registRoutes;
