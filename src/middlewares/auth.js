/**
 * @copyright (2023-Present) ArtistFirst Technology India Pvt Ltd
 * @author Vinay Singh {vinay.singh@fantiger.com}
 * @version 1.0
 */

const passport = require("passport");
const httpStatus = require("http-status");
const ApiError = require("../utils/ApiError");
const { roleRights } = require("../config/roles");

const verifyCallback = (req, resolve, reject, requiredRights) => async (err, user, info) => {
	if (err || info || !user) {
		return reject(new ApiError(httpStatus.UNAUTHORIZED, "Please authenticate"));
	}
	req.user = user;

	if (requiredRights.length) {
		let hasRequiredRights = false;
		for (const role of user.roles) {
			const userRights = roleRights.get(role) || roleRights.get(user.role);
			if(hasRequiredRights) break;
			hasRequiredRights = requiredRights.every((requiredRight) => userRights.includes(requiredRight));
		}
		if (!hasRequiredRights && req.params.userId !== user.id) {
			return reject(new ApiError(httpStatus.FORBIDDEN, "Forbidden"));
		}
	}

	resolve();
};

const auth =
  (...requiredRights) => async (req, res, next) => {return new Promise((resolve, reject) => {passport.authenticate("jwt", { session: false }, verifyCallback(req, resolve, reject, requiredRights))(req, res, next);}).then(() => next()).catch((err) => next(err));
  };

module.exports = auth;
