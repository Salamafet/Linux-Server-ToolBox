var term = require( 'terminal-kit' ).terminal ;
var header = require('./header.js');

// ##### WELCOME MESSAGE #####
term.previousLine(1);
term.brightCyan(text_linux);
term.previousLine(5);
term.brightGreen(text_server);
term.brightYellow("\n" + text_toolbox).brightRed.italic(" " + text_version + "\n");
//##############################
