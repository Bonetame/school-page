document.querySelector("button").addEventListener("click", function() {
    alert("Welcome to My School!");
});
document.querySelector(".contact-form").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Message sent successfully!");
});