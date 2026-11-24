const contactForm = document.getElementById("contactForm");
contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const firstName = document.getElementById("first-name").value;
    const lastName = document.getElementById("last-name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    alert("Thank you, " + firstName + " " + lastName + "! Your message has been submitted successfully.");

    contactForm.reset();
});