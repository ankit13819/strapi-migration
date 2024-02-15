const mongoose = require('mongoose');
const { paginate } = require('./plugins');


const communitySchema = mongoose.Schema(
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

communitySchema.plugin(paginate);

/**
 * @typedef community
 */
const community = mongoose.model('cms_community', communitySchema);

module.exports = community;