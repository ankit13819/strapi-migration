const httpStatus = require("http-status");
const logger = require("../config/logger");
const catchAsync = require("../utils/catchAsync");
const collectionMapping = require("../utils/collectionMapping");
const cmsService = require("../services/cms.service");
const rTracer = require("cls-rtracer");
const mongoose = require("mongoose");

const getAboutUs = catchAsync(async (req, res) => {
  logger.info(`CMS Controller -> getAboutUs :: ${rTracer.id()}`);
  try {
    const data = await cmsService.getAboutUs({});
    res
      .status(httpStatus.OK)
      .send({ code: httpStatus.OK, message: "success", data: data });
  } catch (error) {
    logger.info(
      `Exception :: CMS Controller -> getAboutUs -> ${error.message
      } :: ${rTracer.id()}`
    );
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).send({
      code: httpStatus.INTERNAL_SERVER_ERROR,
      message: "Internal Server Error",
      data: {},
    });
  }
});

const getFaqsQuestions = catchAsync(async (req, res) => {
  logger.info(`CMS Controller -> getFaqsQuestions :: ${rTracer.id()}`);

  try {
    const data = await cmsService.getFaqsQuestions(req);
    res
      .status(httpStatus.OK)
      .send({ code: httpStatus.OK, message: "success", data: data });
  } catch (error) {
    logger.info(
      `Exception :: CMS Controller -> getFaqsQuestions -> ${error.message
      } :: ${rTracer.id()}`
    );
    return {};
  }
});

const getFaqCategories = catchAsync(async (req, res) => {
  logger.info(`CMS Controller ->  getFaqCategories :: ${rTracer.id()}`);

  try {
    const data = await cmsService.getFaqCategories(req);
    res
      .status(httpStatus.OK)
      .send({ code: httpStatus.OK, message: "success", data: data });
  } catch (error) {
    logger.info(
      `Exception :: CMS Controller -> getFaqsCategories -> ${error.message
      } :: ${rTracer.id()}`
    );
    return {};
  }
});

const getArtistApplications = catchAsync(async (req, res) => {
  logger.info(`CMS Controller -> getArtistApplications :: ${rTracer.id()}`);

  try {
    const data = await cmsService.getArtistApplications({});
    res
      .status(httpStatus.OK)
      .send({ code: httpStatus.OK, message: "success", data: data });
  } catch (error) {
    logger.info(
      `Exception :: CMS Controller -> getArtistApplications -> ${error.message
      } :: ${rTracer.id()}`
    );
    return {};
  }
});
const getArtists = catchAsync(async (req, res) => {
  logger.info(`CMS Controller -> getArtists :: ${rTracer.id()}`);

  try {
    const data = await cmsService.getArtists({});
    res
      .status(httpStatus.OK)
      .send({ code: httpStatus.OK, message: "success", data: data });
  } catch (error) {
    logger.info(
      `Exception :: CMS Controller -> getArtists -> ${error.message
      } :: ${rTracer.id()}`
    );
    return {};
  }
});

//This is POST API for Create Artists
const createArtists = catchAsync(async (req, res) => {
  logger.info(`CMS Controller -> createArtists :: ${rTracer.id()}`);
  try {
    const data = await cmsService.createArtists(req.body);
    res
      .status(httpStatus.OK)
      .send({ code: httpStatus.OK, message: "success", data: data });
  } catch (error) {
    logger.info(
      `Exception :: CMS Controller -> createArtists -> ${error.message
      } :: ${rTracer.id()}`
    );
    return {};
  }
});

//This is PATCH API for Update db
const updateArtists = catchAsync(async (req, res) => {
  logger.info(`CMS Controller ->  updateArtists :: ${rTracer.id()}`);
  try {
    const _id = req.params.id;
    const data = req.body;
    const updatedata = await cmsService.updateArtists(data, _id);
    res
      .status(httpStatus.OK)
      .send({ code: httpStatus.OK, message: "success", data: updatedata });
  } catch (error) {
    logger.info(
      `Exception :: CMS Controller -> updateArtists -> ${error.message
      } :: ${rTracer.id()}`
    );
    return {};
  }
});

