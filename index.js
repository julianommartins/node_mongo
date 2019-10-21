var MongoClient = require('mongodb').MongoClient;

var url = 'mongodb://localhost/meli';

MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    console.log("connected");
    db.close();
})