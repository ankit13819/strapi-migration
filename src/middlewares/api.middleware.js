/**
 * @copyright (2023-Present) ArtistFirst Technology India Pvt Ltd
 * @author Vinay Singh {vinay.singh@fantiger.com}
 * @version 1.0
 */

const httpStatus = require("http-status");
const jwt = require("jsonwebtoken");
const ApiError = require("../utils/ApiError");
const config = require("../config/config");
const { userService } = require("../services");
const rTracer = require("cls-rtracer");

const VerifyUser = async (req, res, next) => {
	const bearerHeader = req.header("Authorization");
	res.set("x-bh-id", bearerHeader);
	if (!bearerHeader) return next(new ApiError(httpStatus.BAD_REQUEST, "Authorization token is missing"));

	const bearerToken = bearerHeader.split(" ")[1];
	if (!bearerToken) return next(new ApiError(httpStatus.BAD_REQUEST, "Authorization token is missing"));

	try {
		const bearerTokenDoc = jwt.verify(bearerToken, config.jwt.secret);
		if (!bearerTokenDoc || !bearerTokenDoc.sub) {
			return next(new ApiError(httpStatus.FORBIDDEN, "Invalid authentication token"));
		}
		const user = await userService.getUserById(bearerTokenDoc.sub);
		if(!user)
			return next(new ApiError(httpStatus.FORBIDDEN, "Invalid authentication token"));

		/** Check if user is blocked */
		if(user.isBlocked) throw new ApiError(httpStatus.UNAUTHORIZED, user.blockReason);

		/** Add auth Id and trace Id in response header */
		res.set("x-ft-id", bearerTokenDoc.sub);
		res.set("x-trace-id", rTracer.id());

		req.user = bearerTokenDoc.sub;
		req.roles = [...user.roles, user.role];
		req.userInfo = user;
	} catch (error) {
		return next(new ApiError(httpStatus.UNAUTHORIZED, error));
	}
	return next();
};

const VerifyRole = (roles) => async (req, res, next) => {
	try {
		var RoleSet = new Set(req.roles);
		var hasRoles = roles.some((role)=>RoleSet.has(role));
		if(!hasRoles ) {
			return next(new ApiError(httpStatus.UNAUTHORIZED, "Not having suffient roles of access"));
		}
	} catch (error) {
		return next(new ApiError(httpStatus.UNAUTHORIZED, error));
	}
	return next();
};

const OptionalUser = async (req, res, next) => {
	const bearerHeader = req.header('Authorization');
	if(bearerHeader) {
	  try {
		  const bearerToken = bearerHeader.split(' ')[1];
		  if (!bearerToken) return next(new ApiError(httpStatus.BAD_REQUEST, 'Authorization token is missing'));
		  
		  const bearerTokenDoc = jwt.verify(bearerToken, config.jwt.secret);
		  if (!bearerTokenDoc || !bearerTokenDoc.sub) {
			return next(new ApiError(httpStatus.FORBIDDEN, 'Invalid authentication token'));
		  }
	  
		  const user = await userService.getUserById(bearerTokenDoc.sub);
		  if(!user)
			return next(new ApiError(httpStatus.FORBIDDEN, 'Invalid authentication token'));
			
		  req.user = bearerTokenDoc.sub;
		  req.roles = [...user.roles, user.role];
		  req.userInfo = user;
		} catch (error) {
		  return next(new ApiError(httpStatus.UNAUTHORIZED, error));
		}
	}
	return next();
};
module.exports = {
	VerifyUser,
	VerifyRole,
	OptionalUser
};
