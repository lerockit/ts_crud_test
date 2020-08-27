import { Document } from 'mongoose';

export interface IDeveloper {
  name: string;
  user: string;
  bio?: string;
}

export interface IDeveloperDocument extends Document, IDeveloper {}
