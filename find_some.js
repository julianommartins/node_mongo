var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("meli");
    dbo.collection("users").find({}, {
        projection: {
            _id: 0,
            user: 1,
            email: 1
        }
    }).toArray(function (err, result) {
        if (err) throw err;
        console.log(result);
        db.close();
    });
});