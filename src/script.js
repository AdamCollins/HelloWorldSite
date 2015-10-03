function codeLineNumbers(n){
	var n;
	var i;
	for (i = 1; i <n+2; i++) document.write(i + "<br>");
}

function mouseOver()
{
	var lans = ["C++","C#" , "Objective C", "Haskell", "Lisp", "Lua", "Pascal", "Python","Swift", "Java", "Javascript", "VB .NET"];
	var row = "";
		document.getElementById('dropDown').setAttribute('onmouseover','');
		document.getElementById("dropDown").style.height = "230px";
		for (var i = 0;  i< lans.length; i++) {
			row+= '<a href="#' + lans[i] + '">' + lans[i] + '</a><br> ';
		};
		document.getElementById("dropDown").innerHTML = row;
}

function mouseOverOff()
{

		document.getElementById("dropDown").style.height = "35px";
		document.getElementById("dropDown").innerHTML = " &#92;/" ;
		document.getElementById('dropDown').setAttribute('onmouseover','mouseOver()');
}