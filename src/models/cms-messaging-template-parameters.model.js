const mongoose = require('mongoose');
const { paginate } = require('./plugins');


const messagingTempelateParametersSchema = mongoose.Schema(
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

messagingTempelateParametersSchema.plugin(paginate);

/**
 * @typedef messagingTempelateParameters
 */
const messagingTempelateParameters = mongoose.model('cms_messaging_template_parameters', messagingTempelateParametersSchema);

module.exports = messagingTempelateParameters;