var term = require( 'terminal-kit' ).terminal ;
var main = require('./main.js');

text_version = "V0.1";
text_linux = `
    __    _                     _____
   / /   (_)___  __  ___  __   / ___/___  ______   _____  _____
  / /   / / __ \\\/ / / / |/_/   \\\__ \\\/ _ \\\/ ___/ | / / _ \\\/ ___/
 / /___/ / / / / /_/ />  <    ___/ /  __/ /   | |/ /  __/ /
/_____/_/_/ /_/\\\__,_/_/|_|   /____/\\\___/_/    |___/\\\___/_/     `;

text_server = `
    __    _
   / /   (_)___  __  ___  __
  / /   / / __ \\\/ / / / |/_/
 / /___/ / / / / /_/ />  <
/_____/_/_/ /_/\\\__,_/_/|_|  `;

text_toolbox = `
████████╗ ██████╗  ██████╗ ██╗     ██████╗  ██████╗ ██╗  ██╗
╚══██╔══╝██╔═══██╗██╔═══██╗██║     ██╔══██╗██╔═══██╗╚██╗██╔╝
   ██║   ██║   ██║██║   ██║██║     ██████╔╝██║   ██║ ╚███╔╝
   ██║   ██║   ██║██║   ██║██║     ██╔══██╗██║   ██║ ██╔██╗
   ██║   ╚██████╔╝╚██████╔╝███████╗██████╔╝╚██████╔╝██╔╝ ██╗
   ╚═╝    ╚═════╝  ╚═════╝ ╚══════╝╚═════╝  ╚═════╝ ╚═╝  ╚═╝`;

mini_text = `
 ╦  ╔═╗╔╦╗
 ║  ╚═╗ ║
 ╩═╝╚═╝ ╩`;


var methods = {};

// FIREWALL Menu
methods.firewall = function(action)
{
	term.brightYellow(mini_text).brightRed.italic(" Firewall Settings\n\n");
	if(action == "main")
	{
		term.cyan( 'Select a function:\n' ) ;
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
				break;
			default:
				main.data.main_menu(1);
				break;
		}
		} ) ;
	}
}

// HELP Menu
methods.help = function()
{
	term.brightYellow(mini_text).brightRed.italic(" Help Menu\n\n");
	term.brightGreen("Linux").brightCyan(" Server").brightYellow(" Toolbox").styleReset(" an open source project.\n");
	term.brightMagenta("https://github.com/Salamafet/Linux-Server-ToolBox\n\n");
	term.brightRed("Under redaction...\n")

	var items = [
	'Back to main menu'
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

		default:
			main.data.main_menu(1);
			break;
	}
	} ) ;
}

exports.data = methods;
