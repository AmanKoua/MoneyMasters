'use strict';
const dotenv = require('dotenv');

dotenv.config();

const {
    TYPE,
    PROJECT_ID,
    PRIVATE_KEY_ID,
    PRIVATE_KEY,
    CLIENT_EMAIL,
    CLIENT_ID,
    AUTH_URI,
    TOKEN_URI,
    AUTH_PROVIDER_X509_CERT_URL,
    CLIENT_X509_CERT_URL,
    API_KEY,
    AUTH_DOMAIN,
    DATABASE_URL,
    STORAGE_BUCKET,
    MESSAGING_SENDER_ID,
    APP_ID
} = process.env;

module.exports = {
    serviceAccount: {
        type: TYPE,
        projectId :PROJECT_ID,
        privateKeyId: PRIVATE_KEY_ID,
        privateKey: PRIVATE_KEY,
        clientEmail: CLIENT_EMAIL,
        clientID: CLIENT_ID,
        authURI: AUTH_URI,
        tokenURI: TOKEN_URI,
        authProviderCertURL: AUTH_PROVIDER_X509_CERT_URL,
        clientCertURL: CLIENT_X509_CERT_URL,
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