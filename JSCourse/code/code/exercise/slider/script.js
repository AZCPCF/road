var pics = document.getElementsByClassName("box")[0].children.length;
var nextT = document.getElementsByClassName("right")[0].innerHTML = "<";
var prevV = document.getElementsByClassName("left")[0].innerHTML = ">";
var a;
var counter = 0;
var arrayColor = ["#ffff00", "#ff0000", "green"];
// var start = document.getElementById("start");
// var stops = document.getElementById("stop");
for (let i = 1; i < pics; i++) {
	document.getElementsByClassName("box")[0].children[i].style.display = "none";
	document.getElementsByClassName("box")[0].style.boxShadow = `0 0 30px  ${arrayColor[counter]}`;
	document.getElementsByClassName("box")[0].style.border = `4px solid ${arrayColor[counter]}`;
}
function next() {
	counter++;
	for (var i = 0; i < pics; i++) {
		document.getElementsByClassName("box")[0].children[i].style.display = "none";
		if (counter > pics - 1) {
			document.getElementsByClassName("box")[0].children[0].style.display = "block";
			document.getElementsByClassName("box")[0].style.border = `4px solid ${arrayColor[counter]}`;
			document.getElementsByClassName("box")[0].style.boxShadow = `0 0 30px  ${arrayColor[counter]}`;
			counter = 0;
		} else {
			document.getElementsByClassName("box")[0].children[counter].style.display = "block";
			document.getElementsByClassName("box")[0].style.border = `4px solid ${arrayColor[counter]}`;
			document.getElementsByClassName("box")[0].style.boxShadow = `0 0 30px  ${arrayColor[counter]}`;
		}
	}

}
function prev() {
	counter--;
	console.log(counter);
	for (var i = 0; i < pics; i++) {
		document.getElementsByClassName("box")[0].children[i].style.display = "none";
		if (counter < 0) {
			counter = pics - 1;
			document.getElementsByClassName("box")[0].children[counter].style.display = "block";
			document.getElementsByClassName("box")[0].style.border = `4px solid ${arrayColor[counter]}`;
			document.getElementsByClassName("box")[0].style.boxShadow = `0 0 30px  ${arrayColor[counter]}`;
		} else {
			document.getElementsByClassName("box")[0].children[counter].style.display = "block";
			document.getElementsByClassName("box")[0].style.border = `4px solid ${arrayColor[counter]}`;
			document.getElementsByClassName("box")[0].style.boxShadow = `0 0 30px  ${arrayColor[counter]}`;
		}
	}

}
var intervalL;
function startFN() {
	intervalL = setInterval(next, 2000);
	console.log(`start`);
}
function stopFN() {
	clearInterval(intervalL);
	console.log(`stop`);
}