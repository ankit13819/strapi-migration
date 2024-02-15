const mongoose = require('mongoose');
const { paginate } = require('./plugins');

const artistApplicationsSchema = mongoose.Schema(
  {
    user: {
      type: Object,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    profileLink: {
      type: String,
      required: false
    },
    email: {
      type: String,
      required: true
    },
    mobile: {
      type: String,
      required: true
    },
    songLink: {
      type: String,
      required: true
    },
  },
  {
    timestamps: true,
  }
);

artistApplicationsSchema.plugin(paginate);

/**
 * @typedef artistApplications
 */
const artistApplications = mongoose.model('cms_artist_applications', artistApplicationsSchema);

module.exports = artistApplications;