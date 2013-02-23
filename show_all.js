var pg = require('pg'),
	conf = require('./database.json')["dev"],
	connStr = null
	;

connStr = process.env.DATABASE_URL || 
	"tcp://" + conf.user + ":" + conf.password + "@" + conf.host + "/" + conf.database 

pg.connect(connStr, function(err, client){
	var query = client.query("SELECT * FROM links");

	query.on('row', function(row){
		console.log(row);
	});
	query.on('end', function(result){
		console.log(result.rowCount + ' rows were processed');
		process.exit();
	})
});