const container = document.getElementById( "container" )
const world = document.getElementById( "world" )

const deg = Math.PI / 180

let sensitivity = 0.1
let lockedPointer = false

let worldGravity
let groundFriction = 0.1
let worldGroundLevel = 0

let updatePlayer = () => {}

//	Getting player input!
let keymap = { 
    KeyA : 0, KeyD : 0, KeyW : 0, KeyS : 0, KeyQ : 0, KeyE : 0, ShiftLeft : 0, KeyZ : 0, ControlLeft : 0, Space : 0
}

function onKeyPress( event ) {
    if ( keymap[ event.code ] != null ) {
        keymap[ event.code ] = 1
    }
}
function onKeyRelese( event ) {
    if ( keymap[ event.code ] != null ) {
        keymap[ event.code ] = 0
    }
}
function onMouseMove( event ) { 
	if ( !lockedPointer ) return
	
	playerRotation.y += ( event.movementX || 0 ) * sensitivity
    playerRotation.x -= ( event.movementY || 0 ) * sensitivity

	// console.log( event )

    playerRotation.x = clamp( -70, 70, playerRotation.x )
 }

document.addEventListener( "keydown", onKeyPress )
document.addEventListener( "keyup", onKeyRelese )
document.addEventListener( "mousemove", onMouseMove )

document.addEventListener( "pointerlockchange", () => { lockedPointer = !lockedPointer } )

container.onclick = function() {
    container.requestPointerLock()
}
