
// Kā uztaisīt sienas, grīdas utt:  
// [x koardināte, y koardināte, z koardināte, x rotācja, y rotācja, z rotācja, augstums ( sienām nemaini ,lai paliek 300) ,  platums, bilde , krāsa]
//  un ja nav pēdējais , tad liec komatu   

// Kāuztaisīt elementus , monētas ,apļus utt: (beigas ir ļoti svarīgas)
// [x koardināte, y koardināte, z koardināte, x rotācja, y rotācja, z rotācja, augstums ( mazāk par 300) ,  platums, bilde , krāsa , klase ( "Circle" vai "square "utt)]

let devLevel = {
    info: {
        groundFriction: 1,
        playerHeight: 150
    },

    map: [
        // Grīda
        [0, 0, 0, 90, 0, 0, 1000, 1000, "cracked-asphalt-texture.jpg", "#000000"],
        // Siena
        [50, 50, 0, 0, 0, 0, 300, 500, "brick.jpg", "#fc865d"],
        // Monēta
        [45, 45, 0, 0, 0, 0, 100, 100, "1EURO.png", null]
    ]
}

function parseMap(map) {
    for (let i = 0; i < map.length; i++){
        let currentEntry = map[i]
        let element = document.createElement("div")
        
        element.className = "square"
        element.id = "square" + i
        element.style.width = currentEntry[6] + "px"
        element.style.height = currentEntry[7] + "px"

        element.style.transform = getTransform( 
            vec3(currentEntry[0], currentEntry[1], currentEntry[2]), 
            vec3(currentEntry[3], currentEntry[4], currentEntry[5])
        )

        element.style.backgroundImage = "url(img/" + currentEntry[8] + ")"
        document.getElementById("world").append(element)
    } 
}

parseMap(devLevel.map)