import axios, { AxiosResponse } from 'axios';
import { NextFunction, Request, Response } from 'express';
import { ApiError } from '../Errors/ApiError';
import { CurrentWeatherUrl } from '../Constants/apiWeather';

export class WeatherController {

    private API_KEY: string;

    constructor(apiKey:string)
    {
        this.API_KEY = apiKey
    }

    public async getWeatherByCity(req: Request, res: Response, next: NextFunction):Promise<void> {
        const city: string = req.params.city;
        const params = `&q=${city}&lang=fr`;
        try {
            const response : AxiosResponse = await axios.get(
                CurrentWeatherUrl + params
            );
            const data = response.data;
            res.json(data);
        } catch (error) {
            next(new ApiError("Erreur lors de la récupération de la météo"));
        }

    }

}