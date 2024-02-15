const mongoose = require('mongoose');
const { paginate } = require('./plugins');

const activityEarnCoinsSchema = mongoose.Schema(
    {
        id: {
            type: Object,
            required: true
        },
        activity_earn_coin: {
            type: Object,
            required: true
        }
    },
    {
        timestamps: true,
    }
);

activityEarnCoinsSchema.plugin(paginate);

/**
 * @typedef activityEarnCoins
 */
const activityEarnCoins = mongoose.model('cms_activity_earn_coins', activityEarnCoinsSchema);

module.exports = activityEarnCoins;