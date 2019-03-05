class NegociacaoController{

    constructor(){

        this._inputData = document.getElementById('data')
        this._inputQuantidade = document.getElementById('quantidade')
        this._inputValor = document.getElementById('valor')   
      
    }
    

    adiciona(event){
       
        event.preventDefault()
       
        
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

        let diaMesAno = negociacao.data.getDate()
            + '/'+ ( negociacao.data.getMonth() + 1 )
            +'/'+ negociacao.data.getFullYear()

        console.log(diaMesAno)
        
       
      
       
    }

}