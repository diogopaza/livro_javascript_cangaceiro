class NegociacaoController{

    constructor(){

        this._inputData = document.getElementById('data')
        this._inputQuantidade = document.getElementById('quantidade')
        this._inputValor = document.getElementById('valor')   
      
    }
    

    adiciona(event){
       
        event.preventDefault()
        
        //classe com metodos estáticos não precisa instanciar a classe
        //x = new DateConverter()
            console.log(this._inputData.value)
        

        let negociacao = new Negociacao(
            DateConverter.paraData( this._inputData.value ),
            parseInt(this._inputQuantidade.value),
            parseFloat(this._inputValor.value)
        )
        
       console.log(negociacao.data)
        
       
      
       
    }

}