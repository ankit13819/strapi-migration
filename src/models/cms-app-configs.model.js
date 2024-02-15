const mongoose = require('mongoose');
const { paginate } = require('./plugins');


const appConfigsSchema = mongoose.Schema(
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

appConfigsSchema.plugin(paginate);

/**
 * @typedef appConfigs
 */
const appConfigs = mongoose.model('cms_app_configs', appConfigsSchema);

module.exports = appConfigs;