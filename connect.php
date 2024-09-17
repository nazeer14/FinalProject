<?php
    $firstname=$_POST['firstname'];
    $lastname=$_POST['lastname'];
    $hallticketno=$_POST['Hall ticket no'];
    $pincode=$_POST['pincode'];
    $year=$_POST['year'];
    $branch=$_POST['branch'];
    $email=$_POST['email'];

    $conn= new mysqli('localhost','root','','connect');
    if($conn->connect_error){
        die('Connection Failed: '.$conn->connect_error );
    }else{
        $stmt = $conn->prepare("insert into Student Information(firstname, lastname, hall ticket no,branch ,year ,email ,phone ,gender )
        values(?, ?, ?, ?, ?, ?, ?, ?)");
        $stmt->bind_param("sssssssi",$firstname,$lastname,$hallticketno,$branch,$year,$email,$phone,$gender);
        echo "Submitted Successfully...";
        $stmt->close();
        $stmt->close();
    }
?>