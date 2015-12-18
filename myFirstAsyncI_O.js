var fs = require('fs');
function countLines() {
	fs.readFile(process.argv[2], function (err, buf) {
		if(err) throw err;
		var lines = buf.toString().split("\n").length-1;
		console.log(lines)
	});
}

countLines()