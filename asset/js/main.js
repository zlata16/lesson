//alert("Hello world!");

var colorArray = ["#5A9C6E", 
					"#A8BF5A",
 					"#CCC", 
 					"#000",
 					"00ff00"];
 var i = 0;
function changeColor() {
	document.body.style.background = colorArray[i];
	i++;
	//console.log(colorArray[i]);
	if(i > colorArray.length - 1){
		i = 0;
	}
}

function selectColor() {
	// body...
	let color = document.getElementById("color").value;
	document.body.style.background = color;
	// console.log(color);
	document.getElementById('result').innerHTML = color;
}
	let oper_elements = document.getElementsByClassName('oper');
	console.log(oper_elements);