import { Request, Response } from 'express';
import { developerService } from './developer.service';

const index = async (req: Request, res: Response) => {
  const developers = await developerService.getAll();
  return res.json(developers);
};

const store = async (req: Request, res: Response) => {
  const developer = await developerService.create(req.body);
  return res.json(developer);
};

export const developerController = {
  index,
  store,
};
