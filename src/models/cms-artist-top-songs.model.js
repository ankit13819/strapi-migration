const mongoose = require('mongoose');
const { paginate } = require('./plugins');


const artistTopSongsSchema = mongoose.Schema(
    {
        songname: {
            type: String
        },
        release_date: {
            type: String
        },
        total_streams: {
            type: String
        },
        thumbnail_url: {
            type: String
        },
        youtube_embed_id: {
            type: String
        },
        spotify_track_id: {
            type: String
        }

    },
    {
        timestamps: true,
    }
);

artistTopSongsSchema.plugin(paginate);

/**
 * @typedef artistAssets
 */
const artistTopSongs = mongoose.model('cms_artist_top_songs', artistTopSongsSchema);

module.exports = artistTopSongs;