class NegociacaoController{

    constructor(){

        this._inputData = document.getElementById('data')
        this._inputQuantidade = document.getElementById('quantidade')
        this._inputValor = document.getElementById('valor') 
        this._negociacoes = new Negociacoes()  
      
    }
    

    adiciona(event){
       
        event.preventDefault()
        
        //classe com metodos estáticos não precisa instanciar a classe
        //x = new DateConverter()
            
        

        let negociacao = new Negociacao(
            DateConverter.paraData( this._inputData.value ),
            parseInt(this._inputQuantidade.value),
            parseFloat(this._inputValor.value)
        )

        this._negociacoes.adiciona( negociacao )
       console.log( this._negociacoes.paraArray())
        
       
      
       
    }

}