<?php
// Assuming you have a MySQL database set up with a table called 'users'

// Replace these values with your actual database credentials
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "nazeer";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get user input from the form
$username = $_POST['username'];
$email = $_POST['email'];

// Insert data into the 'users' table
$sql = "INSERT INTO users (username, email) VALUES ('$username', '$email')";

if ($conn->query($sql) === TRUE) {
    echo "<p>Registration successful! Thank you for registering.</p>";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

// Close the connection
$conn->close();
?>
