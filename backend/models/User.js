var mongoose = require('mongoose');

var userSchema = mongoose.Schema({

    fname: {type:String, required:true},
    email: {type:String, required:true},
    pwd1: {type:String, required:true},

})

var User = module.exports = mongoose.model('User',userSchema);