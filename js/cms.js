var countVervoer = 1;
var countInput = 1;
var countAccomodatie = 1;
var countVerhuur = 1;


//zelf vervoer in cms

$(document).on('click', ".addVervoer", function (e) {

    var vervoerAppend = '<div class="box" style="margin-top: 10px;">\
							<div class="row">\
								<div class="col-md-2">\
								    <div class="btn minVervoer">\
										<i class="fas fa-minus"></i>\
									</div>\
								</div>\
								<div class="col-md-6">\
									<input type="text" class="form-control" name="vervoer[]" placeholder="Vervoer zelf" class="vervoer" id="vervoer">\
								</div>\
								<div class="col-md-4 input-group">\
								    <div class="input-group-prepend">\
									    <span class="input-group-text" id="basic-addon1">€</span>\
									</div>\
									<input type="text" class="form-control" placeholder="costs" name="vervoer_costs[]">\
								</div>\
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
																<input type="text" class="form-control" placeholder="Editie" name="editie[]">\
															</div>\
															<div class="col-md-4 input-group">\
																<div class="input-group-prepend">\
																	<span class="input-group-text" id="basic-addon2">€</span>\
																</div>\
																<input type="text" class="form-control" placeholder="costs" name="editie_costs[]">\
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

    countAccomodatie++

    $(".columnAccomodatie").append('<div class="box' + countAccomodatie + '" style="margin-top: 10px;">\
														<div class="row">\
															<div class="col-md-2">\
																<div class="btn minAccomodatie">\
																	<i class="fas fa-minus"></i>\
																</div>\
															</div>\
															<div class="col-md-6">\
																<input type="text" class="form-control" placeholder="Accomodatie" name="accomodatie[]">\
															</div>\
															<div class="col-md-4 input-group">\
																<div class="input-group-prepend">\
																	<span class="input-group-text" id="basic-addon3">€</span>\
																</div>\
																<input type="text" class="form-control" placeholder="costs" name="accomodatie_costs[]">\
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

    countVerhuur++
    $(".columnVerhuur").append('<div class="box' + countVerhuur + '" style="margin-top: 10px;">\
														<div class="row">\
															<div class="col-md-2">\
																<div class="btn minVerhuur">\
																	<i class="fas fa-minus"></i>\
																</div>\
															</div>\
															<div class="col-md-6">\
																<input type="text" class="form-control" placeholder="Verhuur" name="verhuur[]">\
															</div>\
															<div class="col-md-4 input-group">\
																<div class="input-group-prepend">\
																	<span class="input-group-text" id="basic-addon4">€</span>\
																</div>\
																<input type="text" class="form-control" placeholder="costs" name="verhuur_costs[]">\
															</div>\
														</div>');
});

$(document).on('click', '.minVerhuur', function (e) {
    if ($(".minVerhuur").length > 1) {
        $(this).parent().parent().parent().remove();
    }

});