//Delete db data from delete API
const deleteArtists = catchAsync(async (req, res) => {
  logger.info(`CMS Controller ->  deleteArtists :: ${rTracer.id()}`);
  try {
    const _id = req.params.id;
    const updatedata = await cmsService.deleteArtists(_id);
    res
      .status(httpStatus.OK)
      .send({ code: httpStatus.OK, message: "success", data: updatedata });
  } catch (error) {
    logger.info(
      `Exception :: CMS Controller -> deleteArtists -> ${error.message
      } :: ${rTracer.id()}`
    );
    return {};
  }
});

const getFantigerVideos = catchAsync(async (req, res) => {
  logger.info(`CMS Controller -> getFantigerVideos :: ${rTracer.id()}`);

  try {
    const data = await cmsService.getFantigerVideos({});
    res
      .status(httpStatus.OK)
      .send({ code: httpStatus.OK, message: "success", data: data });
  } catch (error) {
    logger.info(
      `Exception :: CMS Controller -> getFantigerVideos -> ${error.message
      } :: ${rTracer.id()}`
    );
    return {};
  }
});

const getAllArtist = catchAsync(async (req, res) => {
  logger.info(`CMS Controller -> getAllArtist :: ${rTracer.id()}`);

  try {
    const data = await cmsService.getAllArtist();
    res
      .status(httpStatus.OK)
      .send({ code: httpStatus.OK, message: "success", data: data });
  } catch (error) {
    logger.info(
      `Exception :: CMS Controller -> getAllArtist -> ${error.message
      } :: ${rTracer.id()}`
    );
    return {};
  }
});

const getActivityEarnCoins = catchAsync(async (req, res) => {
  logger.info(`CMS Controller -> getActivityEarnCoins :: ${rTracer.id()}`);

  try {
    const data = await cmsService.getActivityEarnCoins();
    res
      .status(httpStatus.OK)
      .send({ code: httpStatus.OK, message: "success", data: data });
  } catch (error) {
    logger.info(
      `Exception :: CMS Controller -> getActivityEarnCoins -> ${error.message
      } :: ${rTracer.id()}`
    );
    return {};
  }
});

const getPressReleases = catchAsync(async (req, res) => {
  logger.info(`CMS Controller -> getPressReleases :: ${rTracer.id()}`);

  try {
    const data = await cmsService.getPressReleases();
    res
      .status(httpStatus.OK)
      .send({ code: httpStatus.OK, message: "success", data: data });
  } catch (error) {
    logger.info(
      `Exception :: CMS Controller -> getPressReleases -> ${error.message
      } :: ${rTracer.id()}`
    );
    return {};
  }
});

const getArtistAssets = catchAsync(async (req, res) => {
  logger.info(`CMS Controller -> getArtistAssets :: ${rTracer.id()}`);
  try {
    const data = await cmsService.getArtistAssets(req);
    res
      .status(httpStatus.OK)
      .send({ code: httpStatus.OK, message: "success", data: data });
  } catch (error) {
    logger.info(
      `Exception :: CMS Controller -> getArtistAssets-> ${error.message
      } :: ${rTracer.id()}`
    );
    return {};
  }
});

const createArtistAssets = catchAsync(async (req, res) => {
  logger.info(`CMS Controller -> createArtistAssets :: ${rTracer.id()}`);
  try {
    const data = await cmsService.createArtistAssets(req.body);
    res
      .status(httpStatus.OK)
      .send({ code: httpStatus.OK, message: "success", data: data });

    // return data;
  } catch (error) {
    logger.info(
      `Exception :: CMS Controller -> createArtistAssets-> ${error.message
      } :: ${rTracer.id()}`
    );
    return true;
  }
});

const updateArtistAssets = catchAsync(async (req, res) => {
  logger.info(`CMS Controller -> updateArtistAssets :: ${rTracer.id()}`);
  try {
    const _id = req.params.id;
    const data = await cmsService.updateArtistAssets(req.body, _id);
    res
      .status(httpStatus.OK)
      .send({ code: httpStatus.OK, message: "success", data: data });

    // return data;
  } catch (error) {
    logger.info(
      `Exception :: CMS Controller -> updateArtistAssets-> ${error.message
      } :: ${rTracer.id()}`
    );
    return true;
  }
});

