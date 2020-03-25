"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getResponse = function (data) {
    var response;
    try {
        if (data || typeof data === 'object') {
            response = {
                data: data,
                success: true
            };
        }
        else {
            throw new Error('cannot retrieve users');
        }
    }
    catch (error) {
        response = {
            data: data,
            success: false,
            error: error.message,
            errorCode: '404'
        };
    }
    return response;
};
