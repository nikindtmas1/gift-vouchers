const router = require('express').Router();

const vouchersController = require('../controllers/voucherController');

router.use('/vouchers', vouchersController);

module.exports = router;