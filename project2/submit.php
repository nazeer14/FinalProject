<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Retrieve data from the POST request
    $name = $_POST["name"];
    $email = $_POST["email"];

    // You should perform proper validation and sanitization here

    // Store the data in the database
    include_once("process.php");
    include_once("connection.php");

    $database = new DatabaseConnection();
    $connection = $database->getConnection();

    $dataEntry = new DataEntry($connection);
    $dataEntry->insertData($name, $email);

    echo "Data submitted successfully!";
} else {
    echo "Invalid request method";
}
?>
