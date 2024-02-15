import express, {Response, Request, NextFunction} from 'express';
import axios from 'axios';
import { WeatherController } from './Controllers/weatherController'
import process from 'process';
import { errorHandler } from './Middlewares/errorHandlers';
import { API_KEY, PORT } from './Constantes/config';

const app = express();


const weatherController = new WeatherController(API_KEY);


app.get('/weather/:city', async (req: Request, res: Response, next: NextFunction) =>{
    await weatherController.getWeatherByCity(req,res,next);
})

app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});