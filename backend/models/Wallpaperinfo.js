var mongoose = require('mongoose');

var wallpaperinfoSchema = mongoose.Schema({

    imagename: {type:String, required:true},
    imageuploadedby: {type:String, required:true},
    imageurl: {type:String, required:true},
    imagecategory:{type:String,required:true}

})

var Wallpaperinfo = module.exports = mongoose.model('Wallpaperinfo',wallpaperinfoSchema);