const mongoose = require('mongoose');
const { paginate } = require('./plugins');


const legalsSchema = mongoose.Schema(
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

legalsSchema.plugin(paginate);

/**
 * @typedef legals
 */
const legals = mongoose.model('cms_legals', legalsSchema);

module.exports = legals;