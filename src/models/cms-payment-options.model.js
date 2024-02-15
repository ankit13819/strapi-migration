const mongoose = require('mongoose');
const { paginate } = require('./plugins');


const paymentOptionsSchema = mongoose.Schema(
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

paymentOptionsSchema.plugin(paginate);

/**
 * @typedef paymentOptions
 */
const paymentOptions = mongoose.model('cms_payment_options', paymentOptionsSchema);

module.exports = paymentOptions;