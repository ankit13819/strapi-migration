/**
 * @copyright (2023-Present) ArtistFirst Technology India Pvt Ltd
 * @author Vinay Singh {vinay.singh@fantiger.com}
 * @version 1.0
 */

const rateLimit = require("express-rate-limit");
const config = require("../config/config");

const authLimiter = rateLimit({
	windowMs: 1 * 60 * 1000,
	max: config.requestsPerMinute,
	message: {
		status: false,
		message: "Too many requests coming from this IP, please try again after some time",
	},
	standardHeaders: true,
	legacyHeaders: false,
});

module.exports = {
	authLimiter,
};
