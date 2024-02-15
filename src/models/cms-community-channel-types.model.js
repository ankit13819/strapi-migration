const mongoose = require('mongoose');
const { paginate } = require('./plugins');


const communityChannelTypeSchema = mongoose.Schema(
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

communityChannelTypeSchema.plugin(paginate);

/**
 * @typedef communityChannelType
 */
const communityChannelType = mongoose.model('cms_community_channel_types', communityChannelTypeSchema);

module.exports = communityChannelType;