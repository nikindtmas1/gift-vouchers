const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main(){
    await mongoose.connect('mongodb+srv://niki:niki548444@cluster0.rw93m.mongodb.net/gift-vouchers?retryWrites=true&w=majority')
}