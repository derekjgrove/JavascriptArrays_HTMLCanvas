/*
Range function takes in three parameters. Builds an array from
start to finish in increments of user specified.
@param start - the starting content of the array
@param end - the ending content of the array
@param interval - the interval in which to increment/decrement
*/
function range(start, end, interval) {
	var array = [];
	//Set interval to 1 if 0 or not passed in
	if (interval == null || interval == 0) {
		interval = 1;
	}
	
	//Reverse logical sense
	if (start > end) {
		//Make Descending order
		if (interval >= 0) {
			for (i = start; i >= end; i-=interval) {
				array.push(i);
			}
		//Already descending order
		} else {
			for (i = start; i >= end; i+=interval) {
				array.push(i);
			}
		}
	//Common logical sense
	} else {
		for (i = start; i <= end; i+=interval) {
			array.push(i);
		}
	}
	return array;
}

/*
Sum function has one parameter. It receives an array argument in
which a loop sums the elements within.
@param arr - the array object
*/
function sum(arr) {
	//No arguments were passed in, request one.
	if (arguments.length == 0) {
		return "Array not passed in";
	}
	var total = 1;
	//Go through the length of the array adding the element
	for (i = arr[0]; i <= arr.length - 1; i++) {
		total += arr[i];
	}
	return total;
}

/*
Test function for various scenarios
*/
function displayContent() {
	document.getElementById('1st').innerHTML = "range(1, 10): " + 
		range(1, 10);
	document.getElementById('2nd').innerHTML = "range(1, 10, 0): " + 
		range(1, 10, 0);
	document.getElementById('3rd').innerHTML = "range(1, 10, 2): " + 
		range(1, 10, 2);
	document.getElementById('4th').innerHTML = "range(5, 2, -1): " + 
		range(5, 2, -1);
	document.getElementById('5th').innerHTML = "range(5, 2, 1): " + 
		range(5, 2, 1);
	document.getElementById('6th').innerHTML = "range(5, 2): " + 
		range(5, 2);
	document.getElementById('7th').innerHTML = "range(10, -10, 2): " + 
		range(10, -10, 2);
	document.getElementById('8th').innerHTML = "range(5, 5): " + 
		range(5, 5);
	document.getElementById('9th').innerHTML = "sum(range(1, 10)): " + 
		sum(range(1, 10));
	document.getElementById('10th').innerHTML = "sum(range(1, -3)): " + 
		sum(range(1, -3));
}
console.log(sum(range(1, 10)));
console.log(range(5, 2, -1));
