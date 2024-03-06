let playerAcceleration = vec3( 0, -9.8, 0 )
let playerPosition = vec3( 0, 0, 0 )
let playerVelocity = vec3( 0, 0, 0 )
let playerRotation = vec3( 0, 0, 0 )

let terminalVelocity = 20
let movementSpeed = 50
let jumpPower = 13

let grounded = 0
let alpha

updatePlayer = () => {
    //Lai mainītu berzes virzienu un pati berze
    if (playerVelocity.x < 0) {
        alpha = -1
    } else if (playerVelocity.x > 0) {
        alpha = 1
    }

    if (playerVelocity.z < 0) {
        alpha = -1
    } else if (playerVelocity.z > 0) {
        alpha = 1
    }

    playerAcceleration.x -= groundFriction*playerAcceleration.y*alpha
    playerAcceleration.z -= groundFriction*playerAcceleration.y*alpha

    playerPosition.x += playerVelocity.x
    playerPosition.y += playerVelocity.y
    playerPosition.z += playerVelocity.z

    playerVelocity.x += playerAcceleration.x
    playerVelocity.y += playerAcceleration.y
    playerVelocity.z += playerAcceleration.z

    if (keymap.KeyW) {

    }
    if (keymap.KeyS) {

    }
    if (keymap.KeyA) {

    }
    if (keymap.KeyD) {
        
    }
    
    
    fixRotationVector( playerRotation )
    world.style.transform = "translateZ( 600px )" + getTransform( vec3(), playerRotation )
}