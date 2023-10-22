
const express = require('express');
const router = express.Router();


const dotenv = require('dotenv');
//const { getFirestore, Timestamp, FieldValue, Filter } = require('firebase-admin/firestore');
const admin = require('firebase-admin')
//const { initializeApp } = require('firebase-admin/app');
//const firebase = require("firebase")
//const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');


dotenv.config();

var service_account = require("./serviceKeys.json");



const {
    API_KEY,
    AUTH_DOMAIN,
    PROJECT_ID,

    STORAGE_BUCKET,

    DATABASE_URL,
    MESSAGING_SENDER_ID,
    APP_ID
} = process.env;


//const app = admin.initializeApp(firebaseConfig);

const app = admin.initializeApp({
    credential: admin.credential.cert(service_account),
    databaseURL: "https://.firebaseio.com"
});


//const db = firebase.firestore()
const adminDb = admin.firestore()

const db = adminDb.getFirestore;

function writeDocs(){
    const citiesRef = adminDb.getFirestore.collection('cities');

    citiesRef.doc('SF').set({
        name: 'San Francisco', state: 'CA', country: 'USA',
        capital: false, population: 860000
      });
      citiesRef.doc('LA').set({
        name: 'Los Angeles', state: 'CA', country: 'USA',
        capital: false, population: 3900000
      });
      citiesRef.doc('DC').set({
        name: 'Washington, D.C.', state: null, country: 'USA',
        capital: true, population: 680000
      });
      citiesRef.doc('TOK').set({
        name: 'Tokyo', state: null, country: 'Japan',
        capital: true, population: 9000000
      });
      citiesRef.doc('BJ').set({
        name: 'Beijing', state: null, country: 'China',
        capital: true, population: 21500000
      });
}

async function getTest(){
    const cityRef = db.collection('cities').doc('SF');
    const doc = await cityRef.get();
    if (!doc.exists) {
    console.log('No such document!');
    } else {
    console.log('Document data:', doc.data());
    }
}

writeDocs();

