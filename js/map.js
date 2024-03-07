
// Kā uztaisīt sienas, grīdas utt:  
// [x koordināte, y koordināte, z koordināte, x rotācja, y rotācja, z rotācja, augstums ( sienām nemaini ,lai paliek 300) ,  platums, bilde , krāsa]
//  un ja nav pēdējais , tad liec komatu   

// Kāuztaisīt elementus , monētas ,apļus utt: (beigas ir ļoti svarīgas)
// [x koordināte, y koordināte, z koordināte, x rotācja, y rotācja, z rotācja, augstums ( mazāk par 300) ,  platums, bilde , krāsa , klase ( "Circle" vai "square "utt), vārds( nav svarīgs )] 
// [0]              [1]         [2]           [3]       [4]          [5]        [6]                         [7]      [8]    [9]     [9]                                    [10]

const zDirection = 5

let allLoadedColliders = []
let allLoadedObjects = []

var devLevel = {
    meta: {
        groundFriction: 1,
        playerHeight: 150,
        gravity : { x : 0, y : -5, z : 0 }
    },

    geometry: [
        // Grīda
        [0, 0, 0, 90, 0, 0, 1000, 1000, "cracked-asphalt-texture.jpg", "#000000"],
        // Siena
        [0, 300, 0, 0, 0, 0, 300, 500, "brick.jpg", "#fc865d"],
    ],

    objects : [
        // Monēta
        [45, 45, 0, 0, 0, 0, 100, 100, "1EURO.png", null, 'coin']
    ]
}

function parsDiv( currentEntry ) {
    let element = document.createElement("div")

    element.className = currentEntry[ 10 ] || 'square'
    
    if ( currentEntry[ 11 ] ) {
        element.id = currentEntry[ 11 ]
    }
    
    element.style.width = currentEntry[6] + "px"
    element.style.height = currentEntry[7] + "px"

    element.style.transform = 
    getTransform( 
        vec3( 
            parseInt( getComputedStyle( world ).width, 10 ) / 2 - currentEntry[6] / 2 - currentEntry[0], 
            parseInt( getComputedStyle( world ).width, 10 ) / 2 - currentEntry[7] / 2 - currentEntry[1], 
            currentEntry[2]
            ),
        vec3( currentEntry[3], currentEntry[4], currentEntry[5] )
    )

    if ( currentEntry[ 8 ] ) {
        element.style.backgroundImage = `url( img/${ currentEntry[ 8 ] } )`
    } else {
        element.style.backgroundColor = currentEntry[ 9 ]
    }

    return element
}

function parsGeometry( geometry ) {
    for ( let index = 0; index < geometry.length; index++ ) {
        let object = geometry[ index ]
        let element = parsDiv( object )
        
        allLoadedColliders.push( {
            p0 : vec3( object[ 0 ] - 0.5*object[ 7 ], object[ 1 ] - 0.5*object[ 6 ], object[ 2 ] - zDirection ),
            p1 : vec3( object[ 0 ] + 0.5*object[ 7 ], object[ 1 ] + 0.5*object[ 6 ], object[ 2 ] + zDirection ),
        } )
        
        world.appendChild( element )
    } 
}

function AABBCollition() {
    for ( let index = 0; index < allLoadedColliders.length; index++ ) {
        if ( check3DCollition( allLoadedColliders[ index ].p0, allLoadedColliders[ index ].p1, playerPosition ) ) {
            return true
        }
    }
    return false
}

function loadGameObjects( objects ) {
    for ( let index = 0; index < objects.length; index++ ) {
        let object = objects[ index ]
        let element = parsDiv( object )


        world.appendChild( element )
    }
}

function loadMeta( meta ) {
    groundFriction = meta.groundFriction || 1
    worldGroundLevel = meta.playerHeight || 150

    worldGravity = meta.gravity || vec3( 0, -9.8, 0 )
}

function loadLevel( level ) {
    dropCurrentLevel()

    loadMeta( level.meta )
    parsGeometry( level.geometry )
    loadGameObjects( level.objects )

}
function dropCurrentLevel( ) {
    while ( world.firstChild ) {
        world.removeChild( world.firstChild )
    }
}