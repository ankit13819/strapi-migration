const mongoose = require('mongoose');
const { paginate } = require('./plugins');


const invitationCodeSchema = mongoose.Schema(
    {
        attributes: {
            type: Object,
            required: true
        },
        Title: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true,
    }
);

invitationCodeSchema.plugin(paginate);

/**
 * @typedef invitationCode
 */
const invitationCode = mongoose.model('cms_invitation_codes', invitationCodeSchema);

module.exports = invitationCode;