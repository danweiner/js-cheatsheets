/****************
Treehouse lessons used for practice
*****************/


/*******
Practice madlibs with variables 
and concatenation
*******/

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






/*******
Random Number Generator
*******/

// var input1 = prompt("Please type a starting number");
// var bottomNumber = parseInt(input1);
// var input = prompt("Please type a higher number");
// var topNumber = parseInt(input);
// var randomNumber = Math.floor(Math.random() * (topNumber - bottomNumber + 1)) + bottomNumber;
// var message = "<p>" + randomNumber + " is a number between " + bottomNumber + " and " + topNumber + ".</p>";
// document.write (message);
// console.log(message);








/*******
Random Number Guessing Game generates a number
 between 1 and 6 and gives a player two chances to
guess the number 
*******/


//assumes guess was wrong

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





/*******
Quiz Challenge
*******/


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







/*******
Practice with Functions
*******/

//get random number between "lower" and "upper"
// function getRandomNumber( lower, upper ) {
// 	//tests if input is a number
// 	if (isNaN(lower) || isNaN(upper)) {
// 		//adds unique error message 
// 		throw new Error('Both arguments must be numbers');
// 	}
// 	return Math.floor(Math.random() * (upper - lower + 1) ) + lower;
// }

// console.log(getRandomNumber(1, 6));
// console.log(getRandomNumber("hundred", 200));
// console.log(getRandomNumber(20, "house"));
// console.log(getRandomNumber(30, 60));
// console.log(getRandomNumber("eight", 80));



// //calculate area of rectangle
// function getArea(width, length, unit) {
// 	var area = width * length;
// 	return area + ' ' + unit;
// }

// console.log(getArea(10, 20, 'sq ft'));
// document.write(getArea(5, 20, "sq ft"));







/******
Loops
*******/

/*
While Loops
*/

//how many attempts it takes a computer to guess a number between 1 and 10000
// var upper = 10000;
// var randomNumber = getRandomNumber(upper);
// var guess;
// var attempts = 0;

// function getRandomNumber(upper) {
// 	return Math.floor( Math.random() * upper) + 1;
// }

// while ( guess !== randomNumber ) {
// 	guess = getRandomNumber( upper );
// 	attempts += 1;
// }

// document.write("<p>The random number was: " + randomNumber + "</p>");
// document.write("<p>It took the computer " + attempts + " attempts to get it right.</p>");



/*Making the do...while loop below
into a while loop using "break"*/

// var randomNumber = getRandomNumber(10);
// var guess;
// var guessCount = 0;
// var correctGuess = false;

// function getRandomNumber( upper ) {
//   var num = Math.floor(Math.random() * upper) + 1; 
//   return num;
// }

// while (true) {
// 	guess = prompt("I'm thinking of a number between 1 and 10.  What is it?");
// 	guessCount += 1;
// 	if (parseInt(guess) === randomNumber) {
// 		correctGuess = true;
// 		break;
// 	}
// }
// 	document.write("It took you " + guessCount + " tries to guess the number " + randomNumber);


/*
Do ... While Loops
*/

// var randomNumber = getRandomNumber(10);
// var guess;
// var guessCount = 0;
// var correctGuess = false;

// function getRandomNumber( upper ) {
//   var num = Math.floor(Math.random() * upper) + 1; 
//   return num;
// }

// do {
// 	guess = prompt("I'm thinking of a number between 1 and 10.  What is it?");
// 	guessCount += 1;
// 	if (parseInt(guess) === randomNumber) {
// 		correctGuess = true;
// 	}
// }	while ( ! correctGuess )
// 	document.write("It took you " + guessCount + " tries to guess the number " + randomNumber);



/* 
For Loops 
*/

/*added circle shaped "divs" to webpage with numbers
1 through 10*/
// var html = '';
// for (var i = 1; i <= 10; i += 1) {
// 	html += "<div>" + i + "</div>";
// }
// document.write(html);



/*
Refactor challenge using loops
*/


//generates ten random colored circles

// var html = '';
// var rgbColor;

// function randomRGB() {
// 	return Math.floor(Math.random() * 256);
// }

