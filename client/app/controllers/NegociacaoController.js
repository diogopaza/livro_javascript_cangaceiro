class NegociacaoController{


    adiciona(event){
       
        event.preventDefault()
        let inputData = document.getElementById('data')
        let inputQuantidade = document.getElementById('quantidade')
        let inputValor = document.getElementById('valor')
        console.log(typeof(inputData.value))
        console.log(inputQuantidade.value)
        console.log(inputValor.value)

    }

}