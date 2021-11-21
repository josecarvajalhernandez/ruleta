import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

import config from './config';

import jugadorRoutes from './routes/jugadores.routes'

const app = express();

app.set('port', config.PORT);

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(jugadorRoutes);

export default app;