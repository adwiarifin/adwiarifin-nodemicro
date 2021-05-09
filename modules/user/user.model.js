const mongoose = require('mongoose');

const schema = mongoose.Schema({
    id: { type: String, unique: true, required: true },
    user_name: { type: String, unique: true },
    account_number: { type: String, index: true },
    email_address: { type: String, unique: true },
    identity_number: { type: String, index: true },
});

module.exports = mongoose.model('User', schema);