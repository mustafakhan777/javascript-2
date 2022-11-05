// var spec = prompt("Your Species?","Human")


var question = "Your species?";
var defaultAnswer = "human";
var spec = prompt(question, defaultAnswer);
console.log(spec)

var numberOfCats = +prompt("How many cats?");
var tooManyCats = numberOfCats+1;
console.log(tooManyCats)

var x = prompt("Where does the Pope live?");
// if (x === "Vatican") {
// alert("Correct!");
// }

var correctAnswer = "Vatican";
// if (x === correctAnswer) {
// alert("Correct!");
// }

if (x === correctAnswer) {
userIQ = "genius";
// alert("Correct!");
}

if (x === "Vatican") {
alert("Correct!");
}
else if (x === "Rome") {
alert("Wrong answer But Close");
} else {alert ("Wrong Answer") }

var yourTicketNumber = 487209;
var yourTicketNumber = prompt("Your Ticket Number")
if (yourTicketNumber !== 487208) {
alert("Better luck next time.");
}

var weight = 301;
var Time = 6;
var age = 18;
var gender = "female";

if (weight > 300 && Time < 6 && age > 17 || gender === "male") {
alert("Come to our tryout!");
}
else {
alert("Come to our cookout!");
}

var Name = "Ahmed";
var Age = 18;
var standard = "Matric";

if (Name === "Ahmed" || 18 <= Age > 17) {
if (standard === "Matric") {
    alert("Don't Allow")
} else{
    alert("Allow")
} }else {
    alert("Dont Allow")
} 
