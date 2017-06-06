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
methods.firewall = function(action)
{
	if(action == "main")
	{
		term.brightYellow(mini_text).brightRed.italic(" Firewall Settings\n\n");
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
				term.clear();
				term.brightYellow(mini_text).brightRed.italic(" Main Menu\n\n");
				main.data.main_menu();
				break;
		}
		} ) ;
	}
}

exports.data = methods;
