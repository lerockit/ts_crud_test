import { Request, Response } from 'express';
import { developerService } from './developer.service';
import { IDeveloper } from '../../interfaces/developer.interface';

const index = async (req: Request, res: Response) => {
  const developers = await developerService.index();
  return res.json(developers);
};

const store = async (req: Request, res: Response) => {
  const developerToStore: IDeveloper = req.body;
  const developer = await developerService.store(developerToStore);
  return res.json(developer);
};

const update = async (req: Request, res: Response) => {
  const developerId: string = req.params.id;
  const developerData: IDeveloper = req.body;
  const developer = await developerService.update(developerId, developerData);
  return res.json(developer);
};

const show = async (req: Request, res: Response) => {
  const developerId = req.params.id;
  const developer = await developerService.show(developerId);
  return res.json(developer);
};

const remove = async (req: Request, res: Response) => {
  const developerId = req.params.id;
  await developerService.remove(developerId);
  return res.send().status(200);
};

export const developerController = {
  index,
  store,
  update,
  show,
  remove,
};
