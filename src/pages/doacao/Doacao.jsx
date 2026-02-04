import CardDoacoes from '../../components/infocards/CardDoacoes'
import S from './doacao.module.scss'

const Doacao = () => {
  return (
    <main className={S.mainDoacoes}>
      <h1>Doação</h1>

      <CardDoacoes />
    </main>
  )
}

export default Doacao