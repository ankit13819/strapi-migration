const mongoose = require('mongoose');
const { paginate } = require('./plugins');


const HistoricalCalculatorSchema = mongoose.Schema(
    {
        user: {
            type: Object,
            required: true
        },
        songName: {
            type: String,
            required: true
        },
        singerName: {
            type: String,
            required: true
        },
        roi: {
            type: Number,
            required: true
        },
        imageUrl: {
            type: String,
            required: true
        },
        songCategory: {
            type: String,
            required: true
        },
        streams: {
            type: Number,
            required: true
        }


    },
    {
        timestamps: true,
    }
);

HistoricalCalculatorSchema.plugin(paginate);

/**
 * @typedef historicalCalculator
 */
const historicalCalculator = mongoose.model('cms_historical_calculators', HistoricalCalculatorSchema);

module.exports = historicalCalculator;