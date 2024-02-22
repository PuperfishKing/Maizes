
//  Function for appending scripts
function include( file ) {

	let script = document.createElement('script');
	script.src = file;
	script.type = 'text/javascript';
	script.defer = true;

	document.getElementsByTagName('head').item(0).appendChild(script);
}

function vec3( x = 0, y = 0, z = 0 ) {
	return { x : x, y : y, z : z }
}
function getTransform( position = { x : 0, y : 0, z : 0 }, rotation = { x : 0, y : 0, z : 0 } ) { //translateZ( 600px )
	return `rotateX( ${ rotation.x }deg ) rotateY( ${ rotation.y }deg ) translate3d(${ position.x }px, ${ position.y }px, ${ position.z }px)`
}

//  File appending
include( "js/map.js" )
include( "js/world.js" )
include( "js/player.js" )