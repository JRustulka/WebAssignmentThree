/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

var dayCost = document.getElementById("calculated-cost");
var monday = document.getElementById("monday");
var tuesday = document.getElementById("tuesday");
var wednesday = document.getElementById("wednesday");
var thursday = document.getElementById("thursday");
var friday = document.getElementById("friday");
var half = document.getElementById("half");
var full= document.getElementById("full");
var clear = document.getElementById("clear-button");
var rate = 35;

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

monday.onclick = function() {
    monday.setAttribute("class", "clicked blue-hover");
    recalculate();
};

tuesday.onclick = function() {
    tuesday.setAttribute("class", "clicked blue-hover");
    recalculate();
};

wednesday.onclick = function() {
    wednesday.setAttribute("class", "clicked blue-hover");
    recalculate();
};

thursday.onclick = function() {
    thursday.setAttribute("class", "clicked blue-hover");
    recalculate();
};

friday.onclick = function() {
    friday.setAttribute("class", "clicked blue-hover");
    recalculate();
};



/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

clear.onclick = function() {
    monday.setAttribute("class", "blue-hover");
    tuesday.setAttribute("class", "blue-hover");
    wednesday.setAttribute("class", "blue-hover");
    thursday.setAttribute("class", "blue-hover");
    friday.setAttribute("class", "blue-hover");
    recalculate();
};




/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

half.onclick = function() {
    rate = 20;
    half.setAttribute("class", "clicked small-button blue-hover");
    full.setAttribute("class", "small-button blue-hover");
    recalculate();
    console.log("Yup");
};


// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

full.onclick = function() {
    rate = 35;
    full.setAttribute("class", "clicked small-button blue-hover");
    half.setAttribute("class", "small-button blue-hover");
    recalculate();
};

/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

function recalculate() {
    dayCost = document.getElementById("calculated-cost");
    dayCost = 0;
    if (monday.classList.contains("clicked blue-hover")) {
        dayCost += rate;
    }
    if (tuesday.classList.contains("clicked blue-hover")) {
        dayCost += rate;
    }
    if (wednesday.classList.contains("clicked blue-hover")) {
        dayCost += rate;
    }
    if (thursday.classList.contains("clicked blue-hover")) {
        dayCost += rate;
    }
    if (friday.classList.contains("clicked blue-hover")) {
        dayCost += rate;
    }
    dayCost.innerHTML = dayCost;
}
// I tried many things here but JS is hard to debug.
