// Speech

const salida = document.querySelector('#salida')
const microfono = document.querySelector('#microfono')

const divTexto = document.querySelector('#texto')

microfono.addEventListener('click', speechAPI)

function speechAPI(){
    const speechAPI = webkitSpeechRecognition

    const voz = new speechAPI()

    voz.start()

    voz.onstart = ()=>{
        salida.classList.add('mostrar')
        salida.textContent = 'Escuchando ...'
    }

    voz.onspeechend = ()=>{
        salida.textContent = 'Stop ...'
        voz.stop()
    }

    voz.onresult = (e)=>{
        console.log(e.results[0][0]);
        const texto = document.createElement('p')
        texto.textContent = `${e.results[0][0].transcript} : ${ Math.round(Number(e.results[0][0].confidence) * 100)} %`
        divTexto.appendChild(texto)
    }

}