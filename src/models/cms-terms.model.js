const mongoose = require('mongoose');
const { paginate } = require('./plugins');


const termsSchema = mongoose.Schema(
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

termsSchema.plugin(paginate);

/**
 * @typedef terms
 */
const terms = mongoose.model('cms_termsses', termsSchema);

module.exports = terms;