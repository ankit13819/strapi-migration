const mongoose = require('mongoose');
const { paginate } = require('./plugins');


const communityCategorySchema = mongoose.Schema(
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

communityCategorySchema.plugin(paginate);

/**
 * @typedef communityCategory
 */
const communityCategory = mongoose.model('cms_community_categories', communityCategorySchema);

module.exports = communityCategory;