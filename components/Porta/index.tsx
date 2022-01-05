import styles from './style.module.css'
import PortaModel from '../../model/portaModel'
import Presente from '../Presente'
import { MouseEvent } from 'react'


interface PortaProps {
    value: PortaModel,
    onChange: (novaPorta: PortaModel) => void
}

export default function Porta(props: PortaProps) {
    const porta = props.value

    const selecionada = porta.selecionada && !porta.aberta ? styles.selecionada : ''

    function alternarSelecao(event: MouseEvent<HTMLDivElement>) {
        props.onChange(porta.alternarSelecao())
    }

    function abrir(event: MouseEvent<HTMLDivElement>) {
        event.stopPropagation()
        props.onChange(porta.abrir())
    }

    function renderizarPorta() {
        return (
            <div className={styles.porta}>
                <div className={styles.numero}>{porta.numero}</div>
                <div className={styles.macaneta} onClick={abrir} ></div>
            </div>
        )
    }

    return (
        <div className={styles.area} onClick={alternarSelecao} >
            <div className={`${styles.estrutura} ${selecionada}`}>
                {porta.fechada ? renderizarPorta() : porta.premiado ? <Presente /> : false}
            </div>
            <div className={styles.chao}></div>
        </div>
    )
}