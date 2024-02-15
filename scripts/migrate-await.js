const fs = require("fs");
const path = require("path");
const mongoose = require("mongoose");

const MONGODB_URI = "mongoUrl";

async function uploadData() {
  try {
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useFindAndModify: false,
    });
    // const dataDir = "/Users/uchitkumar/Desktop/cms-service/strapi-json-data"; // Path to directory containing JSON files

    // Get a list of JSON files in the data directory
    const files = fs
      .readdirSync(dataDir)
      .filter((file) => path.extname(file) === ".json");

    // Iterate over each file and insert its data into a MongoDB collection
    for (const file of files) {
      const filePath = path.join(dataDir, file);
      const data = JSON.parse(fs.readFileSync(filePath));

      // Get the name of the collection from the JSON data
      const collectionName = Object.keys(data)[0];

      const CollectionModel = mongoose.model(
        `cms_${collectionName}`,
        new mongoose.Schema({}, { strict: false })
      );

      // Insert the data into the collection
      const result = await CollectionModel.insertMany(data[collectionName]);

      console.log(
        `Data from ${file} inserted successfully into ${collectionName} collection:`,
        result
      );
    }
  } catch (err) {
    console.error("Error uploading data:", err);
  } finally {
    mongoose.connection.close();
  }
}

uploadData();
