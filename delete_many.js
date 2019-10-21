var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("meli");
    var myquery = {
        city: 'Carapicuíba'
    };
    dbo.collection("users").deleteMany(myquery, function (err, obj) {
        if (err) throw err;
        console.log(obj.result.n + "  document deleted");
        db.close();
    });
});