<?php

	require_once('connection.php');

	$tel = isset($_GET['usertel'])?$_GET['usertel']:null;
	$password = isset($_GET['password'])?$_GET['password']:null;

	$sql = 'SELECT tel,password FROM userinfo WHERE tel = "'.$tel.'" and password = "'.$password.'"';

	$res = $mysqli -> query($sql);

	if($mysqli->errno){
		echo $mysqli->error;
		exit();
	}

	if($res->num_rows > 0){
		echo '1';
	}else{
		echo '0';
	}