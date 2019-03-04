class Negociacao{

    
    constructor(data, _quantidade, _valor){
        
       Object.assign(this,{ _quantidade,_valor })
       _data: new Date( data.getTime())
       Object.freeze(this)
    }

    get volume(){

        return this._quantidade * this._valor
    }

    get quantidade(){
        return this._quantidade
    }
    get valor(){
        return this._valor
    }
    get data(){
        return new Date( this._data.getTime())

    }



}