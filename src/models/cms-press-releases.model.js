const mongoose = require('mongoose');
const { paginate } = require('./plugins');


const pressReleasesSchema = mongoose.Schema(
    {
        user: {
            type: Object,
            required: true
        },
        externalLink: {
            type: String,
            required: true
        },
        altText: {
            type: String,
            required: true
        },


        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        media_logo: {
            type: Object,
            required: true
        }


    },
    {
        timestamps: true,
    }
);

pressReleasesSchema.plugin(paginate);

/**
 * @typedef pressReleases
 */
const pressReleases = mongoose.model('cms_press_releases', pressReleasesSchema);

module.exports = pressReleases;