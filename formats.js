
/**
 * Text block formatter
 */
exports['text-block'] = function(id, req) {
	var ua = req.get('user-agent');
	var body = req.body;

	var text = [
		'------ error no.' + id + ' -----',
		'Time       : ' + new Date().toISOString(),
		'User-Agent : ' + ua,
		'Remote-IP  : ' + req.ip,
		'Screen     : ' + body.screen.width + 'x' + body.screen.height,
		'Message    : ' + body.message,
		'File       : ' + body.file,
		'LineNo     : ' + body.line
	].join('\n');

	return text;
};


