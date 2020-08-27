import { developerRepository } from './developer.repository';
import { IDeveloper } from '../../interfaces/developer.interface';

const index = () => {
  return developerRepository.index();
};

const store = (developer: IDeveloper) => {
  return developerRepository.store(developer);
};

const update = (developerId: string, developerData: IDeveloper) => {
  return developerRepository.update(developerId, developerData);
};

const show = (developerId: string) => {
  return developerRepository.show(developerId);
};

const remove = (developerId: string) => {
  return developerRepository.remove(developerId);
};

export const developerService = {
  index,
  store,
  update,
  show,
  remove,
};
