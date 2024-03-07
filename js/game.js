


function game() {

    updatePlayer(  )

    request = requestAnimationFrame( game )
}

window.onload = () => {
    loadLevel( devLevel )

    game()
}