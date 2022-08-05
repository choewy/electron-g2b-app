import './@interfaces';

import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import registRoutes from './routes';
import { deserialize } from './middlewares';

const app = express();

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true,
  }),
);

app.use(deserialize);

registRoutes(app);

export default app;
