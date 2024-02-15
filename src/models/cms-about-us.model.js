const mongoose = require('mongoose');
const { paginate } = require('./plugins');

const aboutUsSchema = mongoose.Schema(
  {
    attributes: {
      type: Object,
      required: true
    },
    ourMission: {
      type: String,
      required: true
    },
    ourVission: {
      type: String,
      required: true
    },
    aboutFantiger: {
      type: String,
      required: true
    },
    ourMissionThumbnail: {
      type: String,
      required: true
    },
    ourVissionThumbnail: {
      type: String,
      required: true
    },
    ceoMessage: {
      type: String,
      required: true
    },
    ceo: {
      type: String,
      required: true
    }

  },
  {
    timestamps: true,
  }
);

aboutUsSchema.plugin(paginate);

/**
 * @typedef aboutUs
 */
const aboutUs = mongoose.model('cms_about_us', aboutUsSchema);

module.exports = aboutUs;