const deleteArtistAssets = catchAsync(async (req, res) => {
  logger.info(`CMS Controller -> deleteArtistAssets :: ${rTracer.id()}`);
  try {
    const _id = req.params.id;
    const data = await cmsService.deleteArtistAssets(_id);
    res
      .status(httpStatus.OK)
      .send({ code: httpStatus.OK, message: "success", data: data });

    // return data;
  } catch (error) {
    logger.info(
      `Exception :: CMS Controller -> deleteArtistAssets-> ${error.message
      } :: ${rTracer.id()}`
    );
    return true;
  }
});

const gethistoricalCalculator = catchAsync(async (req, res) => {
  logger.info(`CMS Controller -> gethistoricalCalculator :: ${rTracer.id()}`);
  try {
    const data = await cmsService.gethistoricalCalculator(req);
    res
      .status(httpStatus.OK)
      .send({ code: httpStatus.OK, message: "success", data: data });
  } catch (error) {
    logger.info(
      `Exception :: CMS Controller -> gethistoricalCalculator-> ${error.message
      } :: ${rTracer.id()}`
    );
    return {};
  }
});

const getfantigerLeadership = catchAsync(async (req, res) => {
  logger.info(`CMS Controller -> getfantigerLeadership :: ${rTracer.id()}`);

  try {
    const data = await cmsService.getfantigerLeadership();
    res
      .status(httpStatus.OK)
      .send({ code: httpStatus.OK, message: "success", data: data });
  } catch (error) {
    logger.info(
      `Exception :: CMS Controller -> getfantigerLeadership-> ${error.message
      } :: ${rTracer.id()}`
    );
    return {};
  }
});

const getfrontendConfigs = catchAsync(async (req, res) => {
  logger.info(`CMS Controller -> getfrontendConfigs :: ${rTracer.id()}`);

  try {
    const data = await cmsService.getfrontendConfigs(req);
    res
      .status(httpStatus.OK)
      .send({ code: httpStatus.OK, message: "success", data: data });
  } catch (error) {
    logger.info(
      `Exception :: CMS Controller -> getfrontendConfigs-> ${error.message
      } :: ${rTracer.id()}`
    );
    return {};
  }
});

const getStreamingStats = catchAsync(async (req, res) => {
  logger.info(`CMS Controller -> getStreamingStats :: ${rTracer.id()}`);

  try {
    const data = await cmsService.getStreamingStats(req.query);
    res
      .status(httpStatus.OK)
      .send({ code: httpStatus.OK, message: "success", data: data });
  } catch (error) {
    logger.info(
      `Exception :: CMS Controller -> getStreamingStats-> ${error.message
      } :: ${rTracer.id()}`
    );
    return {};
  }
});

const getTierPrivilege = catchAsync(async (req, res) => {
  logger.info(`CMS Controller -> getTierPrivilege :: ${rTracer.id()}`);
  try {
    const data = await cmsService.getTierPrivilege(req);
    res
      .status(httpStatus.OK)
      .send({ code: httpStatus.OK, message: "success", data: data });
  } catch (error) {
    logger.info(
      `Exception :: CMS Controller -> getTierPrivilege-> ${error.message
      } :: ${rTracer.id()}`
    );
    return {};
  }
});

const createTierPrivilege = catchAsync(async (req, res) => {
  logger.info(`CMS Controller -> createTierPrivilege :: ${rTracer.id()}`);
  try {
    const data = await cmsService.createTierPrivilege(req.body);
    res
      .status(httpStatus.OK)
      .send({ code: httpStatus.OK, message: "success", data: data });
  } catch (error) {
    logger.info(
      `Exception :: CMS Controller -> createTierPrivilege-> ${error.message
      } :: ${rTracer.id()}`
    );
    return true;
  }
});

const updateTierPrivilege = catchAsync(async (req, res) => {
  logger.info(`CMS Controller -> updateTierPrivilege :: ${rTracer.id()}`);
  try {
    const _id = req.params.id;
    const data = await cmsService.updateTierPrivilege(req.body, _id);
    res
      .status(httpStatus.OK)
      .send({ code: httpStatus.OK, message: "success", data: data });
  } catch (error) {
    logger.info(
      `Exception :: CMS Controller -> updateTierPrivilege-> ${error.message
      } :: ${rTracer.id()}`
    );
    return true;
  }
});

