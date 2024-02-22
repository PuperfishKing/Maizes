const container = document.getElementById( "container" )
const world = document.getElementById( "world" )

let lockedPointer = false

//	Getting player input!
let keymap = { 
    KeyA : false, KeyD : false, KeyW : false, KeyS : false, KeyQ : false, KeyE : false, ShiftLeft : false, KeyZ : false, ControlLeft : false,
}

function onKeyPress( event ) {
    if ( keymap[ event.code ] != null ) {
        keymap[ event.code ] = true
    }
}
function onKeyRelese( event ) {
    if ( keymap[ event.code ] != null ) {
        keymap[ event.code ] = false
    }
}

document.addEventListener( "keydown", onKeyPress )
document.addEventListener( "keyup", onKeyRelese )
// document.addEventListener( "mousemove", onMouseMove )

document.addEventListener( "pointerlockchange", () => { lockedPointer = !lockedPointer } )

container.onclick = function() {
    container.requestPointerLock()
}


//  Function for appending scripts
function include( file ) {

	let script = document.createElement('script')
	script.src = file
	script.type = 'text/javascript'
	script.defer = true

	document.getElementsByTagName('head').item(0).appendChild(script)
}

//	Utils
function vec3( x = 0, y = 0, z = 0 ) {
	return { x : x, y : y, z : z }
}
function getTransform( position = { x : 0, y : 0, z : 0 }, rotation = { x : 0, y : 0, z : 0 } ) { //translateZ( 600px )
	return `rotateX( ${ rotation.x }deg ) rotateY( ${ rotation.y }deg ) translate3d(${ position.x }px, ${ position.y }px, ${ position.z }px)`
}

//  File appending
include( "js/map.js" )
include( "js/player.js" )
include( "js/game.js" )