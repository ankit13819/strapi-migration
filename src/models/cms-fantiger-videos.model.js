const mongoose = require('mongoose');
const { paginate } = require('./plugins');


const fantigerVideosSchema = mongoose.Schema(
  {
    user: {
      type: Object,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    embed_key: {
      type: String,
      required: true
    },
    image_thumbnail: {
      type: String,
      required: true
    },

  },
  {
    timestamps: true,
  }
);

fantigerVideosSchema.plugin(paginate);

/**
 * @typedef fantigerVideos
 */
const fantigerVideos = mongoose.model('cms_fantiger_videos', fantigerVideosSchema);

module.exports = fantigerVideos;