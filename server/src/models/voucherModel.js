const mongoose = require('mongoose');

const voucherSchema = new mongoose.Schema({

    date: Number,
    numVoucher: Number,
    nameBuyer: String,
    nameOwn: String,
    nameEmployee: String,
    treatment: String,
    count: Number,
    price: Number,
    validDate: Number,
    typeTransaction: String,
    usedDate: Number,
});

module.exports = mongoose.model('Voucher', voucherSchema);