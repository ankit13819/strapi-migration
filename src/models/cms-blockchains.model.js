const mongoose = require('mongoose');
const { paginate } = require('./plugins');


const blockChainsSchema = mongoose.Schema(
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

blockChainsSchema.plugin(paginate);

/**
 * @typedef blockChains
 */
const blockChains = mongoose.model('cms_blockchains', blockChainsSchema);

module.exports = blockChains;