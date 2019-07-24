const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    fistName: String,
    lastName: String,
    avatar: String
});

module.exports =  model('User',userSchema);
