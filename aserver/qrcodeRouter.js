const express = require('express');
const { scarQrcode } = require('./qrcodeController');
const qrRouter = express.Router();


qrRouter.post("/scanQrcode",scarQrcode)

module.exports = qrRouter