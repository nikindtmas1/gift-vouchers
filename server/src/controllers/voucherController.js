const express = require('express');
const router = express.Router();

const voucherService = require('../services/voucherServices');

// router.get('/', (req, res) => {
//     res.json({text: 'It is working!'})
// });

router.get('/', async (req, res) => {

    let vouchers = await voucherService.getAllVouchers();
    res.json(vouchers);
});

module.exports = router;