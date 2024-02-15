const axios = require("axios");
const httpStatus = require("http-status");
const {
  User,
  FaqQuestion,
  AboutUs,
  Artists,
  FaqCategories,
  FantigerVideos,
  AllArtist,
  PressReleases,
  ArtistAssets,
  HistoricalCalculator,
  FantigerLeadership,
  FrontendConfig,
  StreamingStats,
  TierPrivilege,
  ActivityEarnCoins,
  ArtistTopSongs,
  ArtistApplication,
  InfluencerApplications,
  MessagingTemplates,
  AppConfigs,
  AssetAttributes,
  Blockchains,
  Community,
  CommunityCategory,
  CommunityChannel,
  CommunityChannelType,
  Contracts,
  InterestForms,
  InvitationCode,
  JobOpenings,
  Legals,
  EmailSmsTemplates,
} = require("../models");

const ApiError = require("../utils/ApiError");
const rTracer = require("cls-rtracer");
const logger = require("../config/logger");
const ObjectId = require("mongodb").ObjectID;
const utility = require("../utils/utility");
const {
  generateRandomNumber,
  addMinutesToCurrentDate,
  calculateProfileLoss,
  round,
  groupByList,
  getNormalizedEmail,
} = require("../utils/utility");

const getFaqsQuestions = async (req) => {
  logger.info(`CMS Service -> getFaqsQuestions :: ${rTracer.id()}`);
  const filters = {};
  const data = await FaqQuestion.find().lean();
  const newData = [];

  data.map((item) => {
    delete item._id;
    newData.push({
      id: item.id,
      attributes: {
        question: item.question,
        answer: item.answer,
        sequence: item.sequence,
        createdAt: item.createdAt,
        updatedAt: item.updatedAt,
        publishedAt: item.publishedAt,
        faq_category: {
          data: {
            // id: item.faq_category.data.id?.[0],
            attributes: item.faq_category.data,
          },
        },
      },
    });
  });
  return newData;
};

const getAboutUs = async (id) => {
  logger.info(`CMS Service -> getAboutUs :: ${rTracer.id()}`);
  const data = await AboutUs.find().lean();
  const newData = [];
  data.map((item) => {
    delete item._id;
    newData.push({
      id: item.id,
      attributes: item,
    });
  });
  return newData;
};

const getArtistApplications = async (id) => {
  logger.info(`CMS Service -> getArtistApplications :: ${rTracer.id()}`);
  const data = await ArtistApplication.find().lean();
  const newData = [];
  data.map((item) => {
    const id = item._id;
    delete item._id;
    newData.push({
      id: id,
      attributes: item,
    });
  });
  return newData;
};

const getArtists = async () => {
  logger.info(`CMS Service -> getArtists :: ${rTracer.id()}`);
  const data = await Artists.find().lean();
  const newData = [];
  data.map((item) => {
    newData.push({
      id: item?.id,
      _id: item?._id,
      attributes: {
        ...item,
        image: {
          data: {
            id: item?.image?.id,
            attributes: {
              ...item?.image?.data,
            },
          },
        },
        artist_top_songs: {
          data: [
            {
              id: item?.artist_top_songs?.id,
              attributes: {
                ...item?.artist_top_songs?.data,
              },
            },
          ],
        },
        artist_assets: {
          data: [
            {
              _id: item?.artist_assets?.id,
              attributes: {
                ...item?.artist_assets?.data[0],
              },
            },
          ],
        },
      },
    });
  });
  return newData;
};

//Create data in db
const createArtists = async (data) => {
  logger.info(`CMS Service -> getArtists :: ${rTracer.id()}`);
  const newArtist = await new Artists(data);
  const getCreateArtist = await newArtist.save();
};

const updateArtists = async (data, _id) => {
  logger.info(`CMS Service -> updateArtists :: ${rTracer.id()}`);
  await Artists.updateOne({ _id }, data, { new: true }).catch((error) => {
    console.log(error);
  });
};

