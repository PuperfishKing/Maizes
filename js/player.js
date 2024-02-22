const accselFreeFall = 9.8066

let time = Date.now()

let jumpHeight = -9.15
let fallVelocity = 0
let seconds = 0
let timeSpeed = 0.1

let defaultPlayerHeight = 0
let playerHeight = defaultPlayerHeight

let crouchHeightPercentage = 0.75

let movementSpeed = 6
let sensitivity = 0.2

let isCrouching = false

let lockedPointer = false
let isInfoPanelOpen = false

let keymap = { 
    KeyA : false, KeyD : false, KeyW : false, KeyS : false, Space: false, KeyC: false,
}

let player = {
    position : vec3(0, defaultPlayerHeight, 0),
    rotation : vec3()
}

container.onclick = function() {
    container.requestPointerLock()
}

function onMouseMove( event ) {
    if ( !lockedPointer ) return

    rotation.y += event.movementX * sensitivity
    rotation.x -= event.movementY * sensitivity
}

function onKeyPress() {
    let facingVector = vec3(
        Math.cos( rotation.y * deg ),
        Math.sin( rotation.y * deg ),
    )

    if ( keymap.KeyW ) {
        position.z += facingVector.x * movementSpeed
        position.x -= facingVector.y * movementSpeed
    }
    if ( keymap.KeyS ) {
        position.z -= facingVector.x * movementSpeed
        position.x += facingVector.y * movementSpeed
    }

    if ( keymap.KeyA ) {
        position.x += facingVector.x * movementSpeed
        position.z += facingVector.y * movementSpeed
    }
    if ( keymap.KeyD ) {
        position.x -= facingVector.x * movementSpeed
        position.z -= facingVector.y * movementSpeed
    }

    if ( rotation.x > 360 ) { rotation.x -= 360 }
    if ( rotation.x < -360 ) { rotation.x += 360 }
    
    if ( rotation.y > 360 ) { rotation.y -= 360 }
    if ( rotation.y < -360 ) { rotation.y += 360 }

    if ( rotation.z > 360 ) { rotation.z -= 360 }
    if ( rotation.z < -360 ) { rotation.z += 360 }

    if ( keymap[ event.code ] != null ) {
        keymap[ event.code ] = true
    }
}

function onKeyRelese() {
    if ( keymap.Space ) {
        fallVelocity = jumpHeight
    }
    if ( keymap.KeyC ) {
        isCrouching = !isCrouching
    }

    if ( keymap[ event.code ] != null ) {
        keymap[ event.code ] = true
    }
}

function playerPhysics() {
    //laiks
    seconds = Math.min( (Date.now() - time) / 1000, timeSpeed )
    time = Date.now()

    //krišana
    fallVelocity = fallVelocity + accselFreeFall*seconds
    position.y = position.y - fallVelocity

    if (position.y <= playerHeight) {
        position.y = playerHeight
        fallVelocity = 0
    }

    //tupšanās
    if (isCrouching) {
        if (playerHeight > defaultPlayerHeight*crouchHeightPercentage) {
            playerHeight = playerHeight*crouchHeightPercentage
        }
    } else if (!isCrouching && playerHeight < defaultPlayerHeight) {
        playerHeight = playerHeight/crouchHeightPercentage
    }
}

document.addEventListener( "keydown", onKeyPress )
document.addEventListener( "keyup", onKeyRelese )
document.addEventListener( "mousemove", onMouseMove )
document.addEventListener( "pointerlockchange", () => { lockedPointer = !lockedPointer } )