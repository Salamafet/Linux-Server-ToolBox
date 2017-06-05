var term = require( 'terminal-kit' ).terminal ;
var header = require('./header.js');

// ##### WELCOME MESSAGE #####
term.clear();
term.previousLine(1);
term.brightCyan(text_linux);
term.previousLine(5);
term.brightGreen(text_server);
term.brightYellow("\n" + text_toolbox).brightRed.italic(" " + text_version + "\n\n");
//##############################

term.cyan( 'Select a function:\n' ) ;

var items = [
	'Firewall Settings' ,
	'SSH Settings' ,
	'Help Menu',
	'Exit'
] ;

term.gridMenu( items , function( error , response ) {
	term( '\n' ).eraseLineAfter.green(
		"#%s selected: %s (%s,%s)\n" ,
		response.selectedIndex ,
		response.selectedText ,
		response.x ,
		response.y
	) ;
	term.clear();
	if(response.selectedText == "Exit")
	{
		term.brightRed("Goodbye !\n\n");
		process.exit() ;
	}
	else
	{
		term.brightYellow(mini_text).brightRed.italic(" " + response.selectedText + "\n\n");

		process.exit() ;
	}

} ) ;
