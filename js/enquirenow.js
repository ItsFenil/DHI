// Get the close button element
const closeButton = document.querySelector('.close-btn');

// Get the callback form element
const callbackForm = document.getElementById('callback-form');

// Function to close the form
function closeForm() {
  callbackForm.style.display = 'none';
}

// Add click event listener to the close button
closeButton.addEventListener('click', closeForm);