// function randomColor() {
// 	var color = "rgb(";
// 	color += randomRGB() + ",";
// 	color += randomRGB() + ",";
// 	color += randomRGB() + ")";
// 	return color;
// }

// function print(message) {
// 	document.write(message);
// }

// for (var i = 1; i <= 10; i += 1) {
// 	rgbColor = randomColor();
// 	html += '<div style="background-color:' + rgbColor + '"></div>';
// }
// print(html);






/******
Arrays
*******/

//components for the character "冶"

// var 冶 = ["冫", "厶", "口"];

// document.write(冶[1]);

// console.log(冶[1])


//adding items to an array



// function printList( list ) {
//   var listHTML = '<ol>';
//   for (var i = 0; i < list.length; i += 1) {
//     listHTML += '<li>' + list[i] + '</li>';
//   }
//   listHTML += '</ol>';
//   print(listHTML);
// }

// function print(html) {
//   document.write(html);
// }

// var 冶 = [];
// 冶.push("厶", "口");
// 冶.unshift("冫");

// printList (冶);

// var 総 = ["糸", "公"];
// 総.push("心");
// console.log(総);


//removing items from arrays

//.shift - remove from beginning
//.pop - remove from end



//using for loops with arrays

// var students = ['s', 'l', 'j', 'p'];
// for (var i = 0; i < students.length; i += 1) {
// 	console.log(students[i]);
// }


// //printing an array as an ordered list
// var playList = [
//   'I Did It My Way',
//   'Respect',
//   'Imagine',
//   'Born to Run',
//   'Louie Louie',
//   'Maybellene'
// ];

// function print(message) {
//   document.write(message);
// }

// function printList(list) {
// 	var listHTML = '<ol>';
// 	for (var i = 0; i < list.length; i += 1) {
// 		listHTML += '<li>' + list[i] + '</li>';
// 	}
// 	listHTML += '</ol>';
// 	print(listHTML);
// }

// printList(playList);



//useful array methods

//.join 
//.concat (add one list to another)
//.indexOf (find if an item is in an array)

// var inStock = [ 'apples', 'eggs', 'milk', 'cookies', 'cheese', 'bread', 'lettuce', 'carrot', 'broccoli', 'pizza', 'potato', 'crackers', 'onion', 'tofu', 'frozen dinner', 'cucumber'];
// var search;

// function print(message) {
//   document.write( '<p>' + message + '</p>');
// }

// while(true) {
// 	search = prompt("search our store.  type list, quit to exit");
// 	search = search.toLowerCase();
// 	if (search === "quit") {
// 		break;
// 	} else if (search === 'list') {
// 		print( inStock.join(', '));
// 	} else {
// 		if (inStock.indexOf(search) > -1){
// 		print('yes we have ' + search + ' in store');
// 		} else {
// 			print(search + ' is not in stock.');
// 		}
// 	}
// }


//two dimensional arrays

// var playList = [
//   ['I did it my way', 'Frank Sinatra'],
//   ['Respect', 'Aretha Franklin'],
//   ['Imagine', 'John Lennon']
// ];

// function print(message) {
//   document.write(message);
// }

// function printSongs( songs ) {
//   var listHTML = '<ol>';
//   for ( var i = 0; i < songs.length; i += 1) {
//     listHTML += '<li>' + songs[i][0] + ' by ' + songs[i][1] + '</li>';
//   }
//   listHTML += '</ol>';
//   print(listHTML);
// }

// printSongs(playList);



// Build a quiz using 2 dimensional arrays

// var questions = [
// 	['How many states?', 50],
// 	['How many continents', 7],
// 	['how many legs does an insect have', 6]
// ]

// var correctAnswers = 0;
// var question;
// var answer;
// var response;
// var correct = [];
// var wrong = [];

// function print(message) {
//   var outputDiv = document.getElementById("output");
//   outputDiv.innerHTML = message;
// }

// function buildList(arr) {
// 	var listHTML = "<ol>";
// 		for (var i = 0; i < arr.length; i += 1) {
// 			listHTML += "<li>" + arr[i] + "</li>";
// 		}
// 		listHTML += "</ol>";
// 		return listHTML;
// }

