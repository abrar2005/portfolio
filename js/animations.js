// ===============================================

//  TYPING ANIMATION FROM @artrugh | CODEPEN

// ===============================================



const typedBox = document.querySelector("#typed-box");
const text = document.querySelector("#text");

// // determine values // //

const string = `
    My name is Abrar, I am a junior frontend developer with a passion for building websites. I have 2 years of
    experience building front end websites, I recently started learning
    the backend part of websites. My goal is to become a full-stack developer with Laravel as 
	the focus in backend. 
`; // string to be typed
let delayDisplayTypedText = 2000; // determine the delay (3seconds) of the typedFunction

// // FUNCTIONS // //

// TypedSign animation //

function TypedSign(parentElement) {
	// let typedSign = document.createElement("p"); // create a new p
	// typedSign.textContent = "|"; // add "|" typedSign
	// typedSign.setAttribute("id", `typed-sign`); // set an ID
	// typedSign.className = "typed-white"; // set a class
	// // parentElement.appendChild(typedSign); // append it to the div typedBox (pass it as an argument)

	setInterval(() => {
		let initial = typedSign.className === "typed-black";
		initial = !initial;

		if (initial === true) {
			typedSign.className = "typed-black";
		} else {
			typedSign.className = "typed-white";
		}
	}, 500);
}

// Function to get the random number which determines the speed of the typing animation

function getRandomIntInclusive(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
	// The maximum is inclusive and the minimum is inclusive
}

// // Typing animation // //

const TypedText = (parentElement, element, fromElement, speed = 100, i = 0) => {
	if (i < fromElement.length) {
		setTimeout(() => {
			// var t = document.createTextNode(fromElement[i - 1]);     // Create a text node
			//element.appendChild(t);
			element.textContent += fromElement[i - 1]; // inner each letter
		}, speed);

		return TypedText(
			parentElement,
			element,
			fromElement,
			(speed += getRandomIntInclusive(10, 70)),
			(i += 1)
		);
	}

	TypedSign(parentElement);
};

// // EVENT // //

//in case you want to control the delay display of the function.

window.addEventListener("DOMContentLoaded", () => {
	setTimeout(() => {
		TypedText(typedBox, text, string);
	}, delayDisplayTypedText);
});