const deleteTierPrivilege = catchAsync(async (req, res) => {
  logger.info(`CMS Controller -> deleteTierPrivilege :: ${rTracer.id()}`);
  try {
    const _id = req.params.id;
    const data = await cmsService.deleteTierPrivilege(_id);
    res
      .status(httpStatus.OK)
      .send({ code: httpStatus.OK, message: "success", data: data });
  } catch (error) {
    logger.info(
      `Exception :: CMS Controller -> deleteTierPrivilege-> ${error.message
      } :: ${rTracer.id()}`
    );
    return true;
  }
});

const getArtistTopSongs = catchAsync(async (req, res) => {
  logger.info(`CMS Controller -> getArtistTopSongs :: ${rTracer.id()}`);

  try {
    const data = await cmsService.getArtistTopSongs();
    res
      .status(httpStatus.OK)
      .send({ code: httpStatus.OK, message: "success", data: data });
  } catch (error) {
    logger.info(
      `Exception :: CMS Controller -> getArtistTopSongs-> ${error.message
      } :: ${rTracer.id()}`
    );
    return {};
  }
});

//Create POST API for ArtistTopSongs
const createArtistTopSongs = catchAsync(async (req, res) => {
  logger.info(`CMS Controller -> createArtistTopSongs :: ${rTracer.id()}`);

  try {
    const data = await cmsService.createArtistTopSongs(req.body);
    res
      .status(httpStatus.OK)
      .send({ code: httpStatus.OK, message: "success", data: data });
  } catch (error) {
    logger.info(
      `Exception :: CMS Controller -> createArtistTopSongs-> ${error.message
      } :: ${rTracer.id()}`
    );
    return {};
  }
});

//Update API for updateArtistTopSongs

const updateArtistTopSongs = catchAsync(async (req, res) => {
  logger.info(`CMS Controller ->  updateArtists :: ${rTracer.id()}`);
  try {
    const _id = req.params.id;
    const data = req.body;
    const updatedata = await cmsService.updateArtistTopSongs(data, _id);
    res
      .status(httpStatus.OK)
      .send({ code: httpStatus.OK, message: "success", data: updatedata });
  } catch (error) {
    logger.info(
      `Exception :: CMS Controller -> updateArtistTopSongs -> ${error.message
      } :: ${rTracer.id()}`
    );
    return {};
  }
});

//Delete db data from delete API
const deleteArtistTopSongs = catchAsync(async (req, res) => {
  logger.info(`CMS Controller ->  deleteArtistTopSongs :: ${rTracer.id()}`);
  try {
    const _id = req.params.id;
    const updatedata = await cmsService.deleteArtistTopSongs(_id);
    res
      .status(httpStatus.OK)
      .send({ code: httpStatus.OK, message: "success", data: updatedata });
  } catch (error) {
    logger.info(
      `Exception :: CMS Controller -> deleteArtistTopSongs -> ${error.message
      } :: ${rTracer.id()}`
    );
    return {};
  }
});

const getGeneric = catchAsync(async (req, res) => {
  logger.info(`CMS Controller -> getGeneric :: ${rTracer.id()}`);
  // Route to get data from any collection in MongoDB
  let collectionName = req.params.collectionName;
  const pageSize = Number(req.query.pageSize) || 10;
  const pageNum = Number(req.query.page) || 0;
  const filter = req.query.filter ? JSON.parse(req.query.filter) : {};

  if (!collectionName) {
    return res.status(400).send("collectionName is required");
  } else {
    collectionName = collectionMapping[collectionName];
  }
  try {
    const db = mongoose.connection.db;
    const data = await db
      .collection(collectionName)
      .find(filter)
      .skip(pageNum)
      .limit(pageSize)
      .toArray();

    const newData = [];
    data.map((item) => {
      const id = item._id;
      delete item._id;
      newData.push({ _id: id, attributes: item });
    });
    res.json(newData);
    // Get data from collection with pagination and filtering
    // const Collection = mongoose.model(collectionName, collectionSchema);
    // const data = await Collection.find(filter)
    //   .skip((pageNum - 1) * pageSize)
    //   .limit(pageSize)
    //   .exec();

    // // Return data as API response
    // res.json(data);
  } catch (err) {
    res.status(500).send("Error getting data from MongoDB");
  }
});

