const Voucher = require('../models/voucherModel');

const getAllVouchers = () => Voucher.find();

const getOneVoucher = (id) => Voucher.findById(id);

const createVoucher = (data) => Voucher.create(data);

const updateVoucher = (id, voucherData) => Voucher.findByIdAndUpdate(id, voucherData);

const deleteVoucher = (id) => Voucher.findByIdAndDelete(id);

const getVoucherByNumber = (number) => Voucher.findByNumber(Number(number));

//const getVoucherByName = (name) => Voucher.findByName(name);

module.exports = {
    getAllVouchers,
    getOneVoucher,
    createVoucher,
    updateVoucher,
    getVoucherByNumber,
    //getVoucherByName,
    deleteVoucher,
}