let playerAcceleration = vec3( 0, -10, 0 )
let playerPosition = vec3( 0, 0, 0 )
let playerVelocity = vec3( 0, 0, 0 )
let playerRotation = vec3( 0, 0, 0 )

let terminalVelocity = 20
let movementSpeed = 50
let jumpPower = 13

let grounded = 0

updatePlayer = () => {

    
    
    fixRotationVector( playerRotation )
    world.style.transform = "translateZ( 600px )" + getTransform( vec3(), playerRotation )
}