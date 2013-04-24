proteus error reporter
=========

Proteus error reporter collect client errors.

## Usage

    var reporter = require('proteus-error-reporter');
    
    ..
    
    reporter
		.express(app, {
			format: 'text-block',
			path: '/report' // listening path on express app
		})
		.on('report', function(block) {
			logger.log(block);
    });

## Formats

- text-block Formmated text block.


