<?php

include "config.php";

$input = file_get_contents("php://input");
$data = json_decode($input, true);
$message = array();

$user_id = $data['user_id'];
$pet_image = $data['pet_image'];
$pet_name = $data['pet_name'];
$pet_breed = $data['pet_breed'];
$pet_gender = $data['pet_gender'];	


$query = "INSERT INTO pet_table(user_id,pet_image,pet_name,pet_breed,pet_gender) 
		VALUES('$user_id','$pet_image','$pet_name','$pet_breed','$pet_gender') ";


	if(mysqli_query($con, $query)){
		http_response_code(201);
		$message['status'] = "SUCCESS";
	}else{
		http_response_code(422);
		$message['status'] = "ERROR";
	}

	echo json_encode($message);
	echo mysqli_error($con);
