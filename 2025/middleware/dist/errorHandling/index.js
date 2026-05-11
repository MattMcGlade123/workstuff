"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandling = void 0;
const errorHandling = (errorType, errorMessage) => {
    switch (errorType) {
        case 404:
            return {
                code: 404,
                success: false,
                message: errorMessage || "Resource not found",
            };
        case 401:
            return {
                code: 401,
                success: false,
                message: errorMessage || "Unauthorized access",
            };
        case 403:
            return {
                code: 403,
                success: false,
                message: errorMessage || "Access forbidden",
            };
        case 400:
            return {
                code: 400,
                success: false,
                message: errorMessage || "Bad request",
            };
        case 500:
            return {
                code: 500,
                success: false,
                message: errorMessage || "Internal server error",
            };
        default:
            return {
                code: 500,
                success: false,
                message: "An unexpected error occurred",
            };
    }
};
exports.errorHandling = errorHandling;
//# sourceMappingURL=index.js.map