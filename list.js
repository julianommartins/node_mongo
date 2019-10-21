var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost/meli';

MongoClient.connect(url, function (err, db) {

    var collection = db.collection("users");

    collection.insert({
        1: 'Juliano Martins'
    });


});