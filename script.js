document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    let response = document.getElementById("responseMessage");

    if (name === "" || email === "" || message === "") {
        response.style.color = "red";
        response.textContent = "Please fill all fields!";
    } else {
        response.style.color = "green";
        response.textContent = "Message sent successfully!";
        
        // Clear form
        document.getElementById("contactForm").reset();
    }
});