const mongoose = require('mongoose');
const { paginate } = require('./plugins');


const assetAttributesSchema = mongoose.Schema(
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

assetAttributesSchema.plugin(paginate);

/**
 * @typedef assetAttributes
 */
const assetAttributes = mongoose.model('cms_asset_attributes', assetAttributesSchema);

module.exports = assetAttributes;