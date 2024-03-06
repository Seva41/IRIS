// IRIS
// Version: 1.0
// By: Seva41

// Create a new script element
var irInclude = document.createElement("script");

// Set the source attribute of the script element to load the OCRAD library
irInclude.src = "http://antimatter15.com/ocrad.js/ocrad.js";

// Append the script element to the body of the document
document.body.appendChild(irInclude);


irInclude.onload = function() {
    // Create a new image element
    var captcha = new Image();

    // Set the source attribute of the image element to the source of the first image in the document
    captcha.src = document.images[0].currentSrc;

    // Create a canvas element and get its 2D rendering context
    var context = document.createElement('canvas').getContext('2d');

    // Draw the captcha image onto the canvas
    context.drawImage(captcha, 0, 0);

    // Get the image data of the drawn captcha image from the canvas
    var Data = context.getData(0, 0, 250, 50);

    // Use the OCRAD library to recognize the text in the captcha image
    var solution = OCRAD(Data);

    // Set the recognized captcha value into a form input field named "input"
    document.forms[0].input.value = solution;

    // Submit the form
    document.forms[0].submit();
};
