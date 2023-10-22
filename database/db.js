const firebase = require("firebase")
const admin = require('firebase-admin')

const{ serviceAccount, firebaseConfig} = require('/config')


admin.initilizeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://.firebaseio.com"
});

firebase.initilizeApp(firebaseConfig);

const db = firebase.firestore()
const adminDb = admin.firestore()

module.exports = {
    adminDb,
    db
}


