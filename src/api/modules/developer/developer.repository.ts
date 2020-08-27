import { developerModel } from './models/developer.schema';
import { IDeveloper } from '../../interfaces/developer.interface';

const index = () => {
  return developerModel.find();
};

const store = (developer: IDeveloper) => {
  return developerModel.create(developer);
};

const update = (developerId: string, developerData: IDeveloper) => {
  return developerModel.findOneAndUpdate({ _id: developerId }, developerData, {
    new: true,
  });
};

const show = (developerId: string) => {
  return developerModel.findById(developerId);
};

const remove = (developerId: string) => {
  return developerModel.findByIdAndDelete(developerId);
};

export const developerRepository = {
  index,
  store,
  update,
  show,
  remove,
};
