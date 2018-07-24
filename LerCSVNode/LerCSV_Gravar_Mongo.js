var csvjson = require('csvjson');
var fs = require('fs');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";


var options = {
     delimiter : ';' , // optional
     quote     : '"' // optional
};

var file_data = fs.readFileSync( 'restaurantes.csv', { encoding : 'utf8'});

var result = csvjson.toObject( file_data, options);

console.log(result); //Converted json object from csv data

fs.writeFile(__dirname + '/arquivoGerado.json' , JSON.stringify(result) ,err => {
    console.log(err || 'Arquivo Salvo!')

    MongoClient.connect(url, function(err, db) {
      var dbo = db.db("mydb");
      dbo.collection("restaurantes").insertMany(result, function(err, res) {
        if (err) throw err;
        console.log("Quantidade de registros inseridos " + res.insertedCount);
        db.close();
      });
    });



})