const deleteArtists = async (_id) => {
  logger.info(`CMS Service -> deleteArtists :: ${rTracer.id()}`);
  const deleteResult = await Artists.findByIdAndDelete(_id);
  if (!deleteResult) {
    throw new ApiError(httpStatus.NOT_FOUND, "Artist not found");
  }
  return deleteArtists;
};

const getFaqCategories = async (req) => {
  logger.info(`CMS Service -> getFaqCategories :: ${rTracer.id()}`);
  const filters = {};
  const url = decodeURIComponent(req.originalUrl);
  const regex = /(?<=filters\[category_title\]\[\$eq\]=)[^&]+/;

  const match = url.match(regex);


  if (match) {
    filters.category_title = match[0];
  } else {
    console.log("No match found");
  }
  const populate = req.query.populate || '';
  const data = await FaqCategories.find(filters).populate(populate).lean();
  const newData = [];
  data.map((item) => {
    const id = item._id;
    delete item._id;
    newData.push({
      _id: id,
      attributes: item,
    });
  });
  return newData;
};
const getFantigerVideos = async (id) => {
  logger.info(`CMS Service -> getFantigerVideos :: ${rTracer.id()}`);
  const data = await FantigerVideos.find();
  return data;
};

const getAllArtist = async (id) => {
  logger.info(`CMS Service -> getAllArtist :: ${rTracer.id()}`);
  const data = await AllArtist.find();
  const newData = [];
  data.map((item) => {
    const id = item._id;
    delete item._id;
    newData.push({ _id: id, attributes: item });
  });
  return newData;
};

const getPressReleases = async (id) => {
  logger.info(`CMS Service -> getPressReleases :: ${rTracer.id()}`);
  const data = await PressReleases.find().lean();
  const newData = [];
  data.map((item) => {
    const id = item._id;
    media_logo_test = item.media_logo.data;
    delete item._id;
    media_logo_data = item.media_logo.data;
    newData.push({
      _id: id,
      attributes: {
        external_link: item.external_link,
        alt_text: item.alt_text,
        title: item.title,
        description: item.description,
        createdAt: item.createdAt,
        updatedAt: item.updatedAt,
        publishedAt: item.publishedAt,
        media_logo: {
          data: [
            {
              _id: id,
              attributes: item.media_logo.data[0],
            },
          ],
        },
      },
    });
  });
  return newData;
};

