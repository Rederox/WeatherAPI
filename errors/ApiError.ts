import { ERROR_CODES } from "../Constants/errorCodes";
import { CustomError } from "./CustomError";


export class ApiError extends CustomError {    
    constructor(message: string) {
        super(message, ERROR_CODES.API_ERROR_CODE);
        this.name = ERROR_CODES.API_ERROR_NAME;
    }
}  