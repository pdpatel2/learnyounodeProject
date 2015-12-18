var numArray = process.argv.slice(2);
function sum(numArray) {
	var total = 0
	for (i=0; i<numArray.length; i++) {
		total += Number(numArray[i]);
	}
	console.log(total);
}
sum(numArray)