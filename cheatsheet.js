// //Practice madlibs with variables and concatenation

// //Adding question countdown function

// var questions = 5;
// var questionsLeft = " [" + questions + " questions left]";
// var lastName = prompt("Please enter a last name" + questionsLeft);
// console.log(lastName);

// questions -= 1
// questionsLeft = " [" + questions + " questions left]";
// var adjective = prompt("Please enter an adjective" + questionsLeft);
// console.log(adjective);

// questions -= 1
// questionsLeft = " [" + questions + " questions left]";
// var noun = prompt("Please enter a noun" + questionsLeft);
// console.log(noun);

// questions -= 1
// questionsLeft = " [" + questions + " questions left]";
// var verb = prompt("Please enter a verb (past tense)" + questionsLeft);
// console.log(verb);

// questions -= 1
// questionsLeft = " [" + questions + " questions left]";
// var noun2 = prompt("Please enter another noun" + questionsLeft);
// console.log(noun2);

// alert("Thank you! Are you ready for your sentence?");
// var sentence = "<h2>I think that " + lastName;
// sentence += " is a " + adjective + " " + noun;
// sentence += " and should be " + verb;
// sentence += " in the " + noun2 + ".</h2>";

// document.write(sentence);
// console.log(sentence);






// //Random Number Generator

// var input1 = prompt("Please type a starting number");
// var bottomNumber = parseInt(input1);
// var input = prompt("Please type a higher number");
// var topNumber = parseInt(input);
// var randomNumber = Math.floor(Math.random() * (topNumber - bottomNumber + 1)) + bottomNumber;
// var message = "<p>" + randomNumber + " is a number between " + bottomNumber + " and " + topNumber + ".</p>";
// document.write (message);
// console.log(message);








/*Random Number Guessing Game generates a number
 between 1 and 6 and gives a player two chances to
guess the number */


// assumes guess was wrong

// var correctGuess = false;

// //generate random number from 1 to 6
// var randomNumber = Math.floor(Math.random() * 6 ) + 1;
// var guess = prompt("I'm thinking of a number between 1 and 6.  What is it?");
// if (parseInt(guess) === randomNumber) {
// 	correctGuess = true;

// //Adds condition if guess is too low
// }	else if (parseInt(guess) < randomNumber) {
// 	var guessMore = prompt("Try again.  The number I'm thinking of is more than " + guess);
// 	if (parseInt(guessMore) === randomNumber) {
// 		correctGuess = true;
// 	}

// //Adds condition if guess is too high
// }	else if (parseInt(guess) > randomNumber) {
// 	var guessLess = prompt("Try again.  The number I'm thinking of is lower than " + guess);
// 	if (parseInt(guessLess) === randomNumber) {
// 		correctGuess = true;
// 	}
// }

// //Tests if player is correct and outputs response

// if (correctGuess) {
// 	document.write("<p>You guessed the number!</p>");
// }	else {
// 	document.write("<p>Sorry, the number was " + randomNumber + ".</p>");
// }





// Quiz Challenge


//quiz begins, no answers correct

// var correct = 0;

// //ask questions

// var answer1 = prompt("Name a programming language that's also a gem");
// if (answer1.toUpperCase() === 'RUBY') {
// 	correct += 1;
// }
// var answer2 = prompt("Name a programming language that's also a snake");
// if (answer2.toUpperCase() === 'PYTHON') {
// 	correct += 1;
// }
// var answer3 = prompt("Name a programming language that is used to style web pages");
// if (answer3.toUpperCase() === 'CSS') {
// 	correct += 1;
// }
// var answer4 = prompt("Name a programming language that is used to build the structure of a web page");
// if (answer4.toUpperCase() === 'HTML') {
// 	correct += 1;
// }
// var answer5 = prompt("Name a programming language that is used to add interactivity to web pages");
// if (answer5.toUpperCase() === 'JAVASCRIPT') {
// 	correct += 1;
// }


// //output results

// document.write("<p>You got " + correct + " out of 5 questions correct.</p>");

// if (correct === 5) {
// 	document.write("<p><strong>You earned a gold crown!</strong></p>");
// } else if (correct >= 3 ) {
// 	document.write("<p><strong>You earned a silver crown!</strong></p>");
// } else if (correct >= 1 ) {
// 	document.write("<p><strong>You earned a bronze crown!</strong></p>");
// } else {
// 	document.write("<p><strong>You need to study more!</strong></p>");
// }







//Practice with Functions

//get random number between 1 and "upper"
function getRandomNumber( upper ) {
	var randomNumber = Math.floor(Math.random() * upper ) + 1;
	return randomNumber;
}
/*
console.log(getRandomNumber(6));
console.log(getRandomNumber(100));
console.log(getRandomNumber(200));
console.log(getRandomNumber(300));
console.log(getRandomNumber(400));
*/


//calculate area of rectangle
function getArea(width, length, unit) {
	var area = width * length;
	return area + ' ' + unit;
}

console.log(getArea(10, 20, 'sq ft'));
document.write(getArea(5, 20, "sq ft"));

























