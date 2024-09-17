function submitData() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;

    // Validate the data before submission (you may add more validation logic)

    // Create a FormData object
    var formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);

    // Use fetch API to send data to the server
    fetch("submit.php", {
        method: "POST",
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        // Handle the response from the server (e.g., show a success message)
        console.log(data);
    })
    .catch(error => {
        console.error("Error:", error);
    });
}
