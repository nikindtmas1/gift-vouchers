const mongoose = require('mongoose');

const voucherSchema = new mongoose.Schema({

    dayDate: Number,
    numVoucher: Number,
    nameSel: String,
    nameOwn: String,
    nameEmploy: String,
    treatment: String,
    count: Number,
    price: Number,
    validDate: Number,
    typeTransaction: String,
    usage: Number,
});

module.exports = mongoose.model('Voucher', voucherSchema);