const {db,adminDb} = require('../db/db');
const admin = require('firebase-admin');
const firebase = require('firebase');
const express = require('express');
const router = express.Router();