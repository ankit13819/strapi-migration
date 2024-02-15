const mongoose = require("mongoose");
const { paginate } = require("./plugins");

const tierPrivilegeSchema = mongoose.Schema(
  {
    revenue_share: {
      type: String,
    },
    Privilege1: {
      type: String,
    },
    Privilege2: {
      type: String,
    },
    Privilege3: {
      type: String,
    },
    Privilege4: {
      type: String,
    },
    tier_max_supply: {
      type: String,
    },
    tier_current_supply: {
      type: String,
    },
    locale: {
      type: String,
    },
    asset_tier_mnemonics: {
      type: String,
    },
    tier_id: {
      type: Number,
    },
    asset_image_url: {
      type: String,
    },
    starting_bid: {
      type: Number,
    },
    description_asset_tier_mnemonics: {
      type: String,
    },
    minting_status: {
      type: String,
    },
    max_token_per_user: {
      type: Number,
    },
    Privilege1_Detailed: {
      type: String,
    },
    Privilege2_Detailed: {
      type: String,
    },
    Privilege3_Detailed: {
      type: String,
    },
    Privilege4_Detailed: {
      type: String,
    },
    Privilege5_Detailed: {
      type: String,
    },
    Privilege6_Detailed: {
      type: String,
    },
    slug: {
      type: String,
    },
    meta_page_title: {
      type: String,
    },
    meta_name: {
      type: String,
    },
    meta_description: {
      type: String,
    },
    meta_keywords: {
      type: String,
    },
    meta_og_title: {
      type: String,
    },
    meta_og_url: {
      type: String,
    },
    meta_og_image: {
      type: String,
    },
    meta_og_description: {
      type: String,
    },
    phase_1_supply: {
      type: Number,
    },
    phase_2_supply: {
      type: Number,
    },
    phase_1_start_date: {
      type: String,
    },
    phase_2_start_date: {
      type: String,
    },
    phase_1_sold: {
      type: Number,
    },
    phase_2_sold: {
      type: Number,
    },
    asset_path_uri: {
      type: String,
    },
    nft_frontimage_url: {
      type: String,
    },
    nft_backimage_url: {
      type: String,
    },
    tier_privilege_coins: {
      type: Number,
    },
    nft_trading_video: {
      type: String,
    },
    ticketing_link_title: {
      type: String,
    },
    ticketing_link: {
      type: String,
    },
    ticketing_nft_lowest_price: {
      type: Number,
    },
    ticketing_nft_highest_price: {
      type: Number,
    },
    ticketing_nft_current_price: {
      type: Number,
    },
    sequence_number: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

tierPrivilegeSchema.plugin(paginate);

/**
 * @typedef tierPrivilege
 */
const tierPrivilege = mongoose.model(
  "cms_tier_privileges",
  tierPrivilegeSchema
);

module.exports = tierPrivilege;
