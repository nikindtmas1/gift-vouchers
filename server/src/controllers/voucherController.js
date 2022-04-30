const express = require('express');
const router = express.Router();

const voucherService = require('../services/voucherServices');
const auth = require('../middleware/authMidd');
const roles = require('../middleware/roles');

// router.get('/', (req, res) => {
//     res.json({text: 'It is working!'})
// });

router.get('/', async (req, res) => {

    let vouchers = await voucherService.getAllVouchers();
    res.json(vouchers);
});

router.get('/:id', async (req, res) => {

    let result = await voucherService.getOneVoucher(req.params.id);
    res.json(result);
});

router.post('/', async (req, res) => {

    await voucherService.createVoucher({...req.body});
    res.json({ok: true})

});

router.put('/:id', async (req, res) => {

    await voucherService.updateVoucher(req.params.id, req.body);
    res.json({ok: true});
});

module.exports = router;