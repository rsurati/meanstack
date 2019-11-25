var express = require('express');

var mongoose = require('mongoose');

var bodyparser = require('body-parser');
var bodyParser = require('body-parser');

var User = require('./models/User');
var Wallpaperinfo = require('./models/Wallpaperinfo');
var Wallpaperdetails = require('./models/wallpaperdetails');
var cors = require("cors");

var assert = require("assert");
var mongo = require("mongodb");
var app = express();

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));



var db = mongoose.connect('mongodb://localhost:27017/wallpaperdb',function(err,response){

    if(err) console.log("There is error in connecting with MongoDB");
    
    console.log("Connection Successfull");

});

app.use(cors());

app.set('port', process.env.port || 3000);

app.use(bodyparser.json());

app.get('/', (req, res)=>{

 res.send("hello");
})

app.post('/register', (req, res)=>{
    
    console.log(req.body);

    var fname = req.body.fname;
    var email = req.body.email;
    var pwd1 = req.body.pwd1;
   
    var user = new User();
   
    user.fname = fname;
    user.email = email;
    user.pwd1 = pwd1;
   
    user.save((err, result)=>{
   
       if(err){
           console.log("Error in register data");
           res.send({success: "Failed to add user", status: 500});
       }

       res.send({success: "Success in add user", status: 200});
    })
    
   
   })

   app.post('/signin',function(req,res,next){

    console.log(req.body.pwd1 +" "+ req.body.email);

    let p=User.find({email:req.body.email,pwd1:req.body.pwd1}).exec();
   
   p.then(function(doc)
   {  
        if(doc)
       {
           console.log(doc);
       return res.status(201).json(doc);
       }
   });
   p.catch(function(err){
       return res.status(501).json({massage:"error"});
   });


});
//const express = require("express");
// const multer = require('multer');
//const upload = multer({dest: __dirname + '../uploads/images'});
// const storage = multer.diskStorage({

//     destination:function(req, file, cb){
//         cb(null,'./uploads/');

//     },

//     filename: function(req,file,cb){

//         cb(null, new Date().toISOString() + file.originalname);
//     }
// });

// const upload = multer({storage: storage});


// const fileFilter = (req, file, cb)=>{

//     if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png'){

//         cb(null,true);

//     }

//     else{ cb(null,false);
//     }
// }
// app.use(express.static('../uploads'));

// app.post('/upload',upload.single('imageurl'),function(req,res,next){

//     console.log(req.file);

//     const wallpaperinfo = new Wallpaperinfo({

//         imagename: req.body.imagename,
//         imageuploadedby: req.body.imageuploadedby,
//         imageurl: req.body.imageurl


//     })
//     wallpaperinfo.save().then(result => {

//         console.log(result);
//         res.status(201).json({
//             message:"Image Added Successfully"
//         })
//     })



//  })

// const handleError = (err, res) => {
//     res
//       .status(500)
//       .contentType("text/plain")
//       .end("Oops! Something went wrong!");
//   };
  
//   const upload = multer({
//     dest: "./uploads/"
//     // you might also want to set some limits: https://github.com/expressjs/multer#limits
//   });
  
  
//   app.post(
//     "/upload",
//     upload.single("imageurl" /* name attribute of <file> element in your form */),
//     (req, res) => {
//       const tempPath = req.file.path;
//       const targetPath = path.join(__dirname, "./uploads/image.png");
  
//       if (path.extname(req.file.originalname).toLowerCase() === ".png") {
//         fs.rename(tempPath, targetPath, err => {
//           if (err) return handleError(err, res);
  
//           res
//             .status(200)
//             .contentType("text/plain")
//             .end("File uploaded!");
//         });
//       } else {
//         fs.unlink(tempPath, err => {
//           if (err) return handleError(err, res);
  
//           res
//             .status(403)
//             .contentType("text/plain")
//             .end("Only .png files are allowed!");
//         });
//       }
//     }
//   );
//------------------------------------------------


//   var requestdata = mongoose.model('requestdata',Requestschema);

//   var moverSchema = new mongoose.Schema({
//     ownername : String,
//     companyname : String,
//     email : String,
//     number : String,
//     password : String,
//     address : String,
//     landmark : String,
//     pincode : String,
//     city : String,
//     state : String,
//     doc : String,
//   })

//   var mover = mongoose.model('mover',moverSchema);


  
  app.post("/requestentry", async (req, res) => {
    var wp = new Wallpaperdetails();

    console.log("hello");
    
      console.log(req.body);
        wp.imagename=req.body.imagename
        wp.imageurl=req.body.requestimg
        wp.imageuploadedby=req.body.email
        wp.imagecategory=req.body.category

        wp.save(function(err, data) {
          if (err) {
            console.log("Request error" + err);
            res.status(500).json({
              isSucceedr: false
            });
          } else {
            console.log(data);
            console.log("Request saved successfully");
            res.status(200).json({
             isSucceedr: true
            });
          }
        });
});









//-------------------------------------------------------
// Code to Retrieve Data
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/wallpaperdb';

MongoClient.connect(url, function(err, db) {

    var cursor = db.collection('users').find();

    cursor.each(function(err, doc) {

        console.log(doc);
        console.log("Welcome2019");

    });
}); 


app.get('/displayallusers',function(req,res,next)
{
    var resultArray=[];

    mongo.connect(url, function(err,db){

        assert.equal(null,err);
        var cursor = db.collection('users').find();
        cursor.forEach(function(doc,err){

            assert.equal(null,err);
            resultArray.push(doc);
            console.log(doc);
        }, function(){

            db.close();

            res.render('index', {items: resultArray})
           
            
            res.status(201).json({
                message:"Display Done Successfully"
            })
        
        });


    });
});

//code to  delete user

app.delete('/delete/:id', (req, res) => {
    console.log(req.params.id);
    User.findOneAndRemove(req.params.id, (err, user) => {
        if (err) {
            return res.json({ message: 'error' })
        }
        return res.json(user)
    })

});



//code to edit
app.put('/edit/:id', (req, res) => {
    console.log(req.body)
    User.findById(req.params.id, (err, user) => {
       
        if (err) {
            return res.json({ message: 'error' })
        }
        if (req.body.fname) {
            user.fname = req.body.fname;
        }
        if (req.body.pwd1) {
            user.pwd1 = req.body.pwd1;
        }
        if (req.body.email) {
            user.email = req.body.email;
        }
       
        console.log(user)
        user.save().then((doc) => { return res.json(doc) }).catch(() => { return res.json({ message: 'error' }) })
    })
});
//code to get user by id
app.get('/:id', (req, res) => {
    console.log(req.params.id)
    User.findById(req.params.id, (err, users) => {
        if (err) { return res.json({ message: 'error' }) }
        return res.json(users)
    })


});




app.post('/displayalluserfromdb', function(req, res){

    User.find({}, function(err,users){
    

        if(err)
        {
                console.log("error in retreiving Users ");
        }
        else{
            
            res.json(users).status(200);
            
        }
    })
 })



 app.post('/loginnew',async (req,res)=>{

    console.log(req.body);
    const {email,pwd1}=req.body
    const resp=await User.findOne({email,pwd1})
    console.log("email and pass by user:"+email+" "+pwd1)
    console.log("response"+resp)
   
           if(resp)
            {
              res.status(200).json({
                isLogin: true,
                userd:resp
                    });
            }
            else{
                console.log("oh no");
                res.status(200).json({
                isLogin: false
            
                });
            
            }
            });



   




app.listen(app.get('port'), function(err, response){
    
    
     console.log("Server is running on port ",app.get('port'));

});
