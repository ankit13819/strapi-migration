const mongoose = require('mongoose');
const { paginate } = require('./plugins');

const fantigerLeadershipSchema = mongoose.Schema(
    {
        user: {
            type: Object,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        designation: {
            type: String,
            required: false
        },
        pictureUrl: {
            type: String,
            required: true
        },
        summary: {
            type: String,
            required: true
        },
        isActive: {
            type: Boolean,
            required: false
        },
    },
    {
        timestamps: true,
    }
);

fantigerLeadershipSchema.plugin(paginate);

/**
 * @typedef fantigerLeadership 
 */
const fantigerLeadership = mongoose.model('cms_fantiger_leaderships', fantigerLeadershipSchema);

module.exports = fantigerLeadership;