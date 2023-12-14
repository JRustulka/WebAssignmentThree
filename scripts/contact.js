// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.
var submit = document.getElementById("submit-button");
var page = document.getElementById("contact-page");

submit.onclick = function() {
    page.innerHTML = "<p>Thank you for your message</p>";
};
// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.

