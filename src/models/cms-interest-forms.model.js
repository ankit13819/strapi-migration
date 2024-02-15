const mongoose = require('mongoose');
const { paginate } = require('./plugins');


const interestFormSchema = mongoose.Schema(
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

interestFormSchema.plugin(paginate);

/**
 * @typedef interestForm
 */
const interestForm = mongoose.model('cms_interest_forms', interestFormSchema);

module.exports = interestForm;