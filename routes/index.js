var express = require('express');
var router = express.Router();
var MongoClient=require("mongodb").MongoClient

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post('/submit',function(req,res){
  console.log(req.body)
  MongoClient.connect("mongodb://localhost:27017",function(err,client){
    if(err)
      console.log("error")
    else
    console.log("database connected")
  }
  
)
res.send("hi")
})
module.exports = router;
