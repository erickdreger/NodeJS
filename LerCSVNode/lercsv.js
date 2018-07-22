var csvjson = require('csvjson');
var fs = require('fs');


var options = {
     delimiter : ';' , // optional
     quote     : '"' // optional
};

var file_data = fs.readFileSync( 'restaurantes.csv', { encoding : 'utf8'});

var result = csvjson.toObject( file_data, options);



console.log(result); //Converted json object from csv data


fs.writeFile(__dirname + '/arquivoGerado.json' , JSON.stringify(result) ,err => {
    console.log(err || 'Arquivo Salvo!')

})
