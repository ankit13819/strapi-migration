const mongoose = require("mongoose");
const { paginate } = require("./plugins");

const artistAssetsSchema = mongoose.Schema(
  {
    Title: {
      type: String,
    },
    Description: {
      type: String,
    },
    locale: {
      type: String,
    },
    creative: {
      type: String,
    },
    video: {
      type: String,
    },
    preview_audio: {
      type: String,
    },
    full_audio: {
      type: String,
    },
    video_cover: {
      type: String,
    },
    royalty_share: {
      type: String,
    },
    audio_url: {
      type: String,
    },
    video_url: {
      type: String,
    },
    image_url: {
      type: String,
    },
    blockchain: {
      type: String,
    },
    contract_address: {
      type: String,
    },
    amount_to_be_raised: {
      type: String,
    },
    legal_contract: {
      type: String,
    },
    lauch_date: {
      type: String,
    },
    upcoming_homepage: {
      type: Boolean,
    },
    ytube_views: {
      type: Number,
    },
    nft_slug: {
      type: String,
    },
    spotify_url: {
      type: String,
    },
    additional_media_image: {
      type: String,
    },
    youtube_embed_code: {
      type: String,
    },
    spotify_track_id: {
      type: String,
    },
    lowest_ask: {
      type: Number,
    },
    highest_ask: {
      type: Number,
    },
    total_tokens: {
      type: Number,
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
    song_preview_youtube_text: {
      type: String,
    },
    homepage_banner_line1: {
      type: String,
    },
    homepage_banner_line2: {
      type: String,
    },
    homepage_banner_image_desktop: {
      type: String,
    },
    homepage_banner_image_mobile: {
      type: String,
    },
    song_launch_date: {
      type: String,
    },
    Song_language: {
      type: String,
    },
    royalty_payout_date: {
      type: String,
    },
    risk_level: {
      type: Number,
    },
    song_category: {
      type: String,
    },
    is_tradable: {
      type: Boolean,
    },
    show_trading_graph: {
      type: Boolean,
    },
    orientation: {
      type: String,
    },
    strikethrough_price: {
      type: Number,
    },
    show_on_promotional_pages: {
      type: Boolean,
    },
    show_on_mobile_app: {
      type: Boolean,
    },
    nft_trading_video: {
      type: Boolean,
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
    sequence: {
      type: Number,
    },
    strikethrough_price_visible: {
      type: Number,
    },
    banner_sequence: {
      type: Number,
    },
    is_banner_active: {
      type: Boolean,
    },
    sell_now_date: {
      type: String,
    },
    song_video_url: {
      type: String,
    },
    song_thumbnail_url: {
      type: String,
    },
    song_subtitle: {
      type: String,
    },
    is_publish: {
      type: Boolean,
    },
  },
  {
    timestamps: true,
  }
);

artistAssetsSchema.plugin(paginate);

/**
 * @typedef artistAssets
 */
const artistAssets = mongoose.model("cms_artist_assets", artistAssetsSchema);

module.exports = artistAssets;