let worldGravity = vec3( 0, -9.8, 0 )

let playerPosition = vec3()
let playerRotation = vec3()
let playerVellocity = vec3()

let terminalVelocity = 20
let movementSpeed = 5

function updatePlayer( deltaTime ) {

    playerVellocity.x += worldGravity.x * deltaTime
    playerVellocity.y += worldGravity.y * deltaTime
    playerVellocity.z += worldGravity.z * deltaTime

    playerPosition.x += playerVellocity.x * deltaTime
    playerPosition.y += playerVellocity.y * deltaTime
    playerPosition.z += playerVellocity.z * deltaTime

    let facingX = Math.cos( playerRotation.y * deg )
    let facingY = Math.sin( playerRotation.y * deg )

    if ( keymap.KeyW ) {
        playerVellocity.z = facingX * movementSpeed
        playerVellocity.x = facingY * movementSpeed
    }
    if ( keymap.KeyA ) {
        playerVellocity.x = facingX * movementSpeed
        playerVellocity.z = facingY * movementSpeed
    }
    if ( keymap.KeyS ) {
        playerVellocity.z = facingX * movementSpeed
        playerVellocity.x = facingY * movementSpeed
    }
    if ( keymap.KeyD ) {
        playerVellocity.x = facingX * movementSpeed
        playerVellocity.z = facingY * movementSpeed
    }

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

}