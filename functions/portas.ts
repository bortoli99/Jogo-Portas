import PortaModel from "../model/portaModel";

export function criarPortas(quantidade:number, comPresente: number): PortaModel[]{
    return Array.from({ length: quantidade }, (_, i) => {
        const numero = i + 1
        const premiada = numero === comPresente 
        return new PortaModel(numero, premiada)
    })
}

export function atualizarPortas(portas: PortaModel[], portaModificada: PortaModel): PortaModel[]{
    return portas.map(porta => {
        const igualAMdoficada = porta.numero === portaModificada.numero
        
        if(igualAMdoficada){
            return portaModificada
        }else{
            return porta.aberta ? porta : porta.desSelecionar()
        }


    })
}
