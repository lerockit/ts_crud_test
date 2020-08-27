import { Router } from 'express';
import { developerController } from './developer.controller';

const developerRouter: Router = Router();

developerRouter.get('/', developerController.index);
developerRouter.post('/', developerController.store);

export default developerRouter;
