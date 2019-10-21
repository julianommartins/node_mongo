var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("meli");
    var myobj = [{
            user: "Justin Timberlaque",
            email: "justin@gmail.com",
            city: "Carapicuíba"
        },
        {
            user: "Renato Sagara",
            email: "renato@gmail.com",
            city: "São Paulo"
        },
        {
            user: "Juliano Marcos Martins",
            email: "juliano.jmm@gmail.com",
            city: "Santana de Parnaíba"
        },
        {
            user: "Tiago Ishibishi",
            email: "tiago@gmail.com",
            city: "Guarulhos"
        },
        {
            user: "Julia Rovick",
            email: "julia@gmail.com",
            city: "Carapicuíba"
        }
    ];
    dbo.collection("users").insertMany(myobj, function (err, res) {
        if (err) throw err;
        console.log("Number of documents inserted: " + res.insertedCount);
        db.close();
    });
});