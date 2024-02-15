import { ERROR_CODES } from "../Constants/errorCodes";

export class CustomError extends Error {    
    errorcode: number;
    constructor(message: string, errorcode: number) {
        super(message);
        this.name = ERROR_CODES.CUSTOM_ERROR_NAME;
        this.errorcode = ERROR_CODES.CUSTOM_ERROR_CODE;
    }
}  