let controller = new NegociacaoController()

form = document.getElementById('myForm')


form.addEventListener('submit', function(event){
   
    controller.adiciona(event)
})


