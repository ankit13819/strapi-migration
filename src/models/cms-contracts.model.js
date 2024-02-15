const mongoose = require('mongoose');
const { paginate } = require('./plugins');


const contractsSchema = mongoose.Schema(
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

contractsSchema.plugin(paginate);

/**
 * @typedef contracts
 */
const contracts = mongoose.model('cms_contracts', contractsSchema);

module.exports = contracts;