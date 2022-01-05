import styles from '../styles/Home.module.css'
import Cartao from '../components/Cartao'
import Link from 'next/link'
import EntradaNumerica from '../components/EntradaNumerica'
import { useState } from 'react'

export default function Home() {

  const [ quantidadePortas, setQuantidadePortas] = useState(3)
  const [ comPresente, setComPresente ] = useState(1)

  return (
    <div className={styles.formulario} >
      <div>
        <Cartao bgcolor="#C0392C">
          <h1>Monty Hall</h1>
        </Cartao>
        <Cartao>
          <EntradaNumerica value={quantidadePortas} onChange={novaQuantidadePortas => setQuantidadePortas(novaQuantidadePortas)} text="Quantidade de Portas?" />
        </Cartao>
      </div>
      <div>
        <Cartao> 
          <EntradaNumerica value={comPresente} onChange={novaPortaComPresente => setComPresente(novaPortaComPresente)} text="Porta Premiada?" />
        </Cartao>
        <Cartao bgcolor="#28A085">
          <Link href={`/jogo/${quantidadePortas}/${comPresente}`} passHref>
            <h2 className={styles.link}>Inciar</h2>
          </Link>
        </Cartao>
      </div>
    </div>
  )
}
