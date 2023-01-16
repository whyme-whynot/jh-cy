
var widthX = parseInt(prompt("숫자1?"), 0);
var widthY = parseInt(prompt("숫자2?"), 0);

for (var i=0; i<widthX*widthY; i++) {
	if (i%widthX == 0) {
		document.write("<br>");
	} else {
		document.write("*");
	}
}