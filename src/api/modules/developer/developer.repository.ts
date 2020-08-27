import { developerModel } from './models/developer.schema';
import { IDeveloper } from '../../interfaces/developer.interface';

const getAll = () => {
  return developerModel.find();
};

const create = (developer: IDeveloper) => {
  return developerModel.create(developer);
};

export const developerRepository = {
  getAll,
  create,
};