const getinfluencerApplications = catchAsync(async (req, res) => {
  logger.info(`CMS Controller -> getinfluencerApplications :: ${rTracer.id()}`);

  try {
    const data = await cmsService.getinfluencerApplications();
    res
      .status(httpStatus.OK)
      .send({ code: httpStatus.OK, message: "success", data: data });
  } catch (error) {
    logger.info(
      `Exception :: CMS Controller -> getinfluencerApplications-> ${error.message
      } :: ${rTracer.id()}`
    );
    return {};
  }
});

const getMessagingTemplates = catchAsync(async (req, res) => {
  logger.info(`CMS Controller -> getMessagingTemplates :: ${rTracer.id()}`);

  try {
    const data = await cmsService.getMessagingTemplates();
    res
      .status(httpStatus.OK)
      .send({ code: httpStatus.OK, message: "success", data: data });
  } catch (error) {
    logger.info(
      `Exception :: CMS Controller -> getMessagingTemplates-> ${error.message
      } :: ${rTracer.id()}`
    );
    return {};
  }
});

const getAppConfigs = catchAsync(async (req, res) => {
  logger.info(`CMS Controller -> getAppConfigs :: ${rTracer.id()}`);

  try {
    const data = await cmsService.getAppConfigs();
    res
      .status(httpStatus.OK)
      .send({ code: httpStatus.OK, message: "success", data: data });
  } catch (error) {
    logger.info(
      `Exception :: CMS Controller -> getAppConfigs-> ${error.message
      } :: ${rTracer.id()}`
    );
    return {};
  }
});

const getAssetAttributes = catchAsync(async (req, res) => {
  logger.info(`CMS Controller -> getAssetAttributes :: ${rTracer.id()}`);

  try {
    const data = await cmsService.getAssetAttributes();
    res
      .status(httpStatus.OK)
      .send({ code: httpStatus.OK, message: "success", data: data });
  } catch (error) {
    logger.info(
      `Exception :: CMS Controller -> getAssetAttributes-> ${error.message
      } :: ${rTracer.id()}`
    );
    return {};
  }
});

const getBlockChains = catchAsync(async (req, res) => {
  logger.info(`CMS Controller -> getBlockChains :: ${rTracer.id()}`);

  try {
    const data = await cmsService.getBlockChains();
    res
      .status(httpStatus.OK)
      .send({ code: httpStatus.OK, message: "success", data: data });
  } catch (error) {
    logger.info(
      `Exception :: CMS Controller -> getBlockChains-> ${error.message
      } :: ${rTracer.id()}`
    );
    return {};
  }
});

const getCommunity = catchAsync(async (req, res) => {
  logger.info(`CMS Controller -> getCommunity :: ${rTracer.id()}`);

  try {
    const data = await cmsService.getCommunity();
    res
      .status(httpStatus.OK)
      .send({ code: httpStatus.OK, message: "success", data: data });
  } catch (error) {
    logger.info(
      `Exception :: CMS Controller -> getCommunity-> ${error.message
      } :: ${rTracer.id()}`
    );
    return {};
  }
});

const getCommunityCategory = catchAsync(async (req, res) => {
  logger.info(`CMS Controller ->  getCommunityCategory :: ${rTracer.id()}`);

  try {
    const data = await cmsService.getCommunityCategory();
    res
      .status(httpStatus.OK)
      .send({ code: httpStatus.OK, message: "success", data: data });
  } catch (error) {
    logger.info(
      `Exception :: CMS Controller ->  getCommunityCategory-> ${error.message
      } :: ${rTracer.id()}`
    );
    return {};
  }
});

const getCommunityChannel = catchAsync(async (req, res) => {
  logger.info(`CMS Controller -> getCommunityChannel :: ${rTracer.id()}`);

  try {
    const data = await cmsService.getCommunityChannel();
    res
      .status(httpStatus.OK)
      .send({ code: httpStatus.OK, message: "success", data: data });
  } catch (error) {
    logger.info(
      `Exception :: CMS Controller ->  getCommunityChannel-> ${error.message
      } :: ${rTracer.id()}`
    );
    return {};
  }
});

