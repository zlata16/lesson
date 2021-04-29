//alert("hello, word!")

/*
comment
*/

//создание переменных
//1. var
//2. let



var colorArray = ["#5A9C6E", "#A8BF5A", "#CCC", "#000", "#00FF00"];
var i = 0;
function changeColor() {
	document.body.style.background = colorArray[i];
	i++;

    console.log(colorArray[i]);   

	if (i > colorArray.length -1) {
		i = 0;
	}
}


function selectColor() {
	let color = document.getElementById("color").value;
	document.body.style.background = color;
	document.getElementById('result').innerHTML = color;

}
let oper_elements = document.getElementsByClassName('oper');
	console.log(oper_elements); 
let numbers = document.getElementsByClassName('oper');
	console.log(oper_elements); 

for (var i = 0; i < oper_elements.length; i++) {
	oper_elements[i].addEventListener('click', oper);
}
for (var i = 0; i < numbers.length; i++) {
	numbers[i].addEventListener('click', addNumber);
}


function oper() {
	let o= this.value;
	//console.log(o);
	add=0;

	if (o== '=') {
		//alert(o);
		//calc();
	}
}
function addNumber(v) {
let input = document.getElementById('enter');
let o = input.value;
input.value = o + v;
}
