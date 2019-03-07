class NegociacaoController{

    constructor(){

        this._inputData = document.getElementById('data')
        this._inputQuantidade = document.getElementById('quantidade')
        this._inputValor = document.getElementById('valor') 
        this._negociacoes = new Negociacoes()  
        this._negociacoesView = new NegociacoesView('negociacoes')
        
        this._negociacoesView.update(this._negociacoes)
      
    }


    

    adiciona(event){
       
        event.preventDefault()
        
        //classe com metodos estáticos não precisa instanciar a classe
        //x = new DateConverter()
            
        

        

        this._negociacoes.adiciona( this._criarNegociacao() )
        
     
        this._negociacoesView.update(this._negociacoes)
        this._limpaFormulario()
      
       
    }

    _limpaFormulario(){

        this._inputData.value = ''
        this._inputQuantidade.value = '1'
        this._inputValor.value = ''

    }

    _criarNegociacao(){

        return new Negociacao(
            DateConverter.paraData( this._inputData.value ),
            parseInt(this._inputQuantidade.value),
            parseFloat(this._inputValor.value)
        )
    }

}