const getArtistAssets = async (req) => {
  logger.info(`CMS Service -> getArtistAssets :: ${rTracer.id()}`);

  const filters = {};

  if (req.query.filters && req.query.filters.upcoming_homepage === "true") {
    filters.upcoming_homepage = true;
  }
  const url = decodeURIComponent(req.originalUrl);
  const regex = /(?<=filters\[nft_slug\]\[\$eq\]=)[^&]+/;

  const match = url.match(regex);
  if (match) {
    filters.nft_slug = match[0];
  } else {
    console.log("No match found");
  }
  const populate = req.query.populate || '';
  const data = await ArtistAssets.find(filters).populate(populate).lean();
  const modifiedData = data.map((item) => {
    // delete item._id;
    return {
      id: item?.id,
      _id: item?._id,
      attributes: {
        Title: item?.Title,
        Description: item?.Description,
        createdAt: item?.createdAt,
        updatedAt: item?.updatedAt,
        publishedAt: item?.publishedAt,
        locale: item?.locale,
        royalty_share: item?.royalty_share,
        audio_url: item?.audio_url,
        video_url: item?.video_url,
        image_url: item?.image_url,
        blockchain: item?.blockchain,
        contract_address: item?.contract_address,
        amount_to_be_raised: item?.amount_to_be_raised,
        legal_contract: item?.legal_contract,
        lauch_date: item?.lauch_date,
        upcoming_homepage: item?.upcoming_homepage,
        ytube_views: item?.ytube_views,
        nft_slug: item?.nft_slug,
        spotify_url: item?.spotify_url,
        youtube_embed_code: item?.youtube_embed_code,
        spotify_track_id: item?.spotify_track_id,
        lowest_ask: item?.lowest_ask,
        highest_ask: item?.highest_ask,
        total_tokens: item?.total_tokens,
        meta_page_title: item?.meta_page_title,
        meta_name: item?.meta_name,
        meta_description: item?.meta_description,
        meta_keywords: item?.meta_keywords,
        meta_og_title: item?.meta_og_title,
        meta_og_url: item?.meta_og_url,
        meta_og_image: item?.meta_og_image,
        meta_og_description: item?.meta_og_description,
        song_preview_youtube_text: item?.song_preview_youtube_text,
        homepage_banner_line1: item?.homepage_banner_line1,
        homepage_banner_line2: item?.homepage_banner_line2,
        homepage_banner_image_desktop: item?.homepage_banner_image_desktop,
        homepage_banner_image_mobile: item?.homepage_banner_image_mobile,
        song_launch_date: item?.song_launch_date,
        Song_language: item?.Song_language,
        royalty_payout_date: item?.royalty_payout_date,
        risk_level: item?.risk_level,
        song_category: item?.song_category,
        is_tradable: item?.is_tradable,
        show_trading_graph: item?.show_trading_graph,
        orientation: item?.orientation,
        strikethrough_price: item?.strikethrough_price,
        show_on_promotional_pages: item?.show_on_promotional_pages,
        show_on_mobile_app: item?.show_on_mobile_app,
        nft_trading_video: item?.nft_trading_video,
        ticketing_nft_lowest_price: item?.ticketing_nft_lowest_price,
        ticketing_nft_highest_price: item?.ticketing_nft_highest_price,
        ticketing_nft_current_price: item?.ticketing_nft_current_price,
        sequence: item?.sequence,
        strikethrough_price_visible: item?.strikethrough_price_visible,
        banner_sequence: item?.banner_sequence,
        is_banner_active: item?.is_banner_active,
        sell_now_date: item?.sell_now_date,
        song_video_url: item?.song_video_url,
        song_thumbnail_url: item?.song_thumbnail_url,
        song_subtitle: item?.song_subtitle,
        artists: {
          data: [
            {
              id: item?.artists?.data?.[0].id,
              attributes: {
                ...item?.artists?.data?.[0],
              },
            },
          ],
        },
        creatives: {
          data: [
            {
              id: item?.creatives?.data?.[0]?.id,
              attributes: {
                ...item?.creatives?.data?.[0],
              },
            },
          ],
        },
        Video: {
          data: {
            id: item?.Video?.data?.[0].id,
            attributes: {
              ...item?.Video?.data?.[0],
            },
          },
        },
        asset_tiers: {
          data:
            item?.asset_tiers?.data.length === 1
              ? [
                {
                  id: item?.asset_tiers?.data?.[0]?.id,
                  attributes: {
                    ...item?.asset_tiers?.data?.[0],
                  },
                },
              ]
              : item?.asset_tiers?.data.length === 3
                ? [
                  {
                    id: item?.asset_tiers?.data?.[0]?.id,
                    attributes: {
                      ...item?.asset_tiers?.data?.[0],
                    },
                  },
                  {
                    id: item?.asset_tiers?.data?.[0].id,
                    attributes: {
                      ...item?.asset_tiers?.data?.[1],
                    },
                  },
                  {
                    id: item?.asset_tiers?.data?.[0].id,
                    attributes: {
                      ...item?.asset_tiers?.data?.[2],
                    },
                  },
                ]
                : [],
        },
        PreviewAudio: {
          data: {
            id: item?.PreviewAudio?.data?.[0]?.id,
            attributes: {
              ...item?.PreviewAudio?.data,
            },
          },
        },
        additional_media_image: {
          data: [
            {
              id: item?.additional_media_image?.data?.[0].id,
              attributes: {
                ...item?.additional_media_image?.data?.[0],
              },
            },
          ],
        },
      },
    };
  });
  return modifiedData;
};

