
// Get the elements by their classes
var slides = document.getElementsByClassName("slide");
var prev = document.getElementsByClassName("prev")[0];
var next = document.getElementsByClassName("next")[0];

// Set the index of the current slide to 0
var slideIndex = 0;

// Show the first slide by default
showSlide(slideIndex);

// Define a function to show a slide based on the index
function showSlide(n) {
    
    // Loop through all slides and hide them
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Adjust the index if it is out of range
    if (n >= slides.length) {
        slideIndex = 0;
    }
    if (n < 0) {
        slideIndex = slides.length - 1;
    }

    // Show the slide with the current index
    slides[slideIndex].style.display = "block";
    
}

// Define a function to change the slide by adding a number to the index
function changeSlide(n) {
  
  // Show the slide with the new index
  showSlide(slideIndex += n);
  
}

// Add an event listener to the previous button to change the slide by -1
prev.addEventListener("click", function() {
  changeSlide(-1);
});

// Add an event listener to the next button to change the slide by +1
next.addEventListener("click", function() {
  changeSlide(1);
});
