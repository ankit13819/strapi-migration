const mongoose = require('mongoose');
const { paginate } = require('./plugins');


const messagingTemplatesSchema = mongoose.Schema(
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

messagingTemplatesSchema.plugin(paginate);

/**
 * @typedef messagingTemplates
 */
const messagingTemplates = mongoose.model('cms_messaging_templates', messagingTemplatesSchema);

module.exports = messagingTemplates;