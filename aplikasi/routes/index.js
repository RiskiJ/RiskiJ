var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;

/* GET home page. */

function getData(res, doc){
  MongoClient.connect('mongodb://localhost:27017', function(err, client){
    if (err) throw err;

    var db = client.db('tester');

    db.collection(doc).find().toArray((err, result)=>{
      if (err) throw err

      res.send(result);
    })
  });
}

router.use('/', function(req, res, next){
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
  next();
});

router.get('/', function(){
  res.send(req.query.nama);
});

router.get('/database', function(req, res, next){
  getData(res, 'isian');
});

router.post('/database', function(req, res, next){
  res.send(req.body.nama);
});

// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

module.exports = router;
