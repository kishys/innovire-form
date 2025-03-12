document.getElementById("registerForm").addEventListener("submit", function(event) {

    let formData = {
        firstname: document.getElementById("firstname").value,
        lastname: document.getElementById("lastname").value,
        email: document.getElementById("email").value,
        grade: document.getElementById("grade").value,
        findout: document.getElementById("how").value,
        questions: document.getElementById("extra").value
    };

    // Send data to Google Apps Script
    fetch("https://script.google.com/macros/s/AKfycbwUivjsOR0hRMp-gqYLT7QgFIFTCFuLUZOBzARSr4MbaZzdDiR2TdbeuCu1YGexZiBPQg/exec", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
    })
    .then(response => response.text()) 
    .then(data => {
        console.log("Response from server:", data);
        window.location.href = "thanks.html"; // Redirect AFTER sending data
    })
    .catch(error => console.error("Fetch Error:", error));
});
