/**************************************
TITLE: Lab 1 - Expressions, Functions and Objects
AUTHOR: Dwight Abrahams (DA)
CREATE DATE: 23 Jan 2023
PURPOSE: This program shows a basic understanding of using html, css, and javascript from individual files.
LAST MODIFIED ON: 25 Jan 2023
LAST MODIFIED BY: Dwight Abrahams (DA)
MODIFICATION HISTORY:
23 Jan 2023 - Created and completed files. (DA)
23 Jan 2023 - Added a header block comment. (DA)
23 Jan 2023 - Added lab title to file. (DA)
24 Jan 2023 - Simplified HTML to match project requirements. (DA)
            - Added functions and object. (DA)
25 Jan 2023 - Added comments and reviewed project to lab requirements. (DA)
**************************************/

//Declare a string variable.
let strName = "John";
let strPageTitle = "Lab 1 - Expressions, Functions and Objects";


//Declare an integer variable.
let intAge = 25;

//Declare a Boolean variable.
let bolIsStudent = true;

// Create a simple function that sends output to the page using textContent or innerHTML.
/********************************************
Function: displayOutput
Purpose: Displays output to the page.
Parameters: 
    id - The id of the element to display the output to.
    output - The output to display.
Returns: None
**********************************************/
function displayOutput(id, output) {
    switch (id) {
        case "methodCalls":
            document.getElementById(id).textContent = "Method Calls: check the console ;)";
            break;
        default:
            document.getElementById(id).textContent = output;
            break;
    }
}

// Call your function three times to output all three different variables to three different page elements.
displayOutput("pageTitle", strPageTitle);
displayOutput("name", "Name: " + strName);
displayOutput("age", "Age: " + intAge);
displayOutput("student", "Is Student: " + bolIsStudent);
displayOutput("methodCalls");

// Create an array of strings.
let arrNames = ["John", "Jane", "Bob", "Emily", "Michael"];

// Create an array of integers.
let arrNumbers = [1,2,3,4,5];

// Use the function from step 7 to output the values of both arrays to page elements.
displayOutput("arrNames", "Names: " + arrNames);
displayOutput("arrNumbers", "Numbers: " + arrNumbers);

// Use five different arithmetic operators to change each of the values in the array of integers.
arrNumbers[0] += 1;
arrNumbers[1] -= 2;
arrNumbers[2] *= 3;
arrNumbers[3] /= 4;
arrNumbers[4] %= 5;

// Use five different string methods to change each of the values in the array of strings.
arrNames[0] = arrNames[0].toUpperCase();
arrNames[1] = arrNames[1].toLowerCase();
arrNames[2] = arrNames[2].replace("B", "J");
arrNames[3] = arrNames[3].slice(0,3);
arrNames[4] = arrNames[4].concat(" Smith");

// Use the function from step 7 to output the modified array of integers.
displayOutput("arrNumbersModified", "Modified Numbers: " + arrNumbers);

// Use the function from step 7 to output the modified array of strings.
displayOutput("arrNamesModified", "Modified Names: " + arrNames);

// Create an object.
let person = {
    name: "John",
    age: 25,
    getFullName: function() {
        return this.name;
    },
    getAge: function() {
        return this.age;
    },
    displayDetails: function(id) {
        displayOutput(id, "Name: " + this.name + " Age: " + this.age);
    },
    squareAge: function() {
        return Math.sqrt(this.age);
    },
    getBirthYear: function() {
        return new Date().getFullYear() - this.age;
    }
};

// Initialize the object's properties to visible values
person.name = "John Smith";

// Use the object's output method to output the values of the properties to the page
person.displayDetails("personDetails");

// Call the object's method that uses the Math Object.
console.log("Square Root of Age: " + person.squareAge());

// Call the object's method that uses the Date Object.
console.log("Birth Year: " + person.getBirthYear());

// Use dot notation inside a method to update at least one of the object's properties
person.age = 30;

// After modifying the properties, use the object's output method to send the property values to a different page element.
person.displayDetails("personDetailsUpdated");