<?php
	
	require_once('connection.php');

	$tel = isset($_GET['usertel'])?$_GET['usertel']:null;
	$password = isset($_GET['password'])?$_GET['password']:null;

	$sql = 'INSERT INTO userinfo(tel,password) VALUES("'.$tel.'","'.$password.'")';

	$res = $mysqli -> query($sql);

	if($mysqli -> errno){
		echo $mysqli -> error;
		exit();
	}

	echo $res;