// for (var i =0; i < questions.length; i += 1) {
// 	question = questions[i][0];
// 	answer = questions[i][1];
// 	response = parseInt(prompt(question));
// 	if (response === answer) {
// 		correctAnswers += 1;
// 		correct.push(question);
// 	} else {
// 		wrong.push(question);
// 	}
// }
// html = "You got " + correctAnswers + " question(s) right";
// html += "<h2>You got these questions correct:</h2>";
// html += buildList(correct);
// html += "<h2>You got these questions wrong:</h2>";
// html += buildList(wrong);
// print(html);





/******
Objects
*******/

// var 冶1 = {jlpt: "N3", grade: "3", components: ["冫", "厶", "口"]};

// document.write(冶1.components[0]);

// console.log(冶1.components[0]);

// var person = {
// 	name: "Dan",
// 	country: "US",
// 	age: 32,
// 	TreehouseStudent: true,
// 	skills: ["JavaScript", "HTML", "CSS"]
// }


// function print(message) {
//   var div = document.getElementById('output');
//   div.innerHTML = message;
// }

// var message = "<p> Hello. My name is " + person.name + "</p>";
// message += "<p>I live in the " + person.country + "</p>";
// person.name = "poopface";
// message += "<p>But, I wish my name was " + person.name + "</p>";
// person.age += 1;
// message += "<p>My age is now " + person.age + "</p>";
// message += "<p>I have " + person.skills.length + " skills: " ;
// message += person.skills.join(", ") + "</p>";
// print(message);



//for in loops

// var person = {
// 	name: "Dan",
// 	country: "US",
// 	age: 32,
// 	TreehouseStudent: true,
// 	skills: ["JavaScript", "HTML", "CSS"]
// }

// for (var prop in person) {
// 	console.log(prop, ": ", person[prop]);
// }


//quiz revisited - arrays turned into objects

// var questions = [
//   {
//   	question: 'How many states are in the United States?', 
//   	answer: 50
//   },
//   {
//   	question:'How many continents are there?', 
//   	answer: 7
//   },
//   {
//   	question: 'How many legs does an insect have?', 
//   	answer: 6
//   }
// ];
// var correctAnswers = 0;
// var question;
// var answer;
// var response;

// function print(message) {
//   document.write(message);
// }

// for (var i = 0; i < questions.length; i += 1) {
//   question = questions[i].question;
//   answer = questions[i].answer;
//   response = prompt(question);
//   response = parseInt(response);
//   if (response === answer) {
//     correctAnswers += 1;
//   } 
// }

// html = "You got " + correctAnswers + " question(s) right."
// print(html);



//Build an Object

// var students = [
// 	{name: "Dan", 
// 	track: "front-end",
// 	achievements: 100,
// 	points: 15000
// 	},
// 	{name: "Olivia", 
// 	track: "back-end",
// 	achievements: 300,
// 	points: 16000
// 	},
// 	{name: "Sani", 
// 	track: "iOS",
// 	achievements: 200,
// 	points: 10000
// 	},
// 	{name: "Jon", 
// 	track: "front-end",
// 	achievements: 150,
// 	points: 20000
// 	},
// 	{name: "Dave", 
// 	track: "Ruby",
// 	achievements: 50,
// 	points: 5000
// 	}
// ]

// var message = '';
// var student;
// var search;

// function print(message) {
//   var outputDiv = document.getElementById('output');
//   outputDiv.innerHTML = message;
// }

// function getStudentReport (student) {
// 	var report = '<h2>Student: ' + student.name + '</h2>';
// 	report += '<p>Track: ' + student.track + '</p>';
// 	report += '<p>Points: ' + student.points + '</p>';
// 	report += '<p>Achievements' + student.achievements + '</p>';
// 	return report;
// }

// while(true) {
// 	search = prompt('Search student records');
// 	if(search  === null || search.toLowerCase() === 'quit') {
// 		break;
// 	}
// 	for (var i = 0; i < students.length; i += 1) {
// 	student = students[i];
// 	if (student.name === search) {
// 		message = getStudentReport(student);
// 		print(message);
// 	}
	
// 	}
// }

// print(message);














