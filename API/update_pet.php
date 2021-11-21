<?php

include "config.php";

$input = file_get_contents("php://input");
$data = json_decode($input, true);
$message = array();

$pet_id = $_GET['pet_id'];
$user_id = $data['user_id'];
$pet_image = $data['pet_image'];
$pet_name = $data['pet_name'];
$pet_breed = $data['pet_breed'];
$pet_gender = $data['pet_gender'];	


$query = mysqli_query($con ,"UPDATE pet_table SET 
							user_id = '$user_id',
							pet_image = '$pet_image',
							pet_name = '$pet_name',
							pet_breed = '$pet_breed', 
							pet_gender = '$pet_gender'
							WHERE pet_id = '$pet_id' LIMIT 1");

	if($query){
		http_response_code(201);
		$message['status'] = "SUCCESS";
	}else{
		http_response_code(422);
		$message['status'] = "ERROR";
	}


	echo json_encode($message);
	echo mysqli_error($con);

?>








