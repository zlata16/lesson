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
	console.log(color);
}