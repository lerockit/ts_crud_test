import { Express } from 'express';
import developerRouter from './modules/developer/developer.module';

export const defineRouter = (app: Express) => {
  app.use('/developer', developerRouter);
};
