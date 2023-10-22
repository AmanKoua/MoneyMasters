'use strict';
//const dotenv = require('dotenv');
const dotenv = require('dotenv');

dotenv.config();

var service_account = require("path/to/serviceAccountKey.json");



const {
    API_KEY,
    AUTH_DOMAIN,
    PROJECT_ID,

    STORAGE_BUCKET,

    DATABASE_URL,
    MESSAGING_SENDER_ID,
    APP_ID
} = process.env;

module.exports = {
    serviceAccount: {
        service_account
    },
    firebaseConfig: {
        apiKey:API_KEY,
        authDomain:AUTH_DOMAIN,
        databaseURL:DATABASE_URL,
        projectId:PROJECT_ID,
        storageBucket:STORAGE_BUCKET,
        messagingSenderId:MESSAGING_SENDER_ID,
        appId:APP_ID
    }
}