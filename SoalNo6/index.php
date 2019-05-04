<?php require_once('config.php'); ?>
<?php 
	$data = mysqli_query($conn, "SELECT * FROM candidates");
 ?>
<!DOCTYPE html>
<html>
<head>
	<title>SoalNo6</title>
	<meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.0/jquery.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
</head>
<body>
<div class="container">
  <h2>Quick Count(?)</h2>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
  consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
  cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
  proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
  <div class="row">
  	<?php foreach ($data as $datum): ?>
  	<div class="col-md-4">	
	  <div class="card" style="width:400px">
	    <img class="card-img-top" src="https://www.w3schools.com/bootstrap4/img_avatar3.png" alt="Card image" style="width:100%">
	    <div class="card-body">
	      <h4 class="card-title"><?=$datum['name']?></h4>
	      <p class="card-text">Perolehan Suara: <?=$datum['earned_vote']?></p>

	      <a href="./tambah_vote.php?id=<?=$datum['id']?>" class="btn btn-primary">[+] Tambah</a>
	    </div>
	  </div>
  	</div> 
  	<?php endforeach ?>

  </div>


</div>
	<?php if (isset($_GET['status'])): ?>
		<script>
			alert("<?=$_GET['status']?>")
		</script>
	<?php endif ?>
</body>
</html>