// Create Artist new entry Monogo Post Method
const createArtistAssets = async (data) => {
  logger.info(`CMS Service -> createArtistAssets :: ${rTracer.id()}`);

  const newArtistAssets = new ArtistAssets(data);
  const savedArtistAssets = await newArtistAssets.save();

  logger.info(`CMS Service -> createArtistAssets getData :: ${rTracer.id()}`);
};

const updateArtistAssets = async (data, _id) => {
  logger.info(`CMS Service -> updateArtistAssets :: ${rTracer.id()}`);
  const giveData = await ArtistAssets.updateOne({ _id }, data, {
    new: true,
  });
};

const deleteArtistAssets = async (_id) => {
  logger.info(`CMS Service -> updateArtistAssets :: ${rTracer.id()}`);
  const deletedData = await ArtistAssets.findByIdAndDelete(_id);

  if (!deletedData) {
    throw new ApiError(httpStatus.NOT_FOUND, "ArtistAssets Data not found");
  }
  return deleteArtistAssets;
};

const gethistoricalCalculator = async (req) => {
  logger.info(`CMS Service -> gethistoricalCalculator :: ${rTracer.id()}`);
  const filters = {};
  const url = decodeURIComponent(req.originalUrl);
  const regex = /(?<=filters\[song_category\]\[\$eq\]=)[^&]+/;
  const match = url.match(regex);
  if (match) {
    filters.song_category = match[0];
  }
  const populate = req.query.populate || '';
  if (populate) {
    filters.song_category = populate;
  }
  const data = await HistoricalCalculator.find(filters).populate(populate).lean();

  const historicalData = data.map((item) => {
    const id = item?._id;
    delete item?._id;
    return {
      id: id,
      attributes: {...item},
    };
  });
  return historicalData;
};

const getfantigerLeadership = async (id) => {
  logger.info(`CMS Service -> getfantigerLeadership :: ${rTracer.id()}`);
  const data = await FantigerLeadership.find();
  return data;
};

const getfrontendConfigs = async (req) => {
  logger.info(`CMS Service -> getfrontendConfigs :: ${rTracer.id()}`);
  const filters = {};
  const url = decodeURIComponent(req.originalUrl);
  const regex = /(?<=filters\[slug\]\[\$eq\]=)[^&]+/;

  const match = url.match(regex);


  if (match) {
    filters.slug = match[0];
  } else {
    console.log("No match found");
  }
  const populate = req.query.populate || '';
  const data = await FrontendConfig.find(filters).populate(populate).lean();
  const newData = [];
  data.map((item) => {
    newData.push({
      id: item._id,
      attributes: item,
    });
  });
  return newData;
};

const getStreamingStats = async (query) => {
  logger.info(`CMS Service -> getStreamingStats :: ${rTracer.id()}`);
  const data = await StreamingStats.find();
  const newData = [];
  data.map((item) => {
    delete item._id;
    newData.push({ id: item.id, attributes: item });
  });
  return newData;
};

const getArtistTopSongs = async (id) => {
  logger.info(`CMS Service -> getArtistTopSongs  :: ${rTracer.id()}`);
  const data = await ArtistTopSongs.find().lean();
  const newData = [];
  data.map((item) => {
    newData.push({
      id: item.id,
      _id: item._id,
      attributes: {
        songname: item?.songname,
        release_date: item?.release_date,
        total_streams: item?.total_streams,
        thumbnail_url: item?.thumbnail_url,
        createdAt: item?.createdAt,
        updatedAt: item?.updatedAt,
        publishedAt: item?.publishedAt,
        youtube_embed_id: item?.youtube_embed_id,
        spotify_track_id: item?.spotify_track_id,
        artist: {
          data: {
            id: item?.artist?.data?.id,
            attributes: {
              ...item?.artist?.data,
            },
          },
        },
      },
    });
  });
  return newData;
};

//create object for createArtistTopSongs
const createArtistTopSongs = async (data) => {
  logger.info(`CMS Service -> getArtistTopSongs  :: ${rTracer.id()}`);
  const newArtistTopSongs = await ArtistTopSongs(data);
  const getDAta = await newArtistTopSongs.save();
};

