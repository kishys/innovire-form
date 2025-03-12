document.getElementById("registerForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission

    let form = event.target;

    // Send data to FormSubmit
    fetch(form.action, {
        method: form.method,
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(new FormData(form)).toString()
    })
    .then(response => response.text())
    .then(data => {
        console.log("Response from server:", data);
        window.location.href = "thanks.html"; // Redirect AFTER sending data
    })
    .catch(error => console.error("Fetch Error:", error));
});