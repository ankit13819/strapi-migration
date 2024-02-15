const mongoose = require('mongoose');
const { paginate } = require('./plugins');


const faqCategoriesSchema = mongoose.Schema(
  {
    user: {
      type: Object,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    subtitle: {
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

faqCategoriesSchema.plugin(paginate);

/**
 * @typedef faqCategories
 */
const faqCategories = mongoose.model('cms_faq_categories', faqCategoriesSchema);

module.exports = faqCategories;