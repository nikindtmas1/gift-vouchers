const mongoose = require('mongoose');

const voucherSchema = new mongoose.Schema({

    date: {
        type: String,
        required: [true, 'Date is required!']
    },
    numVoucher: {
        type: Number,
        required: [true, 'Number Voucher is required!']
    },
    nameBuyer: {
        type: String,
        required: [true, 'Name Buyer is required!']
    },
    nameOwn: {
        type: String,
        required: [true, 'Name Owner is required!']
    },
    nameEmployee: {
        type: String,
        required: [true, 'Name Employee is required!']
    },
    treatment: {
        type: String,
        required: [true, 'Treatment is required!']
    },
    count: {
        type: Number,
        required: [true, 'Count is required!']
    },
    price: {
        type: Number,
        required: [true, 'Price is required!']
    },
    validDate: {
        type: String,
        required: [true, 'Valid Date is required!']
    },
    typeTransaction: {
        type: String,
        required: [true, 'Type transaction is required!']
    },
    usedDate: {
        type: String,
        required: [true, 'User Date is required!']
    },
    checked: Boolean,
    email: {
        type: String,
        required: [true, 'Email is required!']
    }
});

module.exports = mongoose.model('Voucher', voucherSchema);