
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require('mongoose');
let db;

class MongoConfiguration{
    Initialize(){
        let dbName = 'japan_drills',
        mongoDBConnectionString;
        mongoDBConnectionString = 'mongodb://127.0.0.1/' + dbName;
        mongoose.connect(mongoDBConnectionString, {
            useMongoClient: true
        });
        // Get Mongoose to use the global promise library
        mongoose.Promise = global.Promise;

        //Get the default connection
        db = mongoose.connection; 
    }

    MongoDb(){
        return db;
    }
}
exports.MongoConfiguration = new MongoConfiguration();