const mongoose = require('mongoose');
const { paginate } = require('./plugins');


const influencerApplicationsSchema = mongoose.Schema(
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

influencerApplicationsSchema.plugin(paginate);

/**
 * @typedef influencerApplications
 */
const influencerApplications = mongoose.model('cms_influencer_applications', influencerApplicationsSchema);

module.exports = influencerApplications;