let controller = new NegociacaoController()

form = document.getElementById('myForm')

form.addEventListener('submit', function(event){
    console.log('estou no app')
    controller.adiciona(event)
})