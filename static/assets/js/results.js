function loadRachels(){
	var names = [
	"Rachel Mickelson",
	"Jennifer Smith",
	"Claire Hirt",
	"Mary Telfer",
	"Sarah Stone",
	"Kate Goldberg",
	"Lydia Brennen",
	"Anna Madison",
	"Jessica Brighton",
	"Abigail Inman",
	"Michelle Brown",
	"Diane Milten",
	"Emily Mendelson"
	];
	var table = $("#people");
	for (var i = 0; i <= names.length-1; i++) {
		var rachel = '<div class="person">'+
					 	'<img src="static/images/rachels/r' + (i+1) + '.jpg">'+
					 	'<div class="details">' +
							'<div class="name">' + names[i] + '</div>'+
							'<div class="job">Publicist</div>'+
						'</div>'+
						'<button><a href="loading.html">Target With Love</a></button>'+
					 '</div>';
		table.append(rachel);
	}

}

loadRachels();