const mongoose = require('mongoose');
const { paginate } = require('./plugins');


const mintingOutPutsSchema = mongoose.Schema(
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

mintingOutPutsSchema.plugin(paginate);

/**
 * @typedef mintingOutputs
 */
const mintingOutputs = mongoose.model('cms_minting_outputs', mintingOutPutsSchema);

module.exports = mintingOutputs;