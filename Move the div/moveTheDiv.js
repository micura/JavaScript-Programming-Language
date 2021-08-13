const theDiv = document.getElementsByClassName("theDiv")[0];
const theDivCurrentWidth = document.getElementsByClassName("theDiv")[0].offsetWidth;
const theDivCurrentHeight = document.getElementsByClassName("theDiv")[0].offsetWidth;

function move(pPagePlace) {
	theDiv.style.position = "absolute";

	if (pPagePlace == 'left') {
		theDiv.style.top = "50%";
		theDiv.style.left = "0%";
	}

	if (pPagePlace == 'right') {
		theDiv.style.top = "50%";
		theDiv.style.left = "100%";
	}

	if (pPagePlace == 'top') {
		theDiv.style.top = "0%";
		theDiv.style.left = "50%";
	}

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