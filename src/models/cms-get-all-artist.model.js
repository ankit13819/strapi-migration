const mongoose = require('mongoose');
const { paginate } = require('./plugins');


const getAllArtistSchema = mongoose.Schema(
    {
        user: {
            type: Object,
            required: true
        },
        artistName: {
            type: String,
            required: true
        },
        artistImage: {
            type: String,
            required: true
        },
    },
    {
        timestamps: true,
    }
);

getAllArtistSchema.plugin(paginate);

/**
 * @typedef getAllArtist
 */
const getAllArtist = mongoose.model('cms_get_all_artist', getAllArtistSchema);

module.exports = getAllArtist;