const getCommunityChannelType = catchAsync(async (req, res) => {
  logger.info(`CMS Controller ->getCommunityChannelType :: ${rTracer.id()}`);

  try {
    const data = await cmsService.getCommunityChannelType();
    res
      .status(httpStatus.OK)
      .send({ code: httpStatus.OK, message: "success", data: data });
  } catch (error) {
    logger.info(
      `Exception :: CMS Controller ->  getCommunityChannelType-> ${error.message
      } :: ${rTracer.id()}`
    );
    return {};
  }
});

const getContracts = catchAsync(async (req, res) => {
  logger.info(`CMS Controller ->getContracts :: ${rTracer.id()}`);

  try {
    const data = await cmsService.getContracts();
    res
      .status(httpStatus.OK)
      .send({ code: httpStatus.OK, message: "success", data: data });
  } catch (error) {
    logger.info(
      `Exception :: CMS Controller ->  getContracts-> ${error.message
      } :: ${rTracer.id()}`
    );
    return {};
  }
});

const getcryptoAssetChainMappings = catchAsync(async (req, res) => {
  logger.info(
    `CMS Controller ->getcryptoAssetChainMappings :: ${rTracer.id()}`
  );

  try {
    const data = await cmsService.getcryptoAssetChainMappings();
    res
      .status(httpStatus.OK)
      .send({ code: httpStatus.OK, message: "success", data: data });
  } catch (error) {
    logger.info(
      `Exception :: CMS Controller ->  getContracts-> ${error.message
      } :: ${rTracer.id()}`
    );
    return {};
  }
});

const getInterestForms = catchAsync(async (req, res) => {
  logger.info(`CMS Controller ->getInterestForms :: ${rTracer.id()}`);

  try {
    const data = await cmsService.getInterestForms();
    res
      .status(httpStatus.OK)
      .send({ code: httpStatus.OK, message: "success", data: data });
  } catch (error) {
    logger.info(
      `Exception :: CMS Controller ->  getInterestForms-> ${error.message
      } :: ${rTracer.id()}`
    );
    return {};
  }
});

const getInvitationCode = catchAsync(async (req, res) => {
  logger.info(`CMS Controller ->getInvitationCode  :: ${rTracer.id()}`);

  try {
    const data = await cmsService.getInvitationCode();
    res
      .status(httpStatus.OK)
      .send({ code: httpStatus.OK, message: "success", data: data });
  } catch (error) {
    logger.info(
      `Exception :: CMS Controller ->getInvitationCode -> ${error.message
      } :: ${rTracer.id()}`
    );
    return {};
  }
});

const getJobOpenings = catchAsync(async (req, res) => {
  logger.info(`CMS Controller ->getJobOpenings  :: ${rTracer.id()}`);

  try {
    const data = await cmsService.getJobOpenings();
    res
      .status(httpStatus.OK)
      .send({ code: httpStatus.OK, message: "success", data: data });
  } catch (error) {
    logger.info(
      `Exception :: CMS Controller ->getJobOpenings -> ${error.message
      } :: ${rTracer.id()}`
    );
    return {};
  }
});

const getLegals = catchAsync(async (req, res) => {
  logger.info(`CMS Controller ->getLegals :: ${rTracer.id()}`);

  try {
    const data = await cmsService.getLegals(req);
    res
      .status(httpStatus.OK)
      .send({ code: httpStatus.OK, message: "success", data: data });
  } catch (error) {
    logger.info(
      `Exception :: CMS Controller ->getLegals -> ${error.message
      } :: ${rTracer.id()}`
    );
    return {};
  }
});

const getMessagingTemplatesParameter = catchAsync(async (req, res) => {
  logger.info(
    `CMS Controller ->getMessagingTemplatesParameter :: ${rTracer.id()}`
  );

  try {
    const data = await cmsService.getMessagingTemplatesParameter();
    res
      .status(httpStatus.OK)
      .send({ code: httpStatus.OK, message: "success", data: data });
  } catch (error) {
    logger.info(
      `Exception :: CMS Controller ->getMessagingTemplatesParameter -> ${error.message
      } :: ${rTracer.id()}`
    );
    return {};
  }
});

