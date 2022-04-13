const Voucher = require('../models/voucherModel');

const getAllVouchers = () => Voucher.find();

const getOneVoucher = (id) => Voucher.findById(id);

const createVoucher = (data) => Voucher.create(data);

const updateVoucher = (id, voucherData) => Voucher.findByIdAndUpdate(id, voucherData);



module.exports = {
    getAllVouchers,
    getOneVoucher,
    createVoucher,
    updateVoucher,
}