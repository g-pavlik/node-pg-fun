var dbm = require('db-migrate');
var type = dbm.dataType;

exports.up = function(db, callback) {
	db.createTable('links', {
		link: {type: 'string', length: 255, primaryKey: true},
		status: {type: 'string', defaultValue: 'new'}
	}, callback);
};

exports.down = function(db, callback) {
	db.dropTable('links', callback);
};