const updateArtistTopSongs = async (data, _id) => {
  logger.info(`CMS Service -> updateArtistTopSongs :: ${rTracer.id()}`);
  const updateSong = await ArtistTopSongs.updateOne({ _id }, data, {
    new: true,
  });
};

const deleteArtistTopSongs = async (_id) => {
  logger.info(`CMS Service -> deleteArtistTopSongs :: ${rTracer.id()}`);
  const deleteResult = await ArtistTopSongs.findByIdAndDelete(_id);
  if (!deleteResult) {
    throw new ApiError(httpStatus.NOT_FOUND, "Artist not found");
  }
  return deleteArtists;
};

const getTierPrivilege = async (req) => {
  logger.info(`CMS Service -> getTierPrivilege  :: ${rTracer.id()}`);
  const filters = {};
  const url = decodeURIComponent(req.originalUrl);
  const regex = /(?<=filters\[tier_id\]\[\$eq\]=)[^&]+/;
  const match = url.match(regex);
  if (match) {
    filters.tier_id = match[0];
  } else {
    console.log("No match found");
  }
  const populate = req.query.populate || '';
  const data = await TierPrivilege.find(filters).populate(populate).lean();

  const tierprivelegeData = data.map((item) => {
    const id = item?._id;
    delete item?._id;
    return {
      id: item?.id,
      _id: id,
      attributes: {
        revenue_share: item?.revenue_share,
        createdAt: item?.createdAt,
        updatedAt: item?.updatedAt,
        publishedAt: item?.publishedAt,
        Privilege1: item?.Privilege1,
        Privilege2: item?.Privilege2,
        Privilege3: item?.Privilege3,
        Privilege4: item?.Privilege4,
        tier_max_supply: item?.tier_max_supply,
        tier_current_supply: item?.tier_current_supply,
        locale: item?.locale,
        asset_tier_mnemonics: item?.asset_tier_mnemonics,
        tier_id: item?.tier_id,
        asset_image_url: item?.asset_image_url,
        starting_bid: item?.starting_bid,
        description_asset_tier_mnemonics:
          item?.description_asset_tier_mnemonics,
        minting_status: item?.minting_status,
        max_token_per_user: item?.max_token_per_user,
        Privilege1_Detailed: item?.Privilege1_Detailed,
        Privilege2_Detailed: item?.Privilege2_Detailed,
        Privilege3_Detailed: item?.Privilege3_Detailed,
        Privilege4_Detailed: item?.Privilege4_Detailed,
        Privilege5_Detailed: item?.Privilege5_Detailed,
        Privilege6_Detailed: item?.Privilege6_Detailed,
        slug: item?.slug,
        meta_page_title: item?.meta_page_title,
        meta_name: item?.meta_name,
        meta_description: item?.meta_description,
        meta_keywords: item?.meta_keywords,
        meta_og_title: item?.meta_og_title,
        meta_og_url: item?.meta_og_url,
        meta_og_image: item?.meta_og_image,
        meta_og_description: item?.meta_og_description,
        phase_1_supply: item?.phase_1_supply,
        phase_2_supply: item?.phase_2_supply,
        phase_1_start_date: item?.phase_1_start_date,
        phase_2_start_date: item?.phase_2_start_date,
        phase_1_sold: item?.phase_1_sold,
        phase_2_sold: item?.phase_2_sold,
        asset_path_uri: item?.asset_path_uri,
        nft_frontimage_url: item?.nft_frontimage_url,
        nft_backimage_url: item?.nft_backimage_url,
        tier_privilege_coins: item?.tier_privilege_coins,
        nft_trading_video: item?.nft_trading_video,
        ticketing_link_title: item?.ticketing_link_title,
        ticketing_link: item?.ticketing_link,
        ticketing_nft_lowest_price: item?.ticketing_nft_lowest_price,
        ticketing_nft_highest_price: item?.ticketing_nft_highest_price,
        ticketing_nft_current_price: item?.ticketing_nft_current_price,
        sequence_number: item?.sequence_number,
        artist_asset: {
          data: {
            _id: id,
            attributes: {
              ...item?.artist_asset?.data,
            },
          },
        },
        nft_images: {
          data: [
            {
              _id: id,
              attributes: { ...item?.nft_images?.data[0] },
            },
            {
              _id: id,
              attributes: { ...item?.nft_images?.data[1] },
            },
          ],
        },
      },
    };
  });
  return tierprivelegeData;
};

