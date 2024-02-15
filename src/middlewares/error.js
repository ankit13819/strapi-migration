/**
 * @copyright (2023-Present) ArtistFirst Technology India Pvt Ltd
 * @author Vinay Singh {vinay.singh@fantiger.com}
 * @version 1.0
 */

const mongoose = require("mongoose");
const httpStatus = require("http-status");
const config = require("../config/config");
const logger = require("../config/logger");
const ApiError = require("../utils/ApiError");

const errorConverter = (err, req, res, next) => {
	let error = err;
	if (!(error instanceof ApiError)) {
		const statusCode =
      		error.statusCode || error instanceof mongoose.Error ? httpStatus.BAD_REQUEST : httpStatus.INTERNAL_SERVER_ERROR;
	  	const errorCode = err.errorCode || statusCode;
		const message = error.message || httpStatus[statusCode];
		error = new ApiError(statusCode, message, errorCode, false, err.stack);
	}
	next(error);
};

// eslint-disable-next-line no-unused-vars
const errorHandler = (err, req, res, next) => {
	let { statusCode, message, errorCode } = err;
	if (config.env === "production" && !err.isOperational) {
		statusCode = httpStatus.INTERNAL_SERVER_ERROR;
		message = httpStatus[httpStatus.INTERNAL_SERVER_ERROR];
	}

	res.locals.errorMessage = err.message;

	const response = {
		code: statusCode,
		error: errorCode,
		message,
		...(config.env === "development" && { stack: err.stack }),
	};

	if (config.env === "development") {
		logger.error(err);
	}

	res.status(statusCode).send(response);
};

module.exports = {
	errorConverter,
	errorHandler,
};
