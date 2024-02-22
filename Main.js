
//  Function for appending scripts
function include( file ) {

	let script = document.createElement('script');
	script.src = file;
	script.type = 'text/javascript';
	script.defer = true;

	document.getElementsByTagName('head').item(0).appendChild(script);
}

//  File appending
include( "js/map.js" )
include( "js/world.js" )
include( "js/player.js" )