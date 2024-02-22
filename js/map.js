// Kā strādā  
// [x koardināte,y koardināte,z koardināte,x rotācja,y rotācja,z rotācja, augstums ( sienām nemaini ,lai paliek 300). platums, bilde ( "img/ ")  , krāsa]
//  un ja nav pēdējais , tad liec komatu   


let devLevel = {
    meta : {
        groundFriction : 1,
        playerHeight : 150,
    },
    levelData : [
        // Grīda
        [0, 0, 0, 90, 0 ,0 ,1000 , 1000, "img/cracked-asphalt-texture.jpg", "#000000"],

        // siena
        [50,50 ,0 , 0 ,0,0  ,300, 500,"img/brick.jpg", "#fc865d" ]

    ]
}

function loadLevel( level ) {
    for (let i = 0; i < level.length; i++){
        let currentEntry = level[ i ];
        console.log(currentEntry);
        let newElement = document.createElement("div");
        newElement.className = "square";
        newElement.id = "square" + i;

        newElement.style.width = currentEntry[6] + "px";
        newElement.style.height = currentEntry[7] + "px";

        newElement.style.transform = getTransform( 
            vec3( currentEntry[0] , currentEntry[1], currentEntry[2]) , 
            vec3(currentEntry[3], currentEntry[4], currentEntry[5]),
        )
        
        // pagaiām tikai krasa
        newElement.style.backgroundImage = "url(" + currentEntry[8] + ")";
        

        // newElement.style.transform = "translate3d( "+
        //  " pos : x =" + map[i][0] + "px" +
        //  " ,pos : y =" + map[i][1] +"px" +
        //  " ,pos : z =" + map[i][2] +"px" +
        //  " ,rot : x =" + map[i][3] +
        //  " ,rot : y =" + map[i][4] +
        //  " ,rot : z =" + map[i][5] +
        //  " , witdh = " + map[i][6] +

        document.getElementById("world").append(newElement);
    } 
}

loadLevel( devLevel.levelData )