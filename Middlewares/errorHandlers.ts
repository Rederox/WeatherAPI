import { Request, Response, NextFunction } from "express";
import { CustomError } from "../Errors/CustomError";
import logger from "../Logger/logger";

export function errorHandler(err: Error, req: Request, res: Response, next: NextFunction) {
    if(err instanceof CustomError) {
        logger.error(`
            From : ${req.ip},
            URL : ${req.url},
            Erreur ${err.errorcode} : ${err.message}
        `);
        res.status(500).json({
            error: err.message,
            errorCode: err.errorcode
        });
    } else {
        res.status(500).json({
            error: "Erreur Innatendue"
        });
    }
}