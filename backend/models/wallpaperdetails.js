var mongoose = require('mongoose');

var wallpaperdetailsSchema = mongoose.Schema({

    imagename: {type:String, required:true},
    imageuploadedby: {type:String, required:true},
    imageurl: {type:String, required:true},
    imagecategory:{type:String,required:true}

})

var Wallpaperdetails = module.exports = mongoose.model('Wallpaperdetails',wallpaperdetailsSchema);