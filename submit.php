<?php
    $Name=$_POST['Name'];
    $Email=$_POST['Email'];
    $Age=$_POST['age'];
    $gender=$_POST['Gender'];
    $political_affiliation=$_POST['political_affiliation'];
    $Preferred_Political_Issues =$_POST['Preferred Political Issues '];
    $Additional_Comments=$_POST['Additional comments'];

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