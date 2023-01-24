/**************************************
TITLE: Getting Started Lab (Lab 1)
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
var strUserName = "John Doe"; // Declare a string variable to hold the user's name
var intAge = 25;  // Declare an integer variable to hold the user's age
var bolEmployed = true; // Declare a boolean variable to hold the user's employment status


/**************************************
NAME:  displayUserInfo
PURPOSE:  This function displays the user's name and age in a bio.
PARAMETERS:
        None
RETURN VALUE:
        None
**************************************/
function displayUserInfo() {
    document.getElementById("name").textContent = strUserName;
    document.getElementById("bio").textContent = `I am ${intAge} years old and currently ${bolEmployed ? "employed" : "unemployed"}.`;
}

// Arrays
var strHobbies = ["reading", "hiking", "traveling", "cooking", "coding"];  // Create an array of strings to hold the user's hobbies
var intYearsExperience = [5, 3, 2, 1, 4];  // Create an array of integers to hold the user's years of experience in each hobby

/**************************************
NAME:  displayUserHobbies
PURPOSE:  This function displays the user's hobbies and years of experience in each hobby.
PARAMETERS:
        None
RETURN VALUE:
        None
**************************************/
function displayUserHobbies() {
    document.getElementById("hobbies").textContent = `My hobbies are ${strHobbies.join(", ")}`;
    document.getElementById("experience").textContent = `I have ${intYearsExperience[0]} years of experience in ${strHobbies[0]}, ${intYearsExperience[1]} years of experience in ${strHobbies[1]}, ${intYearsExperience[2]} years of experience in ${strHobbies[2]}, ${intYearsExperience[3]} years of experience in ${strHobbies[3]} and ${intYearsExperience[4]} years of experience in ${strHobbies[4]}.`;
}

/************************************
OBJECTS Name: user
PURPOSE: This object contains the user's contact information and methods to display the information and calculate the user's age.
PROPERTIES: strAddress, strPhone, intDOB
METHODS: displayContactInfo, calculateAge, roundNumber, getTime
***********************************/
var user = {
    strAddress: "420 University Blvd",
    strPhone: "317-274-4591",
    intDOB: 1985,
    displayContactInfo: function() {
        document.getElementById("address").textContent = `Home address: ${this.strAddress}`;
        document.getElementById("phone").textContent = `Phone number: ${this.strPhone}`;
    },
    calculateAge: function() {
        return new Date().getFullYear() - this.intDOB;
    },
    roundNumber: function (num) {
        return Math.round(num);
    },
    getTime: function () {
        return new Date().toLocaleTimeString();
    }
}

// Function to display the user's contact information
function displayContactInfo() {
    document.getElementById("address").textContent = `Home address: ${user.strAddress}`;
    user.strAddress += "\nIndianapolis, IN 46202";
    document.getElementById("updatedAddress").textContent = `Modified address: ${user.strAddress}`;
    document.getElementById("phone").textContent = `Phone number: ${user.strPhone}`;
}


// Function to calculate the user's age
function calculateAge() {
    document.getElementById("age").textContent = `Age: ${user.calculateAge()}`;
}

// Function to round a number
function roundNumber() {
    var number = 3.1415;
    document.getElementById("round").textContent = `Rounded number: ${user.roundNumber(number)}`;
}

// Function to get current time
function getTime() {
    document.getElementById("time").textContent = `Current time: ${user.getTime()}`;
}

// Function called when the window has been loaded
window.onload = function() {
    displayUserInfo();
    displayUserHobbies();
    displayContactInfo();
    calculateAge();
    roundNumber();
    getTime();
    updateAddress();
};