const createTierPrivilege = async (data) => {
  const newTierPrivilege = new TierPrivilege(data);
  const savedTierPrivilege = await newTierPrivilege.save();
};

const updateTierPrivilege = async (data, _id) => {
  logger.info(`CMS Service -> updateTierPrivilege :: ${rTracer.id()}`);
  const results = await TierPrivilege.updateOne({ _id }, data, {
    new: true,
  });
};

const deleteTierPrivilege = async (_id) => {
  logger.info(`CMS Service -> deleteTierPrivilege :: ${rTracer.id()}`);
  const deletedTierPrivilegeData = await TierPrivilege.findByIdAndDelete(_id);

  if (!deletedTierPrivilegeData) {
    throw new ApiError(
      httpStatus.NOT_FOUND,
      "deleteTierPrivilege Data not found"
    );
  }
  return deleteTierPrivilege;
};

const getinfluencerApplications = async (id) => {
  logger.info(`CMS Service -> getinfluencerApplications :: ${rTracer.id()}`);
  const data = await InfluencerApplications.find();
  const newData = [];
  data.map((item) => {
    newData.push({
      id: item._id,
      attributes: item,
    });
  });
  return newData;
};

const getActivityEarnCoins = async (id) => {
  logger.info(`CMS Service -> getActivityEarnCoins:: ${rTracer.id()}`);
  const data = await ActivityEarnCoins.find().lean();
  const newData = [];
  data.map((item) => {
    const id = item._id;
    delete item._id;
    // item.activity_earn_coin = JSON.parse(item.activity_earn_coin)
    newData.push({ id: id, attributes: item });
  });
  return newData;
};

const getMessagingTemplates = async (id) => {
  logger.info(`CMS Service ->getMessagingTemplates:: ${rTracer.id()}`);
  const data = await MessagingTemplates.find().lean();
  const newData = [];
  data.map((item) => {
    const id = item._id;
    delete item._id;
    // item.activity_earn_coin = JSON.parse(item.activity_earn_coin)
    newData.push({ _id: id, attributes: item });
  });
  return newData;
};

const getAppConfigs = async (id) => {
  logger.info(`CMS Service ->getAppConfigs:: ${rTracer.id()}`);
  const data = await AppConfigs.find().lean();
  const newData = [];
  data.map((item) => {
    const id = item._id;
    delete item._id;
    // item.activity_earn_coin = JSON.parse(item.activity_earn_coin)
    newData.push({ _id: id, attributes: item });
  });
  return newData;
};

const getAssetAttributes = async (id) => {
  logger.info(`CMS Service ->getAssetAttributes:: ${rTracer.id()}`);
  const data = await AssetAttributes.find().lean();
  const newData = [];
  data.map((item) => {
    const id = item._id;
    delete item._id;
    newData.push({ _id: id, attributes: item });
  });
  return newData;
};
const getBlockChains = async (id) => {
  logger.info(`CMS Service ->getBlockChains:: ${rTracer.id()}`);
  const data = await Blockchains.find().lean();
  const newData = [];
  data.map((item) => {
    const id = item._id;
    delete item._id;
    newData.push({ _id: id, attributes: item });
  });
  return newData;
};

const getCommunity = async (id) => {
  logger.info(`CMS Service ->getCommunity:: ${rTracer.id()}`);
  const data = await Community.find().lean();
  const newData = [];
  data.map((item) => {
    const id = item._id;
    delete item._id;
    newData.push({ _id: id, attributes: item });
  });
  return newData;
};

