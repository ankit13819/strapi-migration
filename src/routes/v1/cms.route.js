const express = require("express");
const { cmsController } = require("../../controllers");
const validate = require("../../middlewares/validate");
const { VerifyUser } = require("../../middlewares/api.middleware");
const { cmsValidation } = require("../../validations");
const router = express.Router();

router.route("/faq-questions").get(cmsController.getFaqsQuestions);

router.route("/about-uses").get(cmsController.getAboutUs);

router.route("/artist-applications").get(cmsController.getArtistApplications);

router.route("/faq-categories").get(cmsController.getFaqCategories);

router
  .route("/artists")
  .get(cmsController.getArtists)
  .post(cmsController.createArtists);

router
  .route("/artists/:id")
  .patch(cmsController.updateArtists)
  .delete(cmsController.deleteArtists);

router.route("/faq-categories").get(cmsController.getFaqCategories);

router
  .route("/influencer-applications")
  .get(cmsController.getinfluencerApplications);

router.route("/fantiger-videos").get(cmsController.getFantigerVideos);

router.route("/get-all-artists").get(cmsController.getAllArtist);

router.route("/press-releases").get(cmsController.getPressReleases);

router
  .route("/artist-assets")
  .get(cmsController.getArtistAssets)
  .post(cmsController.createArtistAssets);

router
  .route("/artist-assets/:id")
  .patch(cmsController.updateArtistAssets)
  .delete(cmsController.deleteArtistAssets);

router
  .route("/historical-calculators")
  .get(cmsController.gethistoricalCalculator);

router.route("/app-configs").get(cmsController.getAppConfigs);

router.route("/fan-tiger-leaderships").get(cmsController.getfantigerLeadership);

router.route("/frontend-configs").get(cmsController.getfrontendConfigs);

router.route("/streaming-stats").get(cmsController.getStreamingStats);

router
  .route("/tier-privileges")
  .get(cmsController.getTierPrivilege)
  .post(cmsController.createTierPrivilege);

router
  .route("/tier-privileges/:id")
  .patch(cmsController.updateTierPrivilege)
  .delete(cmsController.deleteTierPrivilege);

router
  .route("/artist-top-songs")
  .get(cmsController.getArtistTopSongs)
  .post(cmsController.createArtistTopSongs);

router
  .route("/artist-top-songs/:id")
  .patch(cmsController.updateArtistTopSongs)
  .delete(cmsController.deleteArtistTopSongs);

router.route("/activity-earn-coins").get(cmsController.getActivityEarnCoins);

router.route("/messaging-templates").get(cmsController.getMessagingTemplates);

router.route("/asset-attributes").get(cmsController.getAssetAttributes);

router.route("/blockchains").get(cmsController.getBlockChains);

router.route("/communities").get(cmsController.getCommunity);

router.route("/community-categories").get(cmsController.getCommunityCategory);

router.route("/community-channels").get(cmsController.getCommunityChannel);

router.route("/contracts").get(cmsController.getContracts);

router
  .route("/community-channel-types")
  .get(cmsController.getCommunityChannelType);

router
  .route("/crypto-asset-chain-mappings")
  .get(cmsController.getcryptoAssetChainMappings);

router.route("/interest-forms").get(cmsController.getInterestForms);

router.route("/invitation-codes").get(cmsController.getInterestForms);

router.route("/job-openings").get(cmsController.getJobOpenings);

router.route("/legals").get(cmsController.getLegals);

router.route("/minting-inputs").get(cmsController.getMintingInputs);

router
  .route("/messaging-template-parameters")
  .get(cmsController.getMessagingTemplatesParameter);

router.route("/minting-outputs").get(cmsController.getMintingOutputs);

router.route("/minting-tiers").get(cmsController.getMintingTiers);

router.route("/payment-geographies").get(cmsController.getPaymentGeography);

router.route("/payment-options").get(cmsController.getPaymentOptions);

router.route("/referral-codes").get(cmsController.getReferralCodes);

router.route("/terms").get(cmsController.getTerms);

router.route("/email-sms").get(cmsController.getEmailSmsTemplates);

router.route("/generic/:collectionName").get(cmsController.getGeneric);

router.route("/referral-codes").get(cmsController.getReferralCodes);

router.route("/generic/:collectionName").get(cmsController.getGeneric);

module.exports = router;
