
function vec3( x = 0, y = 0, z = 0 ) {
    return { x : x, y : y, z : z }
}

function addVec3( vec1 = { x : 0, y : 0, z : 0 }, vec2 = { x : 0, y : 0, z : 0 } ) {
    return {
        x : vec1.x + vec2.x,
        y : vec1.y + vec2.y,
        z : vec1.z + vec2.z,
    }
}

function scaleVec3 ( vec1 = { x : 0, y : 0, z : 0 }, f = 1 ) {
    return {
        x : vec1.x * f,
        y : vec1.y * f,
        z : vec1.z * f,
    }
}
function multVec3 ( vec1 = { x : 0, y : 0, z : 0 }, vec2 = { x : 0, y : 0, z : 0 } ) {
    return {
        x : vec1.x * vec2.x,
        y : vec1.y * vec2.y,
        z : vec1.z * vec2.z,
    }
}

function getVec3Magnitude( vec1 = { x : 0, y : 0, z : 0 } ) {
    return Math.sqrt( vec1.x ** 2 + vec1.y ** 2 + vec1.z ** 2 )
}

function fixRotationVector( vec = { x : 0, y : 0, z : 0 } ) {
    if ( vec.x > 360 ) { vec.x -= 360 }
    if ( vec.x < -360 ) { vec.x += 360 }

    if ( vec.y > 360 ) { vec.y -= 360 }
    if ( vec.y < -360 ) { vec.y += 360 }

    if ( vec.z > 360 ) { vec.z -= 360 }
    if ( vec.z < -360 ) { vec.z += 360 }
}

function getTransform( position = { x : 0, y : 0, z : 0 }, rotation = { x : 0, y : 0, z : 0 } ) { //translateZ( 600px )
	return `rotateX( ${ rotation.x }deg ) rotateY( ${ rotation.y }deg ) translate3d(${ position.x }px, ${ position.y }px, ${ position.z }px)`
}

function clamp( min, max, val ) {
	if ( min > val ) {
		return min
	} else if ( max < val ) {
		return max
	} else return val
}

function check1DCollition( start, end, current ) {
    return ( start <= current ) && ( end >= current )
}

function check3DCollition( p0, p1, current ) {
    return check1DCollition( p0.x, p1.x, current.x ) && 
        check1DCollition( p0.y, p1.y, current.y ) &&
        check1DCollition( p0.z, p1.z, current.z )
}