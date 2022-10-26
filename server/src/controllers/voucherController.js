const express = require('express');
const router = express.Router();

const voucherService = require('../services/voucherServices');
const {isAuth} = require('../middleware/authMidd');
const roles = require('../middleware/roles');

// router.get('/', (req, res) => {
//     res.json({text: 'It is working!'})
// });

router.get('/', async (req, res) => {

    let vouchers = await voucherService.getAllVouchers();
    res.json(vouchers);
});

router.get('/:number', async (req, res) => {
    
    let result;
    if(req.params.number.length <= 4){

        result = await voucherService.getVoucherByNumber(req.params.number)
    }else{

        result = await voucherService.getOneVoucher(req.params.number);
    }
    res.json(result);
});

router.get('/nameOwn', async (req, res) => {
    console.log(req.params);
    // let result = await voucherService.getVoucherByNumber(req.params.id);
    // console.log(result);
    // res.json(result);
});

router.post('/', async (req, res) => {
   
    await voucherService.createVoucher({...req.body});
    res.json({ok: true})

});

router.put('/:id', async (req, res) => {
   
    await voucherService.updateVoucher(req.params.id, req.body);
    res.json({ok: true});
});

router.delete('/:id', async (req, res) => {
    await voucherService.deleteVoucher(req.params.id);
    res.json({ok: true});
});

module.exports = router;