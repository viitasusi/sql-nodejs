var express = require('express');
var app = express();
var path = require("path");
app.use(express.static(__dirname + '/public'));

var mysql = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '***',
  database : 'yritys'
});


connection.connect();


app.get('/testi', function(req, res) {
	var strQuery = 'select ID from tyontekija';
	var sendThis;

	connection.query( strQuery, function(err, rows, res){
  	/*if(err)	{
  		throw err;
  		//res.send('ongelma');
  	}else{*/
  		console.log( rows );
  		sendThis = rows;
  		var testi = rows[0];
  		console.log(JSON.stringify(testi));
  		res.send(testi);
  	
  });
	console.log(sendThis);
	
});


var server = app.listen(3000, function () {
        var host = server.address().address
        var port = server.address().port
        console.log('Example app listening at http://%s:%s', host, port)
}) 