let playerPosition = vec3()
let playerRotation = vec3()
let playerVelocity = vec3(0, 0, 0)

let terminalVelocity = 20
let movementSpeed = 50

function updatePlayer() {

    playerVelocity.x += worldGravity.x
    playerVelocity.y += worldGravity.y
    playerVelocity.z += worldGravity.z

    playerPosition.x += playerVelocity.x
    playerPosition.y += playerVelocity.y
    playerPosition.z += playerVelocity.z

    let facingX = Math.cos( playerRotation.y * deg )
    let facingY = Math.sin( playerRotation.y * deg )

    if ( keymap.KeyW ) {
        playerVelocity.z = facingX * movementSpeed
        playerVelocity.x = facingY * movementSpeed
    }else if ( keymap.KeyS ) {
        playerVelocity.z = -facingX * movementSpeed
        playerVelocity.x = facingY * movementSpeed
    }

    if ( keymap.KeyA ) {
        playerVelocity.x = facingX * movementSpeed
        playerVelocity.z = facingY * movementSpeed
    }else if ( keymap.KeyD ) {
        playerVelocity.x = -facingX * movementSpeed
        playerVelocity.z = -facingY * movementSpeed
    }

    playerVelocity.x -= playerVelocity.x * groundFriction
    playerVelocity.z -= playerVelocity.z * groundFriction

    if ( playerPosition.y < 0 ) {
        playerPosition.y = 0
    }

    if ( playerRotation.x > 360 ) { playerRotation.x -= 360 }
    if ( playerRotation.x < -360 ) { playerRotation.x += 360 }

    if ( playerRotation.y > 360 ) { playerRotation.y -= 360 }
    if ( playerRotation.y < -360 ) { playerRotation.y += 360 }

    if ( playerRotation.z > 360 ) { playerRotation.z -= 360 }
    if ( playerRotation.z < -360 ) { playerRotation.z += 360 }

    world.style.transform = getTransform( playerPosition, playerRotation )

    console.log(playerPosition.z)
}