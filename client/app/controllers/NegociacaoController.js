class NegociacaoController{

    constructor(){

        this._inputData = document.getElementById('data')
        this._inputQuantidade = document.getElementById('quantidade')
        this._inputValor = document.getElementById('valor')   
      
    }
    

    adiciona(event){
       
        event.preventDefault()
        console.log('entrei controller')
        
        let data = new Date(...
            this._inputData.value
            .split('-')
            .map(( item, indice ) => item - indice % 2
                
           ))

        let negociacao = new Negociacao(
            data,
            parseInt(this._inputQuantidade.value),
            parseFloat(this._inputValor.value)
        )

        console.log(negociacao)
        
       
      
       
    }

}