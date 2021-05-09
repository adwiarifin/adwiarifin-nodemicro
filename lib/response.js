"use strict";

module.exports = {
    BAD_REQUEST: {
        status: 400,
        type: 'BAD_REQUEST',
        message: 'Invalid reqeuest'
    },
    UNAUTHORIZED: {
		status: 401,
		type: 'UNAUTHORIZED',
		message: 'Unauthorized. Please login first!'
	},
    NOT_FOUND: {
		status: 404,
		type: 'NOT_FOUND',
		message: 'Not found!'
	},
    SERVER_ERROR: {
		status: 500,
		type: 'SERVER_ERROR',
		message: 'Server error'
	},

    json(data, err, errMessage) {
        let response = {};

        if (err) {
            response.status = err.status || 500;
            response.error = err;
            if (errMessage) {
                response.error.message = errMessage.message || errMessage;
            }
            response.data = data;

            return response;
        }

        response.status = 200;
        response.data = data;

        return response;
    }
}