// Detecta si nuestra página se esta ejecutando en primer o segundo plano...
document.addEventListener('visibilitychange', e => {
    console.log(document.visibilityState)

    if(document.visibilityState === 'visible') {
        console.log('Función para reproducir el video....' )
    } else {
        console.log('Pausando el video...')
    }
})

// Existen muchas API's nuevas, la de geolocalización no es tan nueva y 
// es de las más populares