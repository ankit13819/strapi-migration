/**
 * @copyright (2023-Present) ArtistFirst Technology India Pvt Ltd
 * @author Vinay Singh {vinay.singh@fantiger.com}
 * @version 1.0
 */

 class ApiError extends Error {
  constructor(statusCode, message, errorCode = '', isOperational = true, stack = '') {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = isOperational;
    this.errorCode = (errorCode == '') ? statusCode : errorCode;
    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

module.exports = ApiError;
