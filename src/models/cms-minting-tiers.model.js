const mongoose = require('mongoose');
const { paginate } = require('./plugins');


const mintingTiersSchema = mongoose.Schema(
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

mintingTiersSchema.plugin(paginate);

/**
 * @typedef mintingTiers
 */
const mintingTiers = mongoose.model('cms_minting_tiers', mintingTiersSchema);

module.exports = mintingTiers;