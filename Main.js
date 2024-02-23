const container = document.getElementById( "container" )
const world = document.getElementById( "world" )

const deg = Math.PI / 180

let sensitivity = 0.1
let lockedPointer = false

let worldGravity
let groundFriction = 0.1
let worldGroundLevel = 0

//	Getting player input!
let keymap = { 
    KeyA : false, KeyD : false, KeyW : false, KeyS : false, KeyQ : false, KeyE : false, ShiftLeft : false, KeyZ : false, ControlLeft : false, Space : false
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
function onMouseMove( event ) { 
	if ( !lockedPointer ) return
	
	playerRotation.y += event.movementX * sensitivity
    playerRotation.x -= event.movementY * sensitivity

    playerRotation.x = clamp( -70, 70, playerRotation.x )
 }

document.addEventListener( "keydown", onKeyPress )
document.addEventListener( "keyup", onKeyRelese )
document.addEventListener( "mousemove", onMouseMove )

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

function getTransform( position = { x : 0, y : 0, z : 0 }, rotation = { x : 0, y : 0, z : 0 } ) { //translateZ( 600px )
	return `rotateX( ${ rotation.x }deg ) rotateY( ${ rotation.y }deg ) translate3d(${ position.x }px, ${ position.y }px, ${ position.z }px)`
}

function clamp( min, max, val ) {
	if ( min > val ) {
		return min
	} else if ( max < val ) {
		return max
	} else return val
}

//  File appending
include( "js/vector3.js" )

include( "js/map.js" )
include( "js/player.js" )

include( "js/game.js" )