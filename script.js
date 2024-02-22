//  https://www.toptal.com/developers/keycode
const world = document.getElementById('world')
const container = document.getElementById('container')
const infoWindow = document.getElementById('infoWindow')

const coin = document.getElementById( "euro" )
const coin2 = document.getElementById( "euro2" )
const saule = document.getElementById( "saule" )

const deg = Math.PI / 180
const accselFreeFall = 9.8066

document.addEventListener( "keydown", onKeyPress )
document.addEventListener( "keyup", onKeyRelese )
document.addEventListener( "mousemove", onMouseMove )

document.addEventListener( "pointerlockchange", () => { lockedPointer = !lockedPointer } )

container.onclick = function() {
    container.requestPointerLock()
}

let lockedPointer = false
let isInfoPanelOpen = false

let movementSpeed = 6
let sensitivity = 0.2

let defaultPlayerHeight = 410
let playerHeight = defaultPlayerHeight

let cameraCrouch = 0.75
let isCrouching = false

let jumpHeight = -9.15
let fallVelocity = 0
let time = Date.now()

let position = vec3( 500, defaultPlayerHeight, 0 )
let rotation = vec3( -30, 45, 0 )

let cointRotY = 0

//Util function
function vec3( x = 0, y = 0, z = 0 ) {
    return {
        x : x,
        y : y,
        z : z,
    }
}

//Event callbacks
let keymap = { 
    KeyA : false, KeyD : false, KeyW : false, KeyS : false, KeyQ : false, KeyE : false, ShiftLeft : false, KeyZ : false, ControlLeft : false,
}

function onKeyPress( event ) {
    
    if ( keymap[ event.code ] != null ) {
        keymap[ event.code ] = true
    }
}
function onKeyRelese( event ) {
    if (event.code == 'KeyC') {
        isCrouching = !isCrouching
    }

    if ( event.code == 'Space' && !isCrouching) {
        fallVelocity = jumpHeight
    }

    if ( event.code == 'KeyI' ) {
        let newS = prompt( "Cik jutigu velies peliti?" )
        
        if ( parseFloat( newS ) && !isNaN( parseFloat( newS ) ) ) {
            sensitivity = parseFloat( newS ) / 100
        } 

        return
    }else if ( event.code == 'KeyR' ) {
        cameraHeight = 410
        position = vec3( 500, 360, 0 )
        rotation = vec3( -30, 0, 0 )
      
        return
    }

    if ( keymap[ event.code ] != null ) {
        keymap[ event.code ] = false
    }
}
function onMouseMove( event ) {
    if ( !lockedPointer ) return

    rotation.y += event.movementX * sensitivity
    rotation.x -= event.movementY * sensitivity
}

//Update functions

function updateWorld() {
    world.style.transform = 
        `translateZ( 600px ) rotateX( ${ rotation.x }deg ) rotateY( ${ rotation.y }deg ) translate3d(${ position.x }px, ${ position.y }px, ${ position.z }px)`

        coin.style.transform = `translate3d(200px, 100px, 100px) rotateX(0deg) rotateY(${ cointRotY }deg) rotateZ(0deg)`
        coin2.style.transform = `translate3d(-100px, 100px, 100px) rotateX(0deg) rotateY(${ cointRotY }deg) rotateZ(0deg)`
        saule.style.transform = `translate3d(0px, -1000px, 0px) rotatex(${ rotation.x }deg) rotateY(${ 0 - rotation.y }deg) rotateZ(${ 0 - rotation.z }deg)`
}

function updatePlayerMovement() {
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
}

function cameraJump() {
    seconds = Math.min( (Date.now() - time) / 1000, 0.1 )
    time = Date.now()

    fallVelocity = fallVelocity + accselFreeFall*seconds
    position.y = position.y - fallVelocity

    if (position.y <= playerHeight) {
        position.y = playerHeight
    }


    if (isCrouching) {
        if (playerHeight > defaultPlayerHeight*cameraCrouch) {
            playerHeight = playerHeight*cameraCrouch
        }
    } else if (!isCrouching && playerHeight < defaultPlayerHeight) {
        playerHeight = playerHeight/cameraCrouch
    }
}

function drawInfoPanel() {

    if (!isInfoPanelOpen) {
        container.style.width = `98%`

        infoWindow.style.width = `0%`
        infoWindow.style.marginRight = `0%`
        infoWindow.style.marginLeft = `0%`
        infoWindow.style.padding = `0%`

        infoWindow.innerHTML = ``
    } 
    else if (isInfoPanelOpen) {
        container.style.width = `84%`

        infoWindow.style.width = `10%`
        infoWindow.style.marginRight = `2%`
        infoWindow.style.marginLeft = `1%`
        infoWindow.style.padding = `1%`

        infoWindow.innerHTML = `
        <h5>The Information Panel</h5>
        <hr>
        <p>Movement speed: ${movementSpeed}px
        Camera sensitivity: ${sensitivity * 100}%
        <hr>
        Players camera coordinates:<br>
        x: ${ position.x }<br>
        y: ${ position.y }<br>
        z: ${ position.z }
        <hr>
        
        Players camera rotation:<br>
        
        x: ${ rotation.x }<br>
        y: ${ rotation.y }<br>
        z: ${ rotation.z }

        <hr>
        </p>
        <p id="finePrint">
        Movement controls:<br>
        w: move forward<br>
        a: move left<br>
        s: move backward<br>
        d: move right<br>
        
        shift: sprint<br>
        <hr>
        <p id="finePrint">Other functions:<br>
        r: reset back to starting position<br>
        i: open & close the information panel<br>
        </p>`
    }
}


//Main game loop
function game() {
    
    cointRotY += 5
    if ( cointRotY > 360 ) { cointRotY -= 360 }

    updatePlayerMovement()
    cameraJump()
    
    drawInfoPanel()
    updateWorld()

    myReq = requestAnimationFrame(game)
}


//Starting le gaem
game()