export default class PortaModel{
    #numero: number
    #premiado: boolean
    #selecionada: boolean
    #aberta: boolean

    constructor(numero: number, premiado = false, selecionada = false, aberta = false){
        this.#numero = numero
        this.#premiado = premiado
        this.#aberta = aberta
        this.#selecionada = selecionada 
    }

    get numero(){
        return this.#numero
    }

    get premiado(){
        return this.#premiado
    }

    get selecionada(){
        return this.#selecionada
    }

    get aberta(){
        return this.#aberta
    }

    get fechada(){
        return !this.aberta
    }


    desSelecionar(){
        const selecionada = false
        return new PortaModel(this.numero, this.premiado, selecionada, this.aberta)
    }

    alternarSelecao(){
        const selecionada = !this.selecionada
        return new PortaModel(this.numero, this.premiado, selecionada, this.aberta)
    }

    abrir(){
        const aberta = true
        return new PortaModel(this.numero, this.premiado, this.selecionada, aberta)
    }

}