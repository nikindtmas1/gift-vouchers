const mongoose = require('mongoose');

const voucherSchema = new mongoose.Schema({

    date: String,
    numVoucher: Number,
    nameBuyer: String,
    nameOwn: String,
    nameEmployee: String,
    treatment: String,
    count: Number,
    price: Number,
    validDate: String,
    typeTransaction: String,
    usedDate: String,
    notes: String
});

module.exports = mongoose.model('Voucher', voucherSchema);