const getCommunityCategory = async (id) => {
  logger.info(`CMS Service ->getCommunityCategory:: ${rTracer.id()}`);
  const data = await CommunityCategory.find().lean();
  const newData = [];
  data.map((item) => {
    const id = item._id;
    delete item._id;
    newData.push({ _id: id, attributes: item });
  });
  return newData;
};

const getCommunityChannel = async (id) => {
  logger.info(`CMS Service ->getCommunityChannel:: ${rTracer.id()}`);
  const data = await CommunityChannel.find().lean();
  const newData = [];
  data.map((item) => {
    const id = item._id;
    delete item._id;
    newData.push({ _id: id, attributes: item });
  });
  return newData;
};

const getCommunityChannelType = async (id) => {
  logger.info(`CMS Service ->getCommunityChannelType:: ${rTracer.id()}`);
  const data = await CommunityChannelType.find().lean();
  const newData = [];
  data.map((item) => {
    const id = item._id;
    delete item._id;
    newData.push({ _id: id, attributes: item });
  });
  return newData;
};

const getContracts = async (id) => {
  logger.info(`CMS Service ->getContracts:: ${rTracer.id()}`);
  const data = await Contracts.find().lean();
  const newData = [];
  data.map((item) => {
    const id = item._id;
    delete item._id;
    newData.push({ _id: id, attributes: item });
  });
  return newData;
};

const getcryptoAssetChainMappings = async (id) => {
  logger.info(`CMS Service ->getcryptoAssetChainMappings:: ${rTracer.id()}`);
  const data = await Contracts.find().lean();
  const newData = [];
  data.map((item) => {
    const id = item._id;
    delete item._id;
    newData.push({ _id: id, attributes: item });
  });
  return newData;
};

const getInterestForms = async (id) => {
  logger.info(`CMS Service ->getInterestForms:: ${rTracer.id()}`);
  const data = await InterestForms.find().lean();
  const newData = [];
  data.map((item) => {
    const id = item._id;
    delete item._id;
    newData.push({ _id: id, attributes: item });
  });
  return newData;
};

const getInvitationCode = async (id) => {
  logger.info(`CMS Service ->getInvitationCode:: ${rTracer.id()}`);
  const data = await InvitationCode.find().lean();
  const newData = [];
  data.map((item) => {
    const id = item._id;
    delete item._id;
    newData.push({ _id: id, attributes: item });
  });
  return newData;
};

const getJobOpenings = async (id) => {
  logger.info(`CMS Service ->getJobOpenings:: ${rTracer.id()}`);
  const data = await JobOpenings.find().lean();
  const newData = [];
  data.map((item) => {
    const id = item._id;
    delete item._id;
    newData.push({ _id: id, attributes: item });
  });
  return newData;
};

const getLegals = async (req) => {
  logger.info(`CMS Service ->getLegals:: ${rTracer.id()}`);
  const filters = {}
  const url = req.originalUrl;
  const regex = /(?<=filters\[key\]\[\$eq\]=)[^&]+/;;
  const match = url.match(regex)
  if (match) {
    filters.key = match[0]
  }
  const data = await Legals.find(filters).lean();
  const newData = [];
  data.map((item) => {
    const id = item._id;
    delete item._id;
    newData.push({ _id: id, attributes: item });
  });
  return newData;
};

const getMessagingTemplatesParameter = async (id) => {
  logger.info(`CMS Service ->getLegals:: ${rTracer.id()}`);
  const data = await Legals.find().lean();
  const newData = [];
  data.map((item) => {
    const id = item._id;
    delete item._id;
    newData.push({ _id: id, attributes: item });
  });
  return newData;
};

const getMintingInputs = async (id) => {
  logger.info(`CMS Service ->getMintingInputs:: ${rTracer.id()}`);
  const data = await Legals.find().lean();
  const newData = [];
  data.map((item) => {
    const id = item._id;
    delete item._id;
    newData.push({ _id: id, attributes: item });
  });
  return newData;
};

