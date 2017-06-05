var term = require( 'terminal-kit' ).terminal ;

function firewall()
{
	var items = [
	'List Open Port' ,
	'Open Port' ,
	'Close Port',
	'Back to Main Menu'
	] ;

	term.gridMenu( items , function( error , response ) {
	term( '\n' ).eraseLineAfter.green(
		"#%s selected: %s (%s,%s)\n" ,
		response.selectedIndex ,
		response.selectedText ,
		response.x ,
		response.y
	);
	switch(response.selectedIndex) {
		case 0:
			term.brightBlue("Open port list:");
			break;
		case 1:
			term.brightBlue("Enter the port to open: ");
			break;
		case 2:
			term.brightBlue("Enter the port to close: ");
		default:
			term.brightYellow("Exit to main menu");
}
	} ) ;

}

firewall();
