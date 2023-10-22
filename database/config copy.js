'use strict';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const dotenv = require('dotenv');
const { firebaseConfig } = require('./config');

dotenv.config();

const {
    API_KEY,
    AUTH_DOMAIN,
    DATABASE_URL,
    STORAGE_BUCKET,
    MESSAGING_SENDER_ID,
    APP_ID
} = process.env;


firebaseConfig = {
    apiKey:API_KEY,
    authDomain:AUTH_DOMAIN,
    databaseURL:DATABASE_URL,
    projectId:PROJECT_ID,
    storageBucket:STORAGE_BUCKET,
    messagingSenderId:MESSAGING_SENDER_ID,
    appId:APP_ID
}

console.log(firebaseConfig.apiKey)
console.log(firebaseConfig.authDomain)
console.log(firebaseConfig.databaseURL)
console.log(firebaseConfig.projectId)
console.log(firebaseConfig.storageBucket)
console.log(firebaseConfig.messagingSenderId)
console.log(firebaseConfig.appId)