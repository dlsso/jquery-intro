// Select all elements that match the given css selector (passed as a string to the $ function)
var welcome = $("#welcome-message")

// First arguement it the CSS property you want to change
// Second arguement is the value to change it to
welcome.css("color", "blue")

//Change multiple CSS properties at once (better to just make a CSS class and change to it)
welcome.css({
	"font-size": "72px",
	"color": "red",
	"font-weight": "bold"
})