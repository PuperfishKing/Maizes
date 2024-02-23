
function vec3( x = 0, y = 0, z = 0 ) {
    return { x : x, y : y, z : z }
}
function vec2( x = 0, y = 0 ) {
    return { x : x, y : y }
}


function rotateX( vec3 = { x : 0, y : 0, z : 0 }, angle = 0 ) {

}

function rotateY(vec3 = { x: 0, y: 0, z: 0 }, angle = 0) {
    const cos = Math.cos( angle );
    const sin = Math.sin( angle );
    return {
        x : vec3.x * cos + vec3.z * sin,
        y : vec3.y,
        z : -vec3.x * sin + vec3.z * cos
    };
}


function rotateZ( vec3 = { x : 0, y : 0, z : 0 }, angle = 0 ) {

}

function addVec3( vec1 = { x : 0, y : 0, z : 0 }, vec2 = { x : 0, y : 0, z : 0 } ) {
    vec1.x += vec2.x
    vec1.y += vec2.y
    vec1.z += vec2.z
}

function fixRotationVector( vec = { x : 0, y : 0, z : 0 } ) {
    if ( vec.x > 360 ) { vec.x -= 360 }
    if ( vec.x < -360 ) { vec.x += 360 }

    if ( vec.y > 360 ) { vec.y -= 360 }
    if ( vec.y < -360 ) { vec.y += 360 }

    if ( vec.z > 360 ) { vec.z -= 360 }
    if ( vec.z < -360 ) { vec.z += 360 }
}