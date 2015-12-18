var fs = require('fs');
var buf = fs.readFileSync(process.argv[2]);
var str = buf.toString();
var newLine = str.split("\n");
console.log(newLine.length-1);