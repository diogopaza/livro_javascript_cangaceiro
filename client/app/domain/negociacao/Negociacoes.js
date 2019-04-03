class Negociacoes{

    constructor(){
        
        this._negociacoes = []
    }

    adiciona(negociacao){

        this._negociacoes.push(negociacao)

    }

    paraArray(){

        return [].concat(this._negociacoes)
    }

    getVolumeTotal(){
      
        return this._negociacoes    
            .reduce(function (total, negociacao){
                return total + negociacao.volume
            }, 0)
    }

}