const getMintingInputs = catchAsync(async (req, res) => {
  logger.info(`CMS Controller ->getMintingInputs :: ${rTracer.id()}`);

  try {
    const data = await cmsService.getMintingInputs();
    res
      .status(httpStatus.OK)
      .send({ code: httpStatus.OK, message: "success", data: data });
  } catch (error) {
    logger.info(
      `Exception :: CMS Controller ->getMintingInputs -> ${error.message
      } :: ${rTracer.id()}`
    );
    return {};
  }
});

const getMintingOutputs = catchAsync(async (req, res) => {
  logger.info(`CMS Controller ->getMintingOutputs :: ${rTracer.id()}`);

  try {
    const data = await cmsService.getMintingOutputs();
    res
      .status(httpStatus.OK)
      .send({ code: httpStatus.OK, message: "success", data: data });
  } catch (error) {
    logger.info(
      `Exception :: CMS Controller ->getMintingOutputs -> ${error.message
      } :: ${rTracer.id()}`
    );
    return {};
  }
});

const getMintingTiers = catchAsync(async (req, res) => {
  logger.info(`CMS Controller ->getMintingTiers :: ${rTracer.id()}`);

  try {
    const data = await cmsService.getMintingTiers();
    res
      .status(httpStatus.OK)
      .send({ code: httpStatus.OK, message: "success", data: data });
  } catch (error) {
    logger.info(
      `Exception :: CMS Controller ->getMintingTiers -> ${error.message
      } :: ${rTracer.id()}`
    );
    return {};
  }
});

const getPaymentGeography = catchAsync(async (req, res) => {
  logger.info(`CMS Controller ->getPaymentGeography  :: ${rTracer.id()}`);

  try {
    const data = await cmsService.getPaymentGeography();
    res
      .status(httpStatus.OK)
      .send({ code: httpStatus.OK, message: "success", data: data });
  } catch (error) {
    logger.info(
      `Exception :: CMS Controller ->getPaymentGeography  -> ${error.message
      } :: ${rTracer.id()}`
    );
    return {};
  }
});

const getPaymentOptions = catchAsync(async (req, res) => {
  logger.info(`CMS Controller ->getPaymentOptions  :: ${rTracer.id()}`);

  try {
    const data = await cmsService.getPaymentOptions();
    res
      .status(httpStatus.OK)
      .send({ code: httpStatus.OK, message: "success", data: data });
  } catch (error) {
    logger.info(
      `Exception :: CMS Controller ->getPaymentOptions -> ${error.message
      } :: ${rTracer.id()}`
    );
    return {};
  }
});

const getReferralCodes = catchAsync(async (req, res) => {
  logger.info(`CMS Controller ->getReferralCodes  :: ${rTracer.id()}`);

  try {
    const data = await cmsService.getReferralCodes();
    res
      .status(httpStatus.OK)
      .send({ code: httpStatus.OK, message: "success", data: data });
  } catch (error) {
    logger.info(
      `Exception :: CMS Controller ->getReferralCodes -> ${error.message
      } :: ${rTracer.id()}`
    );
    return {};
  }
});

const getTerms = catchAsync(async (req, res) => {
  logger.info(`CMS Controller ->getTerms :: ${rTracer.id()}`);

  try {
    const data = await cmsService.getTerms(req);
    res
      .status(httpStatus.OK)
      .send({ code: httpStatus.OK, message: "success", data: data });
  } catch (error) {
    logger.info(
      `Exception :: CMS Controller ->getTerms -> ${error.message
      } :: ${rTracer.id()}`
    );
    return {};
  }
});

const getEmailSmsTemplates = catchAsync(async (req, res) => {
  logger.info(`CMS Controller ->getEmailSmsTemplates :: ${rTracer.id()}`);

  try {
    const data = await cmsService.getEmailSmsTemplates();
    res
      .status(httpStatus.OK)
      .send({ code: httpStatus.OK, message: "success", data: data });
  } catch (error) {
    logger.info(
      `Exception :: CMS Controller ->getEmailSmsTemplates -> ${error.message
      } :: ${rTracer.id()}`
    );
    return {};
  }
});

module.exports = {
  getFaqCategories,
  getFaqsQuestions,
  getAboutUs,
  getArtistApplications,
  getArtists,
  getFantigerVideos,
  getAllArtist,
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
  getGeneric,
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
