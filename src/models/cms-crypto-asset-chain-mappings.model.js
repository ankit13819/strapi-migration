const mongoose = require('mongoose');
const { paginate } = require('./plugins');


const cryptoAssetChainMappingsSchema = mongoose.Schema(
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

cryptoAssetChainMappingsSchema.plugin(paginate);

/**
 * @typedef cryptoAssetChainMappings
 */
const cryptoAssetChainMappings = mongoose.model('cms_crypto_asset_chain_mappings', cryptoAssetChainMappingsSchema);

module.exports = cryptoAssetChainMappings;