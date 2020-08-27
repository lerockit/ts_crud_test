import { Schema, model } from 'mongoose';
import { IDeveloperDocument } from '../../../interfaces/developer.interface';

const schema = {
  name: {
    type: String,
    required: true,
  },
  user: {
    type: String,
    required: true,
  },
  bio: String,
};

const schemaConfigs = {
  timestamps: true,
};

const DeveloperSchema: Schema = new Schema(schema, schemaConfigs);

export const developerModel = model<IDeveloperDocument>(
  'Developer',
  DeveloperSchema
);
