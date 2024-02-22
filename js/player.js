let worldGravity = vec3( 0, -9.8, 0 )

let playerPosition = vec3()
let playerRotation = vec3()
let playerVellocity = vec3()

let movementSpeed = 6

function updatePlayer( deltaTime ) {

    playerVellocity.x += worldGravity.x * deltaTime
    playerVellocity.y += worldGravity.y * deltaTime
    playerVellocity.z += worldGravity.z * deltaTime

    playerPosition.x += playerVellocity.x * deltaTime
    playerPosition.y += playerVellocity.y * deltaTime
    playerPosition.z += playerVellocity.z * deltaTime

    let facingX = Math.cos( playerRotation.y * deg )
    let facingY = Math.sin( playerRotation.y * deg )

    if ( playerPosition.y < 0 ) {
        
    }

    if ( rotation.x > 360 ) { rotation.x -= 360 }
    if ( rotation.x < -360 ) { rotation.x += 360 }

    if ( rotation.y > 360 ) { rotation.y -= 360 }
    if ( rotation.y < -360 ) { rotation.y += 360 }

    if ( rotation.z > 360 ) { rotation.z -= 360 }
    if ( rotation.z < -360 ) { rotation.z += 360 }

    world.style.transform = getTransform( playerPosition, playerRotation )

}



// function onMouseMove( event ) {
//     if ( !lockedPointer ) return

//     rotation.y += event.movementX * sensitivity
//     rotation.x -= event.movementY * sensitivity
// }

// function onKeyPress() {
//     let facingVector = vec3(
//         Math.cos( rotation.y * deg ),
//         Math.sin( rotation.y * deg ),
//     )

//     if ( keymap.KeyW ) {
//         position.z += facingVector.x * movementSpeed
//         position.x -= facingVector.y * movementSpeed
//     }
//     if ( keymap.KeyS ) {
//         position.z -= facingVector.x * movementSpeed
//         position.x += facingVector.y * movementSpeed
//     }

//     if ( keymap.KeyA ) {
//         position.x += facingVector.x * movementSpeed
//         position.z += facingVector.y * movementSpeed
//     }
//     if ( keymap.KeyD ) {
//         position.x -= facingVector.x * movementSpeed
//         position.z -= facingVector.y * movementSpeed
//     }

//     if ( rotation.x > 360 ) { rotation.x -= 360 }
//     if ( rotation.x < -360 ) { rotation.x += 360 }
    
//     if ( rotation.y > 360 ) { rotation.y -= 360 }
//     if ( rotation.y < -360 ) { rotation.y += 360 }

//     if ( rotation.z > 360 ) { rotation.z -= 360 }
//     if ( rotation.z < -360 ) { rotation.z += 360 }

//     if ( keymap[ event.code ] != null ) {
//         keymap[ event.code ] = true
//     }
// }

// function onKeyRelese() {
//     if ( keymap.Space ) {
//         fallVelocity = jumpHeight
//     }
//     if ( keymap.KeyC ) {
//         isCrouching = !isCrouching
//     }

//     if ( keymap[ event.code ] != null ) {
//         keymap[ event.code ] = true
//     }
// }

// function playerPhysics() {
//     //laiks
//     seconds = Math.min( (Date.now() - time) / 1000, timeSpeed )
//     time = Date.now()

//     //krišana
//     fallVelocity = fallVelocity + accselFreeFall*seconds
//     position.y = position.y - fallVelocity

//     if (position.y <= playerHeight) {
//         position.y = playerHeight
//         fallVelocity = 0
//     }

//     //tupšanās
//     if (isCrouching) {
//         if (playerHeight > defaultPlayerHeight*crouchHeightPercentage) {
//             playerHeight = playerHeight*crouchHeightPercentage
//         }
//     } else if (!isCrouching && playerHeight < defaultPlayerHeight) {
//         playerHeight = playerHeight/crouchHeightPercentage
//     }
// }