import express, { Response, Request, NextFunction } from 'express';
import axios from 'axios';
import { WeatherController } from './Controllers/weatherController'
import process from 'process';
import { errorHandler } from './Middlewares/errorHandlers';
import { API_KEY, PORT } from './Constants/config';
import logger from './Logger/logger';
import { logRequest, logResponse } from './Middlewares/logHandlers';

const app = express();


const weatherController = new WeatherController(API_KEY);

// Middlewares De logs Entrants et Sortants
app.use(logRequest);
app.use(logResponse);

// Les routes
app.get('/weather/:city', async (req: Request, res: Response, next: NextFunction) => {
    await weatherController.getWeatherByCity(req, res, next);
})

// Middlewares d'erreur
app.use(errorHandler);


app.listen(PORT, () => {
    console.log(`Le serveur est en route sur le port : ${PORT}`);
});