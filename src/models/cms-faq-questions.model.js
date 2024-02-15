const mongoose = require('mongoose');
const { paginate } = require('./plugins');


const faqQuestionSchema = mongoose.Schema(
  {
    user: {
      type: Object,
      required: true
    },
    question: {
      type: String,
      required: true
    },
    answer: {
      type: String,
      required: true
    },
    sequence: {
      type: Number,
      required: true
    }
  },
  {
    timestamps: true,
  }
);

faqQuestionSchema.plugin(paginate);

/**
 * @typedef faqQuestion
 */
const faqQuestion = mongoose.model('cms_faq_questions', faqQuestionSchema);

module.exports = faqQuestion;