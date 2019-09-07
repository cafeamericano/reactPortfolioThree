// API (APPLICATION PROGRAMMING INTERFACE) FOR JSON RESPONSES //////////////////////////////////////

const express = require("express");
const router = express.Router();
const path = require("path");

//****************************************************
const dbImport = require("./databaseConfig.js");
let mongo = dbImport.mongo;
let databaseName = dbImport.databaseName;
let entriesCollection = dbImport.entriesCollection;
let MongoClient = dbImport.MongoClient;
let url = dbImport.url;
//****************************************************

//Find all entries in the collection
router.get("/hit-db", (req, res) => {
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db(databaseName);
    dbo
      .collection(entriesCollection)
      .find({})
      .toArray(function(err, result) {
        if (err) throw err;
        db.close();
        return res.json({
          data: result
        });
      });
  });
});

//Catch all
router.get("*", function(req, res) {
    res.sendFile(path.resolve(__dirname, "build", "index.html"));
  });
  
module.exports = router;
