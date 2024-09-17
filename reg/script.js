document.addEventListener("DOMContentLoaded", function() {
    const registrationForm = document.getElementById("registrationForm");
    const outputSection = document.getElementById("outputSection");

    registrationForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const username = document.getElementById("username").value;
        const email = document.getElementById("email").value;

        // Use AJAX to send data to the server
        const xhr = new XMLHttpRequest();
        xhr.open("POST", "process.php", true);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4 && xhr.status == 200) {
                outputSection.innerHTML = xhr.responseText;
            }
        };

        const data = "username=" + encodeURIComponent(username) + "&email=" + encodeURIComponent(email);
        xhr.send(data);
    });
});
