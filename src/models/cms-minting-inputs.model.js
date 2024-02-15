const mongoose = require('mongoose');
const { paginate } = require('./plugins');


const mintingInputsSchema = mongoose.Schema(
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

mintingInputsSchema.plugin(paginate);

/**
 * @typedef mintingInputs
 */
const mintingInputs = mongoose.model('cms_minting_inputs', mintingInputsSchema);

module.exports = mintingInputs;