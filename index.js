
var formats = require('./formats');
var EventEmitter = require('events').EventEmitter;

/**
 * Express report collector
 */
function express(app, option) {

	option = option || {};

	var format = option.format || 'text-block';
	var path = option.path || '/report-error';

	var formatter = formats[format];
	if (!formatter) {
		throw new Error('Formatter not found ' + format);
	}

	var emitter = new EventEmitter();
	emitter.formatter = formatter;
	emitter.reportId = 0;

	app.post(path, function(req, res) {

		// immediate return to client before emitting
		res.set('Cache-Control', 'no-cache,max-age=0');
		res.json(true);

		var block = formatter(++emitter.reportId, req);
		emitter.emit('report', block);

	});

	return emitter;
}

exports.express = express;

