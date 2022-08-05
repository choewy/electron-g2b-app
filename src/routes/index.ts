import { Application } from 'express';
import { sessionController } from '../controllers';

const registRoutes = (app: Application) => {
  app.get('/auth', sessionController.getSession);
  app.post('/auth', sessionController.createSession);
  app.delete('/auth', sessionController.deleteSessioin);
};

export default registRoutes;
