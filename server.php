<?php

require_once 'connect_db.php';

session_start();


//save cms

if ( isset( $_POST[ 'save' ] ) ) {
	var_dump($_POST);

	$evenement = mysqli_real_escape_string($conn, $_POST['evenement']);
	for($i = 0; $i < count($_POST['evenement']); $i++) {


	$sql = "INSERT INTO evenementen (evenement) VALUES ('$evenement')";

	if ($conn->query($sql) === TRUE) {
		echo "New record created successfully";
	} else {
		echo "Error: " . $sql . "<br>" . $conn->error;
	}
}
}
