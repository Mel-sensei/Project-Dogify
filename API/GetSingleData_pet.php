<?php

include "config.php";

$data = array();
$pet_id = $_GET['pet_id'];
$query = mysqli_query($con, "SELECT * FROM pet_table WHERE pet_id = $pet_id limit 1");

while($row = mysqli_fetch_object($query)){
	$data[] = $row;
}

	echo json_encode($data);
	echo mysqli_error($con);

?>