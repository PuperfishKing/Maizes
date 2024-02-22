let devLevel = {
    meta: {
        groundFriction: 1,
        playerHeight: 150
    },

    levelData: [
        // Grīda
        [0, 0, 0, 90, 0, 0, 1000, 1000, "cracked-asphalt-texture.jpg", "#000000"],
        // Siena
        [50, 50, 0, 0, 0, 0, 300, 500, "brick.jpg", "#fc865d"]
    ]
}

function loadLevel(level) {
    for (let i = 0; i < level.length; i++){
        let currentEntry = level[i];
        let element = document.createElement("div");
        
        element.className = "square";
        element.id = "square" + i;
        element.style.width = currentEntry[6] + "px";
        element.style.height = currentEntry[7] + "px";

        element.style.transform = getTransform( 
            vec3(currentEntry[0], currentEntry[1], currentEntry[2]), 
            vec3(currentEntry[3], currentEntry[4], currentEntry[5])
        )

        element.style.backgroundImage = "url(img/" + currentEntry[8] + ")";
        document.getElementById("world").append(element);
    } 
}

loadLevel(devLevel.levelData)