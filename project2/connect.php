<?php
	$servername ="localhost";
	$username = "root";
	$password = "";
	$dbname = "nazeer";
	
	$conn= mysqli_connect($servername,$username,$password,$dbname);
	
	if($conn)
	{

		echo "Connection OK";
	}
	else
	{
		echo "Connection Faild". mysqli_connect_error();
	}

?>