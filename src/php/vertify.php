<?php

	require_once('connection.php');

	$tel = isset($_GET['usertel'])?$_GET['usertel']:null;

	$sql ='SELECT tel FROM userinfo';

	$res = $mysqli -> query($sql);

	if($mysqli -> errno){
		echo $mysqli -> error;
		exit();
	}

	$noneTel = true;
	while($row = $res->fetch_assoc()){
		if($row['tel'] == $tel){
			$noneTel = false;
		}
	}

	if($noneTel == true){
		echo '1';
	}else{
		echo '0';
	}