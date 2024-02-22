


let deltaTime = Date.now()
function game() {
    deltaTime = Math.min( (Date.now() - deltaTime) / 1000, 0.1 )
    deltaTime = Date.now()


    request = requestAnimationFrame( update )
}



game()
