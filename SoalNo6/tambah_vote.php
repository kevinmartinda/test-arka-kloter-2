<?php 
	require_once('./config.php');
	$id = $_GET['id'];
	$query = mysqli_query($conn, "UPDATE candidates set earned_vote = earned_vote+1 WHERE id = {$id}");

	if ($query) {
		header('location: index.php?status=sukses_tambah');
	}
 ?>