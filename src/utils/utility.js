/**
 * @copyright (2023-Present) ArtistFirst Technology India Pvt Ltd
 * @author Vinay Singh {vinay.singh@fantiger.com}
 * @version 1.0
 */


 const moment = require('moment');
 /**
  * Add minutes to current date
  * @param {Number} minutes
  * @returns {Date}
  */
 const addMinutesToCurrentDate = (minutes) => {
     return moment().add(minutes, 'minutes').format()
 }
 
 /**
  * Get all mentioned users in text message
  * @param {String} string
  */
  const checkUserMentionedInMessage = (string) => {
     return string.match(/\B@[a-z0-9_-]+/gi);
 };
 
 /**
  * Get word count in text message
  * @param {String} string
  */
  const getMessageWordCount = (string) => {
     return string.split(' ').length;
 };
 
 const paginator = (items, current_page, per_page_items) => {
    let page = current_page || 1,
    per_page = per_page_items || 10,
    offset = (page - 1) * per_page,
 
    paginatedItems = items.slice(offset).slice(0, per_page_items),
    total_pages = Math.ceil(items.length / per_page);
 
    return {
       page: page,
       per_page: per_page,
       pre_page: page - 1 ? page - 1 : null,
       next_page: (total_pages > page) ? page + 1 : null,
       total: items.length,
       total_pages: total_pages,
       data: paginatedItems
    };
 }
 
 /**
  * Round Off number upto specified digits
  * @param {Number} value 
  * @param {Number} decimals 
  * @returns 
  */
 const round = (value, decimals = 6) => {
    return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
 }
 
 /**
  * Generate random number based on length
  * @param {Number} length 
  */
 const generateRandomNumber = (length = 4) => {
    return Math.floor(Math.pow(10, length-1) + Math.random() * (Math.pow(10, length) - Math.pow(10, length-1) - 1));
 }
 
 /** Add delay in execution in Milli-seconds */
 const delay = millis => new Promise((resolve, reject) => {
    setTimeout(_ => resolve(), millis)
 });
 
 /**
  * Check If a string is valid url
  * @param {String} string 
  * @returns 
  */
 const isValidURL = (string) => {
    let url;
    try {
       url = new URL(string);
    } catch (_) {
       return false;  
    }
      return url.protocol === "http:" || url.protocol === "https:";
 };
 
 /**
  * Check if given timestamp is exprired 
  * on comparision with current date
  * @param {String} timestamp
  */
 const isTimestampExpired = (timestamp) => {
    const now = moment().utc().toISOString();
    return moment(now).isAfter(timestamp);
 }
 
 /**
  * Calcualte profit, loss and its percentage
  * @param {Number} costPrice 
  * @param {Number} salePrice 
  */
 const calculateProfileLoss = (costPrice, salePrice) => {
    let percent = 0;
    let amount = 0;
    let returnType = '';
    if (salePrice > costPrice) {
       amount = round((salePrice - costPrice), 3);
       percent = round(((amount / costPrice) * 100), 2)
       returnType = 'profit'
    }
 
    if (salePrice < costPrice) {
       amount = round((costPrice - salePrice), 3);
       percent = round(((amount / costPrice) * 100), 2)
       returnType = 'loss'
    }
    return {
       percent: percent,
       amount: amount,
       returnType: returnType
    }  
 }
 
 
 /**
  * Generate random string code
  * @param {Object} option
  */
  const generateRandomCode = (option) => {
    const length = option.length || 5;
    let result           = '';
     const characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
     const charactersLength = characters.length;
     for ( var i = 0; i < length; i++ ) {
         result += characters.charAt(Math.floor(Math.random() * charactersLength));
     }
 
    if(option.upperCase) {
       result = result.toUpperCase()
    }
     return result;
 }
 
 /**
    * Query for documents with pagination
    * @param {Object} [options] - Query options
    * @param {string} [options.sortBy] - Sorting criteria using the format: sortField:(desc|asc). Multiple sorting criteria should be separated by commas (,)
    * @param {number} [options.limit] - Maximum number of results per page (default = 10)
    * @param {number} [options.page] - Current page (default = 1)
    * @returns {Object}
    */
 const paginateQuery = (options) => {
    const limit = options.limit && parseInt(options.limit, 10) > 0 ? parseInt(options.limit, 10) : 10;
     const page = options.page && parseInt(options.page, 10) > 0 ? parseInt(options.page, 10) : 1;
     const skip = (page - 1) * limit;
    return {
       limit: limit,
       page: page,
       skip: skip
    }
 }
 
 const easebuzzValidateAmount = (amount) => {
    let decimalAmount =  (amount % 1) ? amount.toFixed(2) : amount.toFixed(1);
    const count = countDecimals(decimalAmount);
    if(count > 1) {
       decimalAmount = parseFloat(decimalAmount);
    }
    if(countDecimals(decimalAmount) == 0) {
       decimalAmount = `${decimalAmount}.0`
    }
    return decimalAmount;
 }	
 
 const countDecimals = function (number) {
     if(Math.floor(number.valueOf()) === number.valueOf()) return 0;
     return number.toString().split(".")[1].length || 0; 
 }
 
 /**
  * Grouping an array of objects by key
  * @param {Array} items 
  * @param {String} key 
  * @returns 
  */
 const groupByList = (items, key) => items.reduce(
     (result, item) => ({
       ...result,
       [item[key]]: [
         ...(result[item[key]] || []),
         item,
       ],
     }), 
     {},
 );
 
 const getNormalizedEmail = (email) => {
    const emailArray = email.split('@');
    let userName = emailArray[0];
    if(emailArray[1] == 'gmail.com') {
       userName = userName.split('.').join('');
       userName = userName.split('+')[0];
    }
    return `${userName}@${emailArray[1]}`;
 }
 
 module.exports = { 
     addMinutesToCurrentDate,
     checkUserMentionedInMessage,
     paginator,
    round,
    getMessageWordCount,
    generateRandomNumber,
    delay,
    isValidURL,
    isTimestampExpired,
    calculateProfileLoss,
    generateRandomCode,
    easebuzzValidateAmount,
    groupByList,
    paginateQuery,
    easebuzzValidateAmount,
    getNormalizedEmail
 }