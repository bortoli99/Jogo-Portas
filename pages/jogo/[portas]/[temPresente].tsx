import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import Porta from "../../../components/Porta"
import { atualizarPortas, criarPortas } from "../../../functions/portas"
import styles from "./jogo.module.css"

export default function jogo() {
    const router = useRouter()
    const [portas, setPortas] = useState([])

    useEffect(() => {
        const quantidade = + router.query.portas // metodo para transformar em int
        const portaPremiada = + router.query.temPresente
        setPortas(criarPortas(quantidade, portaPremiada))
    },[router?.query])

    function renderizarPortas() {
        return portas.map((porta, key) => {
            return <Porta value={porta} key={key} onChange={novaPorta => setPortas(atualizarPortas(portas, novaPorta))} />
        })
    }

    return (
        <div className={styles.jogo}>
            <div className={styles.portas}>
                {renderizarPortas()}
            </div>
            <div className={styles.botoes}>
                <Link href="/" passHref><button>Reniciar Jogo</button></Link>
            </div>
        </div>
    )
}