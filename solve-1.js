//Includes specified Node module
var rect = require('./rectangle-1.js');

function solveRect(l,b){
	
	if(l <0 || b < 0){
		console.log('The dimension should be greater than zero... l='+ l+" and b="+b);
	}else{
		console.log('area = '+rect.area(l,b));
		console.log('perimeter = '+rect.perimeter(l,b));
	}
	
}

solveRect(3,5);