var firstName = "John";
var surName = "Smith";

var age = 25;
var retirementAge = 67;

console.log("you" + " " + "can" + "add" + " " + "strings" + " " + "together");

console.log(`or use template literals to output details for Mr. ${surName} `);

// TODO: log out the full name "John Smith" by concatenating the variables firstName and surName
var fullName = firstName + " " + surName;
console.log(fullName);
// TODO: log out "John Smith and I amd 25 years old"
var fullNameAge = firstName + " " + surName + " " + "and I am " + age + " " + "years old";
console.log(fullNameAge);
// TODO: Create a variable to store the number of years until retirement
var yearsToRetirement = retirementAge - age;
var strToRetirement = "I have " + yearsToRetirement + " years until retirement" 
// TODO: log out "I have 42 years until retirement"
console.log (strToRetirement);