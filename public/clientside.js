function funktio() {
$.get('/testi', function(data){
	var employees = data;
	console.log(data);

	var $table = $( "<table></table>" );
	var $line = $( "<tr></tr>" )
	

	for ( var i = 0; i < employees.length; i++ ) {
	    var emp = employees[i];
	    var $line = $( "<tr></tr>" );
	    $line.append( $( "<td></td>" ).html( emp.ID ) );
	    $line.append( $( "<td></td>" ).html( emp.Nimi ) );
	    $table.append( $line );
	}

$table.appendTo( document.body );


});
}


