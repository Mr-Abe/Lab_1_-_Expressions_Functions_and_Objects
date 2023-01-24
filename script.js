/**************************************
TITLE: Lab 1 - Expressions, Functions and Objects
AUTHOR: Dwight Abrahams (DA)
CREATE DATE: 12 Jan 2023
PURPOSE: This program shows a basic understanding of using html, css, and javascript from individual files.
LAST MODIFIED ON: 14 Jan 2023
LAST MODIFIED BY: Dwight Abrahams (DA)
MODIFICATION HISTORY:
12 Jan 2023 - Created and completed files. (DA)
13 Jan 2023 - Added a header block comment. (DA)
14 Jan 2023 - Added lab title to file. (DA)
**************************************/

// Global variables
var strPageTitle = "Lab 1 - Expressions, Functions and Objects";
var intYearsOfExperience = 5;
var bolStudent = true;

/**********************************
Function: displayInfo
Purpose: Displays information to the user
Parameters:
    - elementId: The id of the element to display the information in
    - value: The value to display
Returns:
    - Nothing
 *********************************/
function displayInfo(elementId, value) {
  switch (elementId) {
      case "pageTitle":
          document.getElementById(elementId).innerHTML = strPageTitle;
          break;
      case "output":
          document.getElementById(elementId).innerHTML = value;
          break;
      default:
          break;
  }
}

// function to run when the page loads
window.onload = function () {
    displayInfo("pageTitle", strPageTitle);
    displayInfo("output", "Hello World!");
}