/*if (1 !="1") {
    console.log(true);
}
else {
    console.log(false);
}
*/

/*
let age = 16
if (age >= 17){
    console.log("Yes I can serve you")
}
else if (age <17){
    console.log("You aren't old enough")
}
else {"does not compute"}
*/

/*
let age = 17
let country = "Brazil"
if (country == "UK" && age >= 17){
    console.log("Yes I can serve you")
}
else if (age <17){
    console.log("You aren't old enough")
}
else if (country !== "UK"){
    console.log("This is the wrong country")
}
*/

//Challenge 1
/*
let password = "enoughletters"
if (password.length <= 8){
    console.log ("your password is too short")
} 
else if(password.length >= 8){
    console.log ("perfect")
}
//this checks the password to see if it contains 8 or more letters
*/


//Challenge 2
/*
let num = 9
if (num % 5 == 0 || num % 3 ==0){
    console.log ("well done at maths")
}
else if (num % 5 != 0 || num % 3 != 0){
    console.log ("you are bad at maths")
}
//this checks to see if the variable is divisible by three or five. The || is used in this instance
// to provide an "or" function.
*/

/*
//Challenge 3
let num = 3
if (num % 3 == 0 && num % 5 == 0){
    console.log ("fizz buzz")
}
else if (num % 5 == 0){
    console.log ("buzz")
}
else if(num % 3 == 0){
    console.log ("fizz")
}
else if (num % 3 != 0 && num % 5 != 0){
    console.log ("num")
}
*/


/*
//Challenge 4
let num = 20202
if (num.toString() === num.toString().split("").reverse().join("")){
    console.log ("is palindrome")
}
else {
    console.log ("is not palindrome")
}
*/

/*
//Challenge 5
let time = 9
let placeOfWork = "Office"
let townOfHome = "Manchester"

if (time >= 17 && time <= 24){
    console.log(`the time is ${time} and I am at home`)
}
else if (time >= 9 && time <= 17){
    console.log(`the time is ${time} and I am at work in the ${placeOfWork} in ${townOfHome}`)
}
else if (time >= 0 && time <= 7){
    console.log(`the time is ${time} and I am asleep in my bed`)
}
//This checks the time and returns the location of two variables based on the time
*/

/*
//Challenge 6
stringName = "jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi"
console.log (stringName.lastIndexOf(`i`, 94))
// this searches the string name starting from the last index and specifies the position of the chose value vowel.
*/

/*
//Challenge 6 (not my code)
let text = "jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi"
let vowel = ["a","e","i","o","u"]
let array1 = []
for (i = 0; i < (vowel.length); i++) {
    array1.push(text.lastIndexOf(vowel[i]));
}
console.log(vowel[array1.indexOf(Math.max.apply(null,array1))] + " is the last vowel")
*/

/*
//Challenge 7
let word = "zebra"
if (word.charAt(0) === word.slice(-1)){
    console.log ("True")
}
else if (word.charAt(0) != word.slice(-1)){
    console.log ("False")
}
// checks to see if the first and last letters of a word are the same.
// charAt command specifies character position in string.
// slice command specifies and extracts the position in a string
*/

/*
//Challenge 8
let num1 = 3
let num2 = 3
if (num1 + num2 % 2 == 0){
    console.log (num1 + num2)
}else if (num1 + num2 %2 != 0){
    console.log (num1 * num2)
}
//checks to see if two numbers when added together makes an even number and outputs the result.
if it doesnt then it still outputs the result but as an odd number.
*/



let space1 = "x";
let space2 = "x";
let space3 = "x";
let space4 = "x";
let space5 = "x";
let space6 = " ";
let space7 = "o";
let space8 = " ";
let space9 = " ";

console.log('    |   |    ');
console.log(` ${space1}  | ${space2} |  ${space3}  `);
console.log('    |   |    ');
console.log("-------------");
console.log('    |   |    ');
console.log(` ${space4}  | ${space5} |  ${space6}  `);
console.log("    |   |    ");
console.log("-------------");
console.log("    |   |    ");
console.log(` ${space7}  | ${space8} |  ${space9}  `);
console.log("    |   |    "); 

if (space1 == "x" && space2 == "x" && space3 == "x"){
    console.log("congratulations you are the tictactoe champion of the universe")
}
else if (space1 == "o" && space2 == "o" && space3 == "o"){
    console.log("congratulations")
}
