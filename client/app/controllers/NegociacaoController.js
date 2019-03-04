class NegociacaoController{

    constructor(){

        this._inputData = document.getElementById('data')
        this._inputQuantidade = document.getElementById('quantidade')
        this._inputValor = document.getElementById('valor')   
      
    }
    

    adiciona(event){
       
        event.preventDefault()
        console.log('entrei controller')
        /*
        let negociacao = new Negociacao(
            this._inputData.nodeValue,
            parseInt(this._inputQuantidade.value),
            parseFloat(this._inputValor)
        )

        console.log(negociacao)
        */
       console.log( typeof(this._inputData.value))
    }

}