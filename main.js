const lamp = document.querySelector('#lamp')
const body = document.querySelector('body')
const h1 = document.querySelector('h1')
const botoes = document.querySelectorAll('button')





function acender()
{
   
  lamp.src = './assets/ligada.jpg'
  body.style.backgroundColor = 'white'
  h1.style.color = 'black'
  
  botoes.forEach(estilo => {
    estilo.style.backgroundColor = 'rgb(255, 255, 120)'

  })
 


  }

   













function desligar()
{

    lamp.src = './assets/desligado.png'
    body.style.backgroundColor = 'rgb(22, 22, 22)'
    h1.style.color = 'white'
  

    botoes.forEach(estilo => {
        estilo.style.backgroundColor = '#FFF'
    
      })

    
}

lamp.addEventListener('mouseover', acender)
lamp.addEventListener('mouseout', desligar)
lamp.addEventListener('dblclick', desligar)








 
  



