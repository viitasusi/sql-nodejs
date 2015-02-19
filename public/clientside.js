/*Funktio, joka kutsuu palvelinpään ohjelman metodia /testi.
Kun funktio saa vastauksen, vastaus tulostetaan taulukkoon, joka lopuksi liitetään HTML-dokumenttiin.
JQuerya käyttävä ratkaisu ei ole ihan oma luomukseni. Löysin ratkaisun StackOverflowsta ja muokkasin siitä 
omaan tarkoitukseeni sopivan. Steal with pride!*/

function funktio() {
$.get('/testi', function(data){
	var employees = data;
	console.log(data);
	$( '#tyontekijat' ).empty();
	
	/*Luodaan pari muuttujaa taulukon ylimmän rivin tulostamista varten*/

	var nimi = "<b>nimi</b>";
	var ID = "<b>ID</b>";

	/*Luodaan taulukko ja tulostetaan siihen työntekijän nimi ja ID*/

	var $table = $( "<table></table>" );
	var $line = $( "<tr></tr>" );
	$line.append( $( "<td></td>" ).html( nimi ) );
	$line.append( $( "<td></td>" ).html( ID ) );
	$table.append( $line );
	

	for ( var i = 0; i < employees.length; i++ ) {
	    var emp = employees[i];
	    var $line = $( "<tr></tr>" );
	    $line.append( $( "<td></td>" ).html( emp.ID ) );
	    $line.append( $( "<td></td>" ).html( emp.Nimi ) );
	    $table.append( $line );
	}

/*Liitetään taulukko HTML-dokumenttiin*/

$table.appendTo( $( '#tyontekijat' ) );


});
}

/*Vastaavalla peraattteella toimiva funktio Yrityksen tomipisteiden tietojen tulostamiseen*/

function funktio2() {
$.get('/testi2', function(data){
	var toimipisteet = data;
	console.log(data);
	$( '#toimipisteet' ).empty();
	var nimi = "<b>nimi</b>";
	var katuosoite = "<b>katuosoite</b>";
	var email = "<b>email</b>"

	var $table = $( "<table></table>" );
	var $line = $( "<tr></tr>" );
	$line.append( $( "<td></td>" ).html( nimi ) );
	$line.append( $( "<td></td>" ).html( katuosoite ) );
	$line.append( $( "<td></td>" ).html( email ) );
	$table.append( $line );
	

	for ( var i = 0; i < toimipisteet.length; i++ ) {
	    var toim = toimipisteet[i];
	    var $line = $( "<tr></tr>" );
	    $line.append( $( "<td></td>" ).html( toim.nimi ) );
	    $line.append( $( "<td></td>" ).html( toim.katuosoite ) );
	    $line.append( $( "<td></td>" ).html( toim.email ) );
	    $table.append( $line );
	}

$table.appendTo( $( '#toimipisteet' ) );


});
}

function funktio3() {
	$( '#toimipisteet' ).empty();
	$( '#tyontekijat' ).empty();
}



