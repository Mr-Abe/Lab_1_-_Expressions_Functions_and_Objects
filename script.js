/**************************************
TITLE: Lab 1 - Expressions, Functions and Objects
AUTHOR: Dwight Abrahams (DA)
CREATE DATE: 12 Jan 2023
PURPOSE: This program shows a basic understanding of using html, css, and javascript from individual files.
LAST MODIFIED ON: 14 Jan 2023
LAST MODIFIED BY: Dwight Abrahams (DA)
MODIFICATION HISTORY:
23 Jan 2023 - Created and completed files. (DA)
23 Jan 2023 - Added a header block comment. (DA)
23 Jan 2023 - Added lab title to file. (DA)
24 Jan 2023 - Added functions and object. (DA)
**************************************/

// Global variables
var strPageTitle = "Lab 1 - Expressions, Functions and Objects";
var intYearsOfExperience = 5;
var bolStudent = true;

var strSchools = ["IUPUI", "UTSA", "UIW", "AMU"]; // Array of string values for schools
var intCollegeCosts = [10000, 20000, 30000, 40000]; // Array of integer values for college costs

/***********************************************************************
Function: displayInfo
Purpose: Displays information to the user
Parameters:
- elementId: The id of the element to display the information in
- value: The value to display
Returns:
- Nothing
**********************************************************************/
function displayInfo(elementId, value) {
document.getElementById(elementId).textContent = value;
}

/********************************************************************
Object: person
Purpose: Holds information about a person
Properties:
- firstName: The first name of the person
- lastName: The last name of the person
- age: The age of the person
- yearsOfExperience: The years of experience of the person
- student: Whether the person is a student or not
- school: The school the person is attending
- collegeCost: The cost of attending the school
Methods:
- displayInfo: Displays information about the person
**********************************************************************/
var person = {
firstName: "John",
lastName: "Doe",
age: 25,
yearsOfExperience: intYearsOfExperience,
student: bolStudent,
school: strSchools[1],
collegeCost: intCollegeCosts[1],
displayInfo: function() {
document.getElementById("name").textContent = Name: ${this.firstName} ${this.lastName};
document.getElementById("age").textContent = Age: ${this.age};
document.getElementById("student").textContent = Student: ${this.student};
document.getElementById("school").textContent = School: ${this.school};
document.getElementById("cost").textContent = College Cost: $${this.collegeCost};
}
}

// function to run when the page loads
window.onload = function () {
displayInfo("pageTitle", strPageTitle);
displayInfo("output", "Hello World!");
person.displayInfo();
}