const router = require('express').Router();

const vouchersController = require('../controllers/voucherController');
const userController = require('../controllers/userController');

router.use('/users', userController);
router.use('/vouchers', vouchersController);

module.exports = router;