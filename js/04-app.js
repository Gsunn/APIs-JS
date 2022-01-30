const fullScreenON = document.querySelector('#abrir-pantalla-completa')
const fullScreenOFF = document.querySelector('#salir-pantalla-completa')

fullScreenON.addEventListener('click', pantallaCompleta)

fullScreenOFF.addEventListener('click', salirPantallaCompleta)

function pantallaCompleta(){

    document.documentElement.requestFullscreen()
}

function salirPantallaCompleta(){
    document.exitFullscreen()

}