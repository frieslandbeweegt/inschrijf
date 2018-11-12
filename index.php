<?php
include( 'server.php' );

?>

<!DOCTYPE html>
<html>
<head>


	<meta charset="utf-8">
	<title>Inschrijf</title>
	<!-- Bootstrap core CSS -->
	<link href="css/bootstrap.min.css" rel="stylesheet">
	<link href="css/bootstrap-grid.min.css" rel="stylesheet">
	<link href="css/bootstrap-reboot.min.css" rel="stylesheet">
	<link href="css/style.css" rel="stylesheet">

	<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/solid.css" integrity="sha384-VGP9aw4WtGH/uPAOseYxZ+Vz/vaTb1ehm1bwx92Fm8dTrE+3boLfF1SpAtB1z7HW" crossorigin="anonymous">
	<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/regular.css" integrity="sha384-ZlNfXjxAqKFWCwMwQFGhmMh3i89dWDnaFU2/VZg9CvsMGA7hXHQsPIqS+JIAmgEq" crossorigin="anonymous">
	<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/brands.css" integrity="sha384-rf1bqOAj3+pw6NqYrtaE1/4Se2NBwkIfeYbsFdtiR6TQz0acWiwJbv1IM/Nt/ite" crossorigin="anonymous">
	<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/fontawesome.css" integrity="sha384-1rquJLNOM3ijoueaaeS5m+McXPJCGdr5HcA03/VHXxcp2kX2sUrQDmFc3jR5i/C7" crossorigin="anonymous">
</head>

