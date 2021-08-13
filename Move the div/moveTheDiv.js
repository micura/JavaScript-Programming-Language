const theDiv = document.getElementsByClassName("theDiv")[0];
const theDivCurrentWidth = document.getElementsByClassName("theDiv")[0].offsetWidth;
const theDivCurrentHeight = document.getElementsByClassName("theDiv")[0].offsetWidth;

function move(pPagePlace) {
	theDiv.style.position = "absolute";
	console.log(theDivCurrentSize);

	if (pPagePlace == 'left')
		theDiv.style.top = "50%";

	if (pPagePlace == 'right')
		theDiv.style.top = "100%";

	if (pPagePlace == 'top')
		theDiv.style.left = "50%";

  	if (pPagePlace == 'bottom') {
  		theDiv.style.top = "100%";
  		theDiv.style.left = "50%";
  	}

	if (pPagePlace == 'center') {
		theDiv.style.top = "50%";
		theDiv.style.left = "50%";
	}
}

function changeColor() {
	theDiv.style.backgroundColor = "black";
}