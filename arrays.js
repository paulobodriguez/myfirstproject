/*
let favouriteSong = [
    "Lions Roar - Cynic", 
    "Vicarious - Tool", 
    "Girls just want to have fun - Cyndi Lauper"
];
console.log(favouriteSong.length); //this command determines how many entries are within the array
favouriteSong.push("Stinkfist - Tool"); //.push command adds a new entry to the array at the end 
favouriteSong.pop();//.pop command removes the last entry to an array from the end

console.log(favouriteSong)
//index arrays start counting at zero!!
*/



//faveWebsites list
//.pop
/*
let faveWebsites = [
    "youtube",
    "netflix",
    "amazon",
];

faveWebsites.pop();//.pop removes the LAST item from an array
console.log(faveWebsites);
*/

/*
//Challenge 1
let faveWebsites = [
    "youtube",
    "napster",
    "russianbrides",
];

faveWebsites.push("bbc","homebase");
console.log(faveWebsites);

faveWebsites.splice(4);
console.log(faveWebsites);
*/


/*
//faveWebsites list
//.push
let faveWebsites = [
    "youtube",
    "netflix",
    "amazon",
];

faveWebsites.push("wikipedia", "bbc.com");//.push command can add multiple items to the end of an array
console.log(faveWebsites);
*/


//Challenge 2
/*
//faveWebsites list
//.shift
let faveWebsites = [
    "youtube",
    "netflix",
    "amazon",
];

faveWebsites.shift();
console.log(faveWebsites); //.shift removes the FIRST item from an array
*/

/*
//faveWebsites list
//.unshift
let faveWebsites = [
    "youtube",
    "netflix",
    "amazon",
];

faveWebsites.unshift("wikipedia");//.unshift adds new entries to the end of the list
console.log(faveWebsites); 
*/

/*
//faveWebsites list
//.slice
let faveWebsites = [
    "youtube",
    "netflix",
    "amazon",
    "cheese.com"
];

console.log(faveWebsites.slice(1,3));//.slice command returns a portion of the array as specified betweent he start and end points in the brackets
*/


/*
//faveWebsites list
//.splice
let faveWebsites = [
    "youtube",
    "netflix",
    "amazon",
    "cheese.com"
];
faveWebsites.splice(2, 1, "fridges.com", "grapes.com");//.splice allows you to both insert and remove 
//data at the same time. The first integer specifies which index in the array to operate. 
//the 2nd integer specifies how many items to remove from the array.
// the following new array items will be inserted into the new array at the specified point.
console.log(faveWebsites);
*/

/*
let faveWebsites = [
    "youtube",
    "netflix",
    "amazon",
    "cheese.com",
    "flipflops",
    "hammers",
];
faveWebsites.splice(3, 4);
console.log(faveWebsites);
*/

/*
const sandwichOrder = (topping1, topping2, topping3, topping4, topping5) =>{
    console.log(`Sandwich with ${topping1}, ${topping2}, ${topping3}, ${topping4} and don't forget the ${topping5}!!`)
}

sandwichOrder("ham", "olives", "cheese", "bacon", "turkey")
*/

/*
for( i = 0 ; i < 10 ; i++ ){
    console.log(i)
} //counts from 0 to 9 and logs it in the console
*/

/*
for( i = 9 ; i > -1 ; i-- ){
    console.log(i)
} 


for ( i = 0; i < 6; i++ ){
    console.log(Math.random() * 49 + 1);
}
*/

/*
let faveFilm = [
    "Fargo",
    "A Serious Man",
    "Barton Fink"
];

faveFilm.push ("Oh Brother Where Art Thou", "Miller's Crossing")

for (filmIndex = 0; filmIndex < faveFilm.length; filmIndex++){
    console.log(faveFilm[filmIndex])
}//this code takes the faveFIlm list containing 3 films, then adds 2 more to it via push
// the for loop then asks it to loop through the entries starting at index 0, counting for however many entries there are, plus 1
*/

/*
let cards = ["Diamond", "Spade", "Heart", "Club"];
let currentCard = "";
while(currentCard != "Spade"){
 console.log(currentCard);
 currentCard = cards[Math.floor(Math.random()*4)];
}
console.log(currentCard);//this while loop counts through the 4 suits at random until it encounters a spade. then it stops.
*/


/*
let faveFilm = [
    "Fargo",
    "Ghostbusters",
    "Barton Fink"
];

faveFilm.push ("Oh Brother Where Art Thou", "Miller's Crossing");

for (filmIndex = 0; filmIndex < faveFilm.length; filmIndex++){
    console.log(faveFilm[filmIndex]);
}
const filmCheck = () => {
if (faveFilm[2] == "Ghostbusters") {
    console.log ("Yay it's Ghostbusters");
}
    else  {
    console.log ("Booooo, we want Ghostbusters");
}
}

filmCheck()
*/
//this function checks to see if ghostbusters is the 3rd film listed (or 2nd index position in the array)

/*
let faveMovie = [
    "cheese",
    "ham",
    "ghostbusters",
    "fleas",
];

for (movieIndex = 0; movieIndex < faveMovie.length; movieIndex++){
    console.log(faveMovie[movieIndex]);
}
const movieCheck = () => {
    if (faveMovie[2] == "ghostbusters"){
        console.log("yay its ghostbusters")
    }
    else {
        console.log("boooo")
    }
}
movieCheck()
*/

console.log ("hello wolrd")

