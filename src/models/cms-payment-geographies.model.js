const mongoose = require('mongoose');
const { paginate } = require('./plugins');


const paymentgeographiesSchema = mongoose.Schema(
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

paymentgeographiesSchema.plugin(paginate);

/**
 * @typedef paymentgeographies
 */
const paymentgeographies = mongoose.model('cms_payment_geographies', paymentgeographiesSchema);

module.exports = paymentgeographies;