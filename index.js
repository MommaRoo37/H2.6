/*   Homework 2.6
    You are to use arrow functions for this task.

    Every second, change the background color of <span> according to the elements in `colours` array. The display of color should repeat from the top.

    Hint:
    - Look for interval setting functions.
    - You should use DOM Manipulation to update the style of <div> element.

    Code Challenge:
    - Provide a checkbox "stop". When it is checked, the colour change will not repeat and end at the last element.
*/

/* Steps to process and complete the goal: 
1) Identify the element to manipulate  id="target" and id="checkbox"
2) use an arrow function with setInterval to rotate in 1000 millisecond intervals
3) stop/start the interval using the checkbox
*/

const element = document.getElementById("target");
const checkbox = document.getElementById("checkbox");

// starting color index
let currentIndex = 0;
let intervalIndex;

const colours = [
	{
		color: "red",
		value: "#f00"
	},
	{
		color: "green",
		value: "#0f0"
	},
	{
		color: "blue",
		value: "#00f"
	},
	{
		color: "cyan",
		value: "#0ff"
	},
	{
		color: "magenta",
		value: "#f0f"
	},
	{
		color: "yellow",
		value: "#ff0"
	},
	{
		color: "black",
		value: "#000"
	}
];

// continously loop through the colors and insert into html of the div tag 
//  Keeping for reference of the the function prior to converting to Arrow Function
// function rotateColors() {
//   const currentColor = colours[currentIndex];
//   element.style.backgroundColor = currentColor.value;
//   currentIndex = (currentIndex + 1) % colours.length;
// }

// Create an arrow function 
let rotateColors = () => {
  // Get the current color of the colours array
  const currentColor = colours[currentIndex];
  
  // Set the background color of the target element
  element.style.backgroundColor = currentColor.value;
  
  // Increment the index for the next color
  currentIndex = (currentIndex + 1) % colours.length;
}

function startRotation() {
  // Clear any existing interval to avoid multiple intervals running simultaneously
  clearInterval(intervalIndex);
  
  // Start the color rotation interval
  intervalIndex = setInterval(rotateColors, 1000);
}

function stopRotation() {
  // Clear the color rotation interval
  clearInterval(intervalIndex);
}

// Add event listener to checkbox for starting/stopping the color rotation
checkbox.addEventListener("change", function() {
  if (checkbox.checked) {
    stopRotation();
  } else {
    startRotation();
  }
});

// Start the color rotation initially
startRotation();
