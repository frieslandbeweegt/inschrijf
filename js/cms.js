var countVervoer = 1;
var count = 1;
var countInput = 1;
var countAccomodatie = 1;
var countVerhuur = 1;
$(".addEvent").click(function () {
	

	count++
	var rowEvent = '							<div class="row columnEvent' + count + '" style="margin-bottom: 10px;">\
								<div class="col-md-2">\
									<div class="btn btn-danger minEvent">\
										<i class="fas fa-minus"></i>\
									</div>\
								</div>\
								<div class="col-md-10">\
									<input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="evenement" name="evenement" placeholder="Evenement">\
								</div>\
								<div class="col-md-6">\
									<div class="form-check">\
										<input class="form-check-input inlineCheckbox1" type="checkbox" value="option1" onClick="showInput();">\
										<label class="form-check-label" for="inlineCheckbox1">Extra mensen</label>\
										<input type="number" class="form-control max_extra" placeholder="max extra deelnemers" style="display: none;">\
									</div>\
									<div class="form-check">\
										<input class="form-check-input inlineCheckbox2" type="checkbox" value="option2" onClick="showInput2();">\
										<label class="form-check-label" for="inlineCheckbox2">Vervoer</label>\
										<div class="vervoer_zelf" style="display: none;">\
											<div class="row">\
												<div class="col-md-10 columnVervoer">\
													<div>\
														<div class="row">\
															<div class="col-md-2">\
																<div class="btn minVervoer">\
																	<i class="fas fa-minus"></i>\
																</div>\
															</div>\
															<div class="col-md-6">\
																<input type="text" class="form-control" placeholder="Vervoer zelf">\
															</div>\
															<div class="col-md-4 input-group">\
																<div class="input-group-prepend">\
																	<span class="input-group-text" id="basic-addon1">€</span>\
																</div>\
																<input type="text" class="form-control" placeholder="costs">\
															</div>\
														</div>\
													</div>\
												</div>\
												<div class="col-md-2">\
													<div class="btn addVervoer">\
														<i class="fas fa-plus"></i>\
													</div>\
												</div>\
											</div>\
										</div>\
									</div>\
									<div class="form-check">\
										<input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="option2">\
										<label class="form-check-label" for="inlineCheckbox3">Vegetarich</label>\
									</div>\
									<div class="form-check">\
										<input class="form-check-input inlineCheckbox4" type="checkbox" value="option2" onClick="showInput3();">\
										<label class="form-check-label" for="inlineCheckbox4">Edities</label>\
										<div class="editie" style="display: none;">\
											<div class="row">\
												<div class="col-md-10 columnEditie">\
													<div>\
														<div class="row">\
															<div class="col-md-2">\
																<div class="btn minEditie">\
																	<i class="fas fa-minus"></i>\
																</div>\
															</div>\
															<div class="col-md-6">\
																<input type="text" class="form-control" placeholder="Editie">\
															</div>\
															<div class="col-md-4 input-group">\
																<div class="input-group-prepend">\
																	<span class="input-group-text" id="basic-addon2">€</span>\
																</div>\
																<input type="text" class="form-control" placeholder="costs">\
															</div>\
														</div>\
													</div>\
												</div>\
												<div class="col-md-2">\
													<div class="btn addEditie" onClick="showInputEditie();">\
														<i class="fas fa-plus"></i>\
													</div>\
												</div>\
											</div>\
										</div>\
									</div>\
								</div>\
								<div class="col-md-6">\
									<div class="form-check">\
										<input class="form-check-input inlineCheckbox5" type="checkbox" value="option1" onClick="showInput4();">\
										<label class="form-check-label" for="inlineCheckbox5">Accomodatie</label>\
										<div class="accomodatie" style="display: none;">\
											<div class="row">\
												<div class="col-md-10 columnAccomodatie">\
													<div>\
														<div class="row">\
															<div class="col-md-2">\
																<div class="btn minAccomodatie">\
																	<i class="fas fa-minus"></i>\
																</div>\
															</div>\
															<div class="col-md-6">\
																<input type="text" class="form-control" placeholder="Accomodatie">\
															</div>\
															<div class="col-md-4 input-group">\
																<div class="input-group-prepend">\
																	<span class="input-group-text" id="basic-addon3">€</span>\
																</div>\
																<input type="text" class="form-control" placeholder="costs">\
															</div>\
														</div>\
													</div>\
												</div>\
												<div class="col-md-2">\
													<div class="btn addAccomodatie" onClick="showInputAccomodatie();">\
														<i class="fas fa-plus"></i>\
													</div>\
												</div>\
											</div>\
										</div>\
									</div>\
									<div class="form-check">\
										<input class="form-check-input" type="checkbox" id="inlineCheckbox6" value="option2">\
										<label class="form-check-label" for="inlineCheckbox6">Annuleringsverzekering</label>\
									</div>\
									<div class="form-check">\
										<input class="form-check-input inlineCheckbox7" type="checkbox" value="option2" onClick="showInput5();">\
										<label class="form-check-label" for="inlineCheckbox7">Verhuur</label>\
										<div class="verhuur" style="display: none;">\
											<div class="row">\
												<div class="col-md-10 columnVerhuur">\
													<div>\
														<div class="row">\
															<div class="col-md-2">\
																<div class="btn minVerhuur">\
																	<i class="fas fa-minus"></i>\
																</div>\
															</div>\
															<div class="col-md-6">\
																<input type="text" class="form-control" placeholder="Verhuur">\
															</div>\
															<div class="col-md-4 input-group">\
																<div class="input-group-prepend">\
																	<span class="input-group-text" id="basic-addon3">€</span>\
																</div>\
																<input type="text" class="form-control" placeholder="costs">\
															</div>\
														</div>\
													</div>\
												</div>\
												<div class="col-md-2">\
													<div class="btn addVerhuur" onClick="showInputVerhuur();">\
														<i class="fas fa-plus"></i>\
													</div>\
												</div>\
											</div>\
										</div>\
									</div>\
								</div>\
								<div class="col-md-4">\
									<h6>Extra</h6>\
									<input type="text" class="form-control" id="Prijs" aria-describedby="prijs" placeholder="Prijs">\
									<input type="number" class="form-control" id="max_deelname" placeholder="Max deelname" style="margin-top: 10px;">\
								</div>\
							</div>';
	$(".main-event").append(rowEvent);

	console.log(count);

});