const getMintingOutputs = async (id) => {
  logger.info(`CMS Service ->getMintingOutputs :: ${rTracer.id()}`);
  const data = await Legals.find().lean();
  const newData = [];
  data.map((item) => {
    const id = item._id;
    delete item._id;
    newData.push({ _id: id, attributes: item });
  });
  return newData;
};

const getMintingTiers = async (id) => {
  logger.info(`CMS Service ->getMintingTiers :: ${rTracer.id()}`);
  const data = await Legals.find().lean();
  const newData = [];
  data.map((item) => {
    const id = item._id;
    delete item._id;
    newData.push({ _id: id, attributes: item });
  });
  return newData;
};

const getPaymentGeography = async (id) => {
  logger.info(`CMS Service ->getPaymentGeography :: ${rTracer.id()}`);
  const data = await Legals.find().lean();
  const newData = [];
  data.map((item) => {
    const id = item._id;
    delete item._id;
    newData.push({ _id: id, attributes: item });
  });
  return newData;
};

const getPaymentOptions = async (id) => {
  logger.info(`CMS Service ->getPaymentOptions  :: ${rTracer.id()}`);
  const data = await Legals.find().lean();
  const newData = [];
  data.map((item) => {
    const id = item._id;
    delete item._id;
    newData.push({ _id: id, attributes: item });
  });
  return newData;
};

const getReferralCodes = async (id) => {
  logger.info(`CMS Service -> getReferralCodes :: ${rTracer.id()}`);
  const data = await Legals.find().lean();
  const newData = [];
  data.map((item) => {
    const id = item._id;
    delete item._id;
    newData.push({ _id: id, attributes: item });
  });
  return newData;
};

const getTerms = async (req) => {
  logger.info(`CMS Service -> getTerms:: ${rTracer.id()}`);
  const filters = {}
  const url = req.originalUrl;
  const regex = /(?<=filters\[key\]\[\$eq\]=)[^&]+/;;
  const match = url.match(regex)
  if (match) {
    filters.key = match[0]
  }
  const data = await Legals.find(filters).lean();
  const newData = [];
  data.map((item) => {
    const id = item._id;
    delete item._id;
    newData.push({ _id: id, attributes: item });
  });
  return newData;
};

const getEmailSmsTemplates = async (id) => {
  logger.info(`CMS Service -> getEmailSmsTemplates:: ${rTracer.id()}`);
  const data = await EmailSmsTemplates.find().lean();
  return data;
};

module.exports = {
  getFaqCategories,
  getFaqsQuestions,
  getAboutUs,
  getArtistApplications,
  getArtists,
  getAllArtist,
  getFantigerVideos,
  getPressReleases,
  getArtistAssets,
  gethistoricalCalculator,
  getfantigerLeadership,
  getfrontendConfigs,
  getStreamingStats,
  getTierPrivilege,
  createTierPrivilege,
  updateTierPrivilege,
  deleteTierPrivilege,
  getActivityEarnCoins,
  getArtistTopSongs,
  getinfluencerApplications,
  getMessagingTemplates,
  getAppConfigs,
  getAssetAttributes,
  getBlockChains,
  getCommunity,
  getCommunityCategory,
  getCommunityChannel,
  getCommunityChannelType,
  getContracts,
  getcryptoAssetChainMappings,
  getInterestForms,
  getInvitationCode,
  getJobOpenings,
  getLegals,
  getMessagingTemplatesParameter,
  getMintingInputs,
  getMintingOutputs,
  getMintingTiers,
  getPaymentGeography,
  getPaymentOptions,
  getReferralCodes,
  getTerms,
  getEmailSmsTemplates,
  createArtists,
  updateArtists,
  deleteArtists,
  createArtistTopSongs,
  updateArtistTopSongs,
  deleteArtistTopSongs,
  createArtistAssets,
  updateArtistAssets,
  deleteArtistAssets,
};
