
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require('mongoose');
let db;

class MongoConfiguration{
    Initialize(){
        let dbName = 'japan_drills',
            mongoDBConnectionString = process.env.NODE_ENV !== 'localhost' ? `mongodb://admin:admin1@ds139425.mlab.com:39425/heroku_whwk8fvh` : 'mongodb://127.0.0.1/' + dbName;
        
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