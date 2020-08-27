import { developerRepository } from './developer.repository';
import { IDeveloper } from '../../interfaces/developer.interface';

const getAll = () => {
  return developerRepository.getAll();
};

const create = (developer: IDeveloper) => {
  return developerRepository.create(developer);
};

export const developerService = {
  getAll,
  create,
};
