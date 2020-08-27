import express from 'express';
import cors from 'cors';
import { defineRouter } from '../api/routes';

const app = express();

app.use(cors());
app.use(express.json());
defineRouter(app);

export default app;
