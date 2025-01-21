// JavaScript function to display project details
function showProjectDetails(projectName) {
    alert("You clicked on: " + projectName);
}

// Handling form submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents page refresh on form submission
    
    // Gather form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // For now, we'll just show an alert
    alert(`Message sent!\nName: ${name}\nEmail: ${email}\nMessage: ${message}`);
    
    // Clear the form
    document.getElementById('contact-form').reset();
});
