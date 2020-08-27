import { Router } from 'express';
import { developerController } from './developer.controller';

const developerRouter: Router = Router();

developerRouter.get('/', developerController.index);
developerRouter.post('/', developerController.store);
developerRouter.put('/:id', developerController.update);
developerRouter.get('/:id', developerController.show);
developerRouter.delete('/:id', developerController.remove);

export default developerRouter;
