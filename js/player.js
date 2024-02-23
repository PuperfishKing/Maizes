let playerPosition = vec3()
let playerRotation = vec3()
let playerVelocity = vec3()

let terminalVelocity = 20
let movementSpeed = 50

function updatePlayer() {

    addVec3( playerVelocity, worldGravity )
    addVec3( playerPosition, playerVelocity )

    playerVelocity.x *= groundFriction
    playerVelocity.y *= groundFriction
    playerVelocity.z *= groundFriction

    let walkVector = vec3()

    if ( keymap.KeyW ) {
        walkVector.z += 1
    } else if ( keymap.KeyS ) {
        walkVector.z -= 1
    }
    if ( keymap.KeyD ) {
        walkVector.x += 1
    } else if ( keymap.KeyA ) {
        walkVector.x -= 1
    }

    // let a = rotateY( walkVector, playerRotation.y * deg )

    let x = Math.cos( playerRotation.y * deg )
    let y = Math.sin( playerRotation.y * deg )



    addVec3( playerPosition, vec3(
        x * walkVector.x,
        y * walkVector.z,
        0,
    ) )

    // addVec3( playerPosition,  )

    // console.log( walkVector, rotateY( walkVector, playerRotation.y ), playerRotation.y )
    // console.log( rotateY( walkVector, playerRotation.y ) )

    // let facingX = Math.cos( playerRotation.y * deg )
    // let facingY = Math.sin( playerRotation.y * deg )

    // if ( keymap.KeyW ) {
    //     playerVelocity.z += facingX * movementSpeed
    //     playerVelocity.x -= facingY * movementSpeed
    // }else if ( keymap.KeyS ) {
    //     playerVelocity.z -= facingX * movementSpeed
    //     playerVelocity.x += facingY * movementSpeed
    // }

    // if ( keymap.KeyA ) {
    //     playerVelocity.x += facingX * movementSpeed
    //     playerVelocity.z += facingY * movementSpeed
    // }else if ( keymap.KeyD ) {
    //     playerVelocity.x -= facingX * movementSpeed
    //     playerVelocity.z -= facingY * movementSpeed
    // }

    // playerPosition.y = 0
    // playerVelocity.y = 0

    // playerVelocity.x *= groundFriction
    // playerVelocity.z *= groundFriction

    if ( playerPosition.y < 1 ) {
        playerVelocity.y += playerVelocity.y * -1
        playerPosition.y = 0
    }

    fixRotationVector( playerRotation )

    world.style.transform = "translateZ( 600px )" + getTransform( playerPosition, playerRotation )
}