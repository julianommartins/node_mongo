var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017/";

MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("meli");
    var myquery = {
        city: "São Paulo"
    };
    var newvalues = {
        $set: {
            salary: 10000
        }
    };
    dbo.collection("users").updateMany(myquery, newvalues, function (err, res) {
        if (err) throw err;
        console.log(res.result.nModified + " document(s) updated");
        db.close();
    });
});