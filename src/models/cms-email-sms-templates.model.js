const mongoose = require('mongoose');
const { paginate } = require('./plugins');


const emailSmsTemplatesSchema = mongoose.Schema(
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

emailSmsTemplatesSchema.plugin(paginate);

/**
 * @typedef emailSmsTemplates
 */
const emailSmsTemplates = mongoose.model('cms_email_sms_templates', emailSmsTemplatesSchema);

module.exports = emailSmsTemplates;