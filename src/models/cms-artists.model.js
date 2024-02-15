const mongoose = require("mongoose");
const { paginate } = require("./plugins");

const artistSchema = mongoose.Schema(
  {
    name: {
      type: String,
    },
    description: {
      type: String,
    },
    imageThumbnail: {
      type: String,
    },
    slug: {
      type: String,
    },
    monthlyListener: {
      type: String,
    },
    facebookFollower: {
      type: String,
    },
    instagramFollower: {
      type: String,
    },
    commulativeStreams: {
      type: String,
    },
    twitterHandle: {
      type: String,
    },
    instagramHandle: {
      type: String,
    },
    gaanaFollowers: {
      type: String,
    },
    shortDescription: {
      type: String,
    },
    artistSay: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

artistSchema.plugin(paginate);

/**
 * @typedef artist
 */
const artist = mongoose.model("cms_artists", artistSchema);

module.exports = artist;
