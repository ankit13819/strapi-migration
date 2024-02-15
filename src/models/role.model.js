const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const roleSchema = mongoose.Schema(
  {
    communityId: {
      type: String,
      required: true,
      trim: true,
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    colorCode: {
      type: String,
      required: false,
      trim: true,
    },
    icon: {
      type: String,
      required: false,
      trim: true,
    },
    displayRoleMembersSeparately: {
      type: Boolean,
      default: true,
    },
    members: [
      {
        _id: false,
        user: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'User',
        },
      },
    ],
    deletedAt: {
      type: Date,
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
roleSchema.plugin(toJSON);
roleSchema.plugin(paginate);

/**
 * Check if role name is taken
 * @param {string} name - The role name
 * @returns {Promise<boolean>}
 */
roleSchema.statics.isRoleTaken = async function (name, excludeUserId) {
  const role = await this.findOne({ name, deletedAt: { $eq: null }, _id: { $ne: excludeUserId } });
  return !!role;
};

/**
 * @typedef Role
 */
const Role = mongoose.model('Role', roleSchema);

module.exports = Role;
