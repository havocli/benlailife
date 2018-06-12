<?php
$mysqli = new mysqli('localhost', 'root', 'root');

if($mysqli->connect_errno) {
	echo $mysqli->connect_error;
	// 退出
	exit();
}

// 选择数据库
$mysqli->select_db('register');

// 设置字符集
$mysqli->set_charset('utf8');