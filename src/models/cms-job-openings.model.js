const mongoose = require('mongoose');
const { paginate } = require('./plugins');


const jobOpeningsSchema = mongoose.Schema(
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

jobOpeningsSchema.plugin(paginate);

/**
 * @typedef jobOpenings
 */
const jobOpenings = mongoose.model('cms_job_openings', jobOpeningsSchema);

module.exports = jobOpenings;