$(document).on('click', '.minEvent', function (e) {

	if ($(".minEvent").length > 1) {
		$(this).parent().parent().remove();
	}
});

//zelf vervoer in cms

$(document).on('click', ".addVervoer", function (e) {

	countVervoer++

	var vervoerAppend = '<div class="box' + countVervoer + '" style="margin-top: 10px;">\
														<div class="row">\
															<div class="col-md-2">\
																<div class="btn minVervoer">\
																	<i class="fas fa-minus"></i>\
																</div>\
															</div>\
															<div class="col-md-6">\
																<input type="text" class="form-control" placeholder="Vervoer zelf">\
															</div>\
															<div class="col-md-4 input-group">\
																<div class="input-group-prepend">\
																	<span class="input-group-text" id="basic-addon1">€</span>\
																</div>\
																<input type="text" class="form-control" placeholder="costs">\
															</div>\
														</div>';

	$(".columnVervoer").append(vervoerAppend);
});

$(document).on('click', '.minVervoer', function (e) {
	if ($(".minVervoer").length > 1) {
		$(this).parent().parent().parent().remove();
	}
});

//extra input editie cms

$(".addEditie").click(function () {
	
	countInput++
	
	var inputAppend = '<div class="box' + countInput + '" style="margin-top: 10px;">\
														<div class="row">\
															<div class="col-md-2">\
																<div class="btn minEditie">\
																	<i class="fas fa-minus"></i>\
																</div>\
															</div>\
															<div class="col-md-6">\
																<input type="text" class="form-control" placeholder="Editie">\
															</div>\
															<div class="col-md-4 input-group">\
																<div class="input-group-prepend">\
																	<span class="input-group-text" id="basic-addon2">€</span>\
																</div>\
																<input type="text" class="form-control" placeholder="costs">\
															</div>\
														</div>';
	
	$(".columnEditie").append(inputAppend);
});

$(document).on('click', '.minEditie', function (e) {
	if ($(".minEditie").length > 1) {
		$(this).parent().parent().parent().remove();
	}
});

//accomodatie inputs cms

$(".addAccomodatie").click(function () {
	
	countAccomodatie ++
	
	$(".columnAccomodatie").append('<div class="box' + countAccomodatie + '" style="margin-top: 10px;">\
														<div class="row">\
															<div class="col-md-2">\
																<div class="btn minAccomodatie">\
																	<i class="fas fa-minus"></i>\
																</div>\
															</div>\
															<div class="col-md-6">\
																<input type="text" class="form-control" placeholder="Accomodatie">\
															</div>\
															<div class="col-md-4 input-group">\
																<div class="input-group-prepend">\
																	<span class="input-group-text" id="basic-addon3">€</span>\
																</div>\
																<input type="text" class="form-control" placeholder="costs">\
															</div>\
														</div>');
});

$(document).on('click', '.minAccomodatie', function (e) {
	if ($(".minAccomodatie").length > 1) {
		$(this).parent().parent().parent().remove();
	}

});



//verhuur inputs cms

$(".addVerhuur").click(function () {
	
	countVerhuur ++
	$(".columnVerhuur").append('<div class="box' + countVerhuur + '" style="margin-top: 10px;">\
														<div class="row">\
															<div class="col-md-2">\
																<div class="btn minVerhuur">\
																	<i class="fas fa-minus"></i>\
																</div>\
															</div>\
															<div class="col-md-6">\
																<input type="text" class="form-control" placeholder="Verhuur">\
															</div>\
															<div class="col-md-4 input-group">\
																<div class="input-group-prepend">\
																	<span class="input-group-text" id="basic-addon4">€</span>\
																</div>\
																<input type="text" class="form-control" placeholder="costs">\
															</div>\
														</div>');
});

$(document).on('click', '.minVerhuur', function (e) {
	if ($(".minVerhuur").length > 1) {
		$(this).parent().parent().parent().remove();
	}

});
