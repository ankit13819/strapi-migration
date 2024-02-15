const mongoose = require('mongoose');
const { paginate } = require('./plugins');


const communityChannelSchema = mongoose.Schema(
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

communityChannelSchema.plugin(paginate);

/**
 * @typedef communityChannel
 */
const communityChannel = mongoose.model('cms_community_channel', communityChannelSchema);

module.exports = communityChannel;