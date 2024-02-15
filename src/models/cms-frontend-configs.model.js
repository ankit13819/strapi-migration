const mongoose = require('mongoose');
const { paginate } = require('./plugins');

const frontendConfigSchema = mongoose.Schema(
    {
        user: {
            type: Object,
            required: true
        },
        key: {
            type: String,
            required: true
        },
        value: {
            type: String,
            required: true
        },
        slug: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true,
    }
);

frontendConfigSchema.plugin(paginate);

/**
 * @typedef frontendConfig
 */
const frontendConfig = mongoose.model('cms_frontend_configs', frontendConfigSchema);

module.exports = frontendConfig;