<body>

	<div class="container">
		<form name="save" method="post" action="index.php">
			<div class="text-center">
				<input name="title" type="text" class="form-control" id="title" aria-describedby="title" placeholder="Title">
			</div>

			<h3 class="evenement">Evenementen</h3>

			<div class="row">
				<div class="col-md-11">
					<div class="main-event">
						<div class="evenementen">
							<div class="row" style="margin-bottom: 10px;">
								<div class="col-md-2">
									<div class="btn btn-danger minEvent">
										<i class="fas fa-minus"></i>
									</div>
								</div>
								<div class="col-md-10">
									<input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="evenement" name="evenement" placeholder="Evenement">
								</div>

								<div class="col-md-6">

									<div class="form-check">
										<input class="form-check-input inlineCheckbox1" type="checkbox" id="" value="option1" onClick="showInput()">
										<label class="form-check-label" for="inlineCheckbox1">Extra mensen</label>
										<input type="number" class="form-control max_extra" placeholder="max extra deelnemers" style="display: none;">
									</div>


									<div class="form-check">
										<input class="form-check-input inlineCheckbox2" type="checkbox" value="option2" onClick="showInput2();">
										<label class="form-check-label" for="inlineCheckbox2">Vervoer</label>

										<div class="vervoer_zelf" style="display: none;">
											<div class="row">
												<div class="col-md-10 columnVervoer">
													<div class="box">
														<div class="row">
															<div class="col-md-2">
																<div class="btn minVervoer">
																	<i class="fas fa-minus"></i>
																</div>
															</div>
															<div class="col-md-6">
																<input type="text" class="form-control" placeholder="Vervoer zelf">
															</div>
															<div class="col-md-4 input-group">
																<div class="input-group-prepend">
																	<span class="input-group-text" id="basic-addon1">€</span>
																</div>
																<input type="text" class="form-control" placeholder="costs">
															</div>
														</div>
													</div>
												</div>
												<div class="col-md-2">
													<div class="btn addVervoer">
														<i class="fas fa-plus"></i>
													</div>
												</div>
											</div>
										</div>
									</div>



									<div class="form-check">
										<input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="option2">
										<label class="form-check-label" for="inlineCheckbox3">Vegetarich</label>
									</div>


									<div class="form-check">
										<input class="form-check-input" type="checkbox" id="inlineCheckbox4" value="option2" onClick="showInput3();">
										<label class="form-check-label" for="inlineCheckbox4">Edities</label>

										<div id="editie" style="display: none;">
											<div class="row">
												<div class="col-md-10 columnEditie">
													<div>
														<div class="row">
															<div class="col-md-2">
																<div class="btn minEditie">
																	<i class="fas fa-minus"></i>
																</div>
															</div>
															<div class="col-md-6">
																<input type="text" class="form-control" placeholder="Editie">
															</div>
															<div class="col-md-4 input-group">
																<div class="input-group-prepend">
																	<span class="input-group-text" id="basic-addon2">€</span>
																</div>
																<input type="text" class="form-control" placeholder="costs">
															</div>
														</div>
													</div>
												</div>
												<div class="col-md-2">
													<div class="btn addEditie">
														<i class="fas fa-plus"></i>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="col-md-6">

									<div class="form-check">
										<input class="form-check-input" type="checkbox" id="inlineCheckbox5" value="option1" onClick="showInput4();">
										<label class="form-check-label" for="inlineCheckbox5">Accomodatie</label>

										<div id="accomodatie" style="display: none;">
											<div class="row">
												<div class="col-md-10 columnAccomodatie">
													<div>
														<div class="row">
															<div class="col-md-2">
																<div class="btn minAccomodatie">
																	<i class="fas fa-minus"></i>
																</div>
															</div>
															<div class="col-md-6">
																<input type="text" class="form-control" placeholder="Accomodatie">
															</div>
															<div class="col-md-4 input-group">
																<div class="input-group-prepend">
																	<span class="input-group-text" id="basic-addon3">€</span>
																</div>
																<input type="text" class="form-control" placeholder="costs">
															</div>
														</div>
													</div>
												</div>
												<div class="col-md-2">
													<div class="btn addAccomodatie">
														<i class="fas fa-plus"></i>
													</div>
												</div>
											</div>
										</div>
									</div>


									<div class="form-check">
										<input class="form-check-input" type="checkbox" id="inlineCheckbox6" value="option2">
										<label class="form-check-label" for="inlineCheckbox6">Annuleringsverzekering</label>
									</div>


									<div class="form-check">
										<input class="form-check-input" type="checkbox" id="inlineCheckbox7" value="option2" onClick="showInput5();">
										<label class="form-check-label" for="inlineCheckbox7">Verhuur</label>
										
										<div id="verhuur" style="display: none;">
											<div class="row">
												<div class="col-md-10 columnVerhuur">
													<div>
														<div class="row">
															<div class="col-md-2">
																<div class="btn minVerhuur">
																	<i class="fas fa-minus"></i>
																</div>
															</div>
															<div class="col-md-6">
																<input type="text" class="form-control" placeholder="Verhuur">
															</div>
															<div class="col-md-4 input-group">
																<div class="input-group-prepend">
																	<span class="input-group-text" id="basic-addon3">€</span>
																</div>
																<input type="text" class="form-control" placeholder="costs">
															</div>
														</div>
													</div>
												</div>
												<div class="col-md-2">
													<div class="btn addVerhuur">
														<i class="fas fa-plus"></i>
													</div>
												</div>
											</div>
										</div>
										
										
									</div>
								</div>
								<div class="col-md-4">
									<h6>Extra</h6>
									<input type="text" class="form-control" id="Prijs" aria-describedby="prijs" placeholder="Prijs">
									<input type="number" class="form-control" id="max_deelname" placeholder="Max deelname" style="margin-top: 10px;">
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="col-md-1">
					<div class="btn btn-primary addEvent">
						<i class="fas fa-plus"></i>
					</div>
				</div>
			</div>

			<div class="text-center">
				<button name="save" class="btn btn-success saveBtn">Save</button>
			</div>
		</form>
	</div>

	<!-- Bootstrap core JavaScript -->
	<script src="https://code.jquery.com/jquery-3.3.1.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossorigin="anonymous"></script>
	<script src="js/bootstrap.min.js"></script>
	<script src="js/functions.js"></script>
	<script src="js/cms.js"></script>
</body>
</html>