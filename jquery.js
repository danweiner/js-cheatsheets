// //hide text
// //show text slowly
// //method chaining
// $(".hello").hide().show("slow");




// //Hide text from user - create a reveal through user interaction

// //1. Hide spoiler
// $(".spoiler span").hide();
// //2. Add a button
// $(".spoiler").append("<button>Reveal Spoiler!</button>");
// //3. When button pressed
// $("button").click(function(){
// 	//3.1. Show spoiler next to button clicked
// 	$(this).prev().show();
// 	//3.2. Get rid of button
// 	$(this).remove();
// });




// Create a simple lightbox

//Problem: User when clicking on image goes to a dead end
//Solution: Create an overlay with the large image - lightbox

var $overlay = $('<div id="overlay"></div>');
var $image = $("<img>");
var $caption = $("<p></p>")


//An image to overlay
$overlay.append($image);

//  A caption to overlay

$overlay.append($caption);

//Add overlay
	
$("body").append($overlay);

	

//1.  Capture the click event on a link to an image
$("#imageGallery a").click(function(event){
	event.preventDefault();
	var imageLocation = $(this).attr("href");
	//Update overlay with the image linked in the link
	$image.attr("src", imageLocation);

	//1.1  Show the overlay
	$overlay.show();
	
	//1.3  Get child's alt attribute and set caption
	var captionText = $(this).children("img").attr("alt");
	$caption.text(captionText);

});

// When overlay is clicked
$overlay.click(function(){

	//  Hide the overlay
	$overlay.hide();
})


	
