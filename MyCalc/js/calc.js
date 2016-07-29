"use strict";

	var int1
	var int2
	var op

function updateOutput(input) {
	var current
	if (input == "Clear") { //clears the output field
		document.getElementById("output").innerHTML = "";
		document.getElementById("*").disabled = false; 
		document.getElementById("+").disabled = false; 
		document.getElementById("-").disabled = false;
		document.getElementById("/").disabled = false;
	} else if (input == "*" || input == "/" || input == "+" || input == "-" ) { //if button press is operator
		int1 = parseInt(document.getElementById("output").innerHTML)
		if (input == "*") {
			op = function(int1, int2) { var newint =  int1 * int2
				var content = int1+"*"+int2+"="+newint
				ledger(content) 
				return newint
			}
		} else if (input == "/") {
			op = function(int1, int2) { var newint =  int1 / int2
				var content = int1+"/"+int2+"="+newint
				ledger(content)
				return newint
			} 
		} else if (input == "+") {
			op = function(int1, int2) { var newint = int1 + int2
				var content = int1+"+"+int2+"="+newint
				ledger(content) 
				return newint
			} 
		} else {
		op = function(int1, int2) {  var newint = int1 - int2
				var content = int1+"-"+int2+"="+newint
				ledger(content)
				return newint
			} 
		}
		document.getElementById("output").innerHTML = "";
		document.getElementById("*").disabled = true; 
		document.getElementById("+").disabled = true; 
		document.getElementById("-").disabled = true;
		document.getElementById("/").disabled = true; 
	} else if (input == "=") { //do math 
		console.log(current)		
		int2 = parseInt(document.getElementById("output").innerHTML)
		document.getElementById("output").innerHTML = op(int1, int2)
		document.getElementById("*").disabled = false; 
		document.getElementById("+").disabled = false; 
		document.getElementById("-").disabled = false;
		document.getElementById("/").disabled = false;
	} else { //updates output field with next input
		current=document.getElementById("output").innerHTML
		//console.log("last")
		document.getElementById("output").innerHTML = current+input;
	}
}

function ledger(content) {
	var element = document.getElementById("l")
	var p = document.createElement("p");
	p.innerHTML = content
	element.appendChild(p)
	
}