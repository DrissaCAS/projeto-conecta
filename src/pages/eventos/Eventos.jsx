import CardEventos from '../../components/infocards/CardEventos'
import S from './eventos.module.scss'

const Eventos = () => {
  return (
    <main className={S.mainEventos}>
        <h1>Eventos & Palestras</h1>

        <CardEventos />
    </main>
  )
}

export default Eventos