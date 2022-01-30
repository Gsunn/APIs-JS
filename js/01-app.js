const notificacion = document.querySelector('#notificar')

notificacion.addEventListener('click', ()=>{
    Notification
        .requestPermission()
        .then(resultado => {
            console.log(resultado);
        })
})

const verNotificacion = document.querySelector('#verNotificacion')

verNotificacion.addEventListener('click', ()=>{
   if(Notification.permission === 'granted'){
        const notificacion = new Notification('JavaScript Next Level UP', {
           icon : 'img/kavinsky.png',
           body : 'Kavinsky says :  Gsun está a fuego con JavaScript!!'
        })

        notificacion.onclick = ()=>{
            window.open('https://github.com/Gsunn?tab=repositories')
        }
   }
})