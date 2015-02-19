/*Määritellään muuttujia ja hakemistopolku html ja javascript-tiedostoille*/
var express = require('express');
var app = express();
var path = require("path");
app.use(express.static(__dirname + '/public'));

/*MySQL-yhteyttä varten tarvittavat muuttujat*/
var mysql = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'Cac0f0n3',
  database : 'yritys'
});

/*Avataan yhteys kantaan*/
connection.connect();

/*Funktio hakee kaikki tiedot tyontekija-taulusta ja palauttaa taulukon*/
app.get('/testi', function(req, res) {
	var strQuery = 'select * from tyontekija';
	var sendThis;

	connection.query( strQuery, function(err, rows, resp){
  		console.log( rows );
  		sendThis = rows //JSON.stringify(rows);
  		res.send(sendThis);
  	
  });
});

/*Funktio hakee valitut tiedot toimipiste-taulusta ja palauttaa taulukon*/
app.get('/testi2', function(req, res) {
  var strQuery = 'SELECT nimi, katuosoite, email FROM toimipiste';
  var sendThis;

  connection.query( strQuery, function(err, rows, resp){
      console.log( rows );
      sendThis = rows //JSON.stringify(rows);
      res.send(sendThis);
    
  });
});

app.get('/testi3', function(req, res) {
  var strQuery = 'SELECT  tilaukset.Myyja,  tuote.Nimi  AS Tuote,  tilauslista.Tilausnumero  FROM  tilauslista INNER JOIN  tuote ON tilauslista.Tuotenumero=tuote.Tuotenumero Inner JOIN  tilaukset ON tilaukset.Tilausnumero=tilauslista.Tilausnumero';
  var sendThis;

  connection.query( strQuery, function(err, rows, resp){
      console.log( rows );
      sendThis = rows //JSON.stringify(rows);
      res.send(sendThis);
    
  });
});


/*Määritellään, palvelimen asetuksia*/
var server = app.listen(3000, function () {
        var host = server.address().address
        var port = server.address().port
        console.log('Example app listening at http://%s:%s', host, port)
}) 