const mongoose = require('mongoose');
const { paginate } = require('./plugins');


const referralCodesSchema = mongoose.Schema(
    {
        attributes: {
            type: Object,
            required: true
        },
        Title: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true,
    }
);

referralCodesSchema.plugin(paginate);

/**
 * @typedef referralcodes 
 */
const referralcodes = mongoose.model('cms_referral_codes', referralCodesSchema);

module.exports = referralcodes;