const mongoose = require('mongoose');
const { paginate } = require('./plugins');


const streamingStatsSchema = mongoose.Schema(
    {
        user: {
            type: Object,
            required: true
        },
        slug: {
            type: String,
            required: true
        },
        streams: {
            type: Number,
            required: true
        },


        startDate: {
            type: Date,
            required: true
        },




    },
    {
        timestamps: true,
    }
);

streamingStatsSchema.plugin(paginate);

/**
 * @typedef streamingStats
 */
const streamingStats = mongoose.model('cms_streaming_stats', streamingStatsSchema);

module.exports = streamingStats;