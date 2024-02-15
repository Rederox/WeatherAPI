import { ERROR_CODES } from "../Constants/errorCodes";
import { CustomError } from "./CustomError";


export class DatabaseError extends CustomError {    
    constructor(message: string) {
        super(message, ERROR_CODES.DATABASE_ERROR_CODE);
        this.name = ERROR_CODES.DATABASE_ERROR_NAME;
    }
}  