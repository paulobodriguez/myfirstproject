//JAVASCRIPT SLIDESHOW 1

//dot notation examples
console.log("hello".length);//.length can be added to strings to find out how many characters in the specified string 
//in this instance the string data is "hello" and the length is 5 which is output to the console by the console.log

//we can also maniuplate string date by adding other METHODS. in the above example .length is the METHOD used.
//Other examples of methods are toLowerCase(), .length, .trim(), toUpperCase()
//examples of each below:

console.log("Hello".toLowerCase()) //changes the string to lower case
console.log("      Hello    ".trim())// removes empty space from the string
console.log("Hello".toUpperCase())//changes the string to uppercase


//JAVASCRIPT SLIDESHOW 2
//Things specified within () brackets are reffered to as parameters. We can use these to modify ]console.log()
console.log(Math.random());//generates a random number between 0 and 1, and outputs it to the console log.

console.log(Math.random()*10);//with the addition of the *10 we are asking it to generate a number between 1 and 10. 
//in this instance the *10 indicates "up to 10". 
//NB: this is not multiplying anything by 10!!

console.log(Math.floor(Math.random()*10));//Math/floor returns an integer (whole number) less than or equal to the specified number.
//So this code generates a random number between 0-10 and then roudns it to the nearest whole integer.

/*
//Using the console we can also create patterns by printing line by line for instance the noughts  and crosses board.
console.log("    |   |    ")
console.log("    |   |    ")
console.log("    |   |    ")
console.log("-------------")
console.log("    |   |    ")
console.log("    |   |    ")
console.log("    |   |    ")
console.log("-------------")
console.log("    |   |    ")
console.log("    |   |    ")
console.log("    |   |    ")
//this outputs a noughts and crosses board to the console
*/

//JAVASCRIPT SLIDESHOW 3
console.log("All Around the world".toUpperCase().charAt(7));
//this command displays the 8th character in upper case on the console
//the new method used here to affect the string parameters is the .charAt(7) 
//charAt selects a character from the string and the number in the brackets is the chosen character position from the string.

//VARIABLEs - which are of course just like boxes
//we store items in the boxes to retrieve at a later point.
//by assigning the variables names we can access the things inside them
//we dont need to tell javascript what kind of data will be stored within a variable because JS is what we call a "loosely typed" language.
//variables can be declared using terms like let, var and const

/*
let i = 10; //this creates a variable called i which holds values that can be changed whenever the code is running and store a value of 10 in it

const i = 10; //this creats a variable called i which holds values that cannot be changed and also stores a value of 10 inside.

var i = 10; //this creates a variable called i which holds values that can be changed whenever the code is running and store a value of 10 in it.

//var is rarely used in modern coding. the best pracitce is considered to be let
*/
/*
//operators to store values: 
= 
*=
+=
/=
-=
++
--
*/

//cameCase
// for clarity of reading we use camelCase naming format.

/*
let favouriteDrink = "coffee"; //basic code where we have defined the favouriteDrink parameter and then use that in the console log.
console.log(favouriteDrink);
*/

/*
let favouriteDrink = "coffee"; //more advanced code that combines the above example with output text in the console.
console.log("My favourite drink is " + favouriteDrink);
*/

/*
let favouriteDrink = "coffee"; //more refined version of the above examples. Using the ${} format and backticks `
console.log(`My favourite drink is ${favouriteDrink}`);
*/


//Challenge 1 
//create a program that stores a name, age and favourite colour that then logs them into a complete sentence.
let name = "Rage";
let age = 4000;
let faveColour = ("pain");

console.log(`hello my name is ${name} I am ${age} and my favourite colour ${faveColour}!`);


//Challenge 2
//create 9 variables space1, space2, space3 etc
//assign each of these variables a value of "x" "o" or ""
//insert the variables into the voard using the ${varName} syntax and make yourboard look like the example shown.

let space1 = "x";
let space2 = "o";
let space3 = "";
let space4 = "x";
let space5 = "x";
let space6 = "";
let space7 = "o";
let space8 = "";
let space9 = "";

console.log("    |   |    ")
console.log(` ${space1}  | ${space2} |  ${space3}  `)
console.log("    |   |    ")
console.log("-------------")
console.log("    |   |    ")
console.log(` ${space4}  | ${space5} |  ${space6}  `)
console.log("    |   |    ")
console.log("-------------")
console.log("    |   |    ")
console.log(` ${space7}  | ${space8}  |  ${space9}  `)
console.log("    |   |    ")

//NB note how the lines that have inserted the data onto now use backticks ` instead of speech marks ""