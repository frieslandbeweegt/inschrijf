// JavaScript Document

function showInput() {
	var checkBox = document.getElementsByClassName("inlineCheckbox1");
	var text = document.getElementsByClassName("max_extra");
	for (var i = 0; i < text.length; i++) {
		if (checkBox[i].checked == true) {
			text[i].style.display = "block";
		} else {
			text[i].style.display = "none";
		}
	}
}

function showInput2() {
	var checkBox = document.getElementsByClassName("inlineCheckbox2");
	var text = document.getElementsByClassName("vervoer_zelf");
	for (var i = 0; i < text.length; i++) {
		if (checkBox[i].checked == true) {
			text[i].style.display = "block";
		} else {
			text[i].style.display = "none";
		}
	}
}

function showInput3() {
	var checkBox = document.getElementById("inlineCheckbox4");
	var text = document.getElementById("editie");
	if (checkBox.checked == true) {
		text.style.display = "block";
	} else {
		text.style.display = "none";
	}
}

function showInput4() {
	var checkBox = document.getElementById("inlineCheckbox5");
	var text = document.getElementById("accomodatie");
	if (checkBox.checked == true) {
		text.style.display = "block";
	} else {
		text.style.display = "none";
	}
}

function showInput5() {
	var checkBox = document.getElementById("inlineCheckbox7");
	var text = document.getElementById("verhuur");
	if (checkBox.checked == true) {
		text.style.display = "block";
	} else {
		text.style.display = "none";
	}
}
