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

var methods = {};
methods.main_menu = function(mini_header)
{
	if(mini_header == 1)
	{
		term.clear();
		term.brightYellow(mini_text).brightRed.italic(" Main Menu\n\n");
	}
	term.cyan( 'Select a function:\n' ) ;

	var items = [
		'Firewall Settings' ,
		'SSH Settings' ,
		'Reboot Server',
		'Help',
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
		switch(response.selectedIndex) {
			case 0:
				header.data.firewall("main");
				break;
			case 1:
				term.brightBlue("SSH Settings");
				//break;
			case 2:
				header.data.reboot();
				break;
			case 3:
				header.data.help();
				break;
			case 4:
				term.brightRed("Goodbye !\n\n");
				process.exit();
			default:
				term.brightRed.bold("ERROR !");
				process.exit();
		}

	} ) ;
}

exports.data = methods;
methods.main_menu(0);
