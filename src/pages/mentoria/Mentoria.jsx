import CardMentoria from "../../components/infocards/CardMentoria"
import S from './mentoria.module.scss'

const Mentoria = () => {
  return (
    <main className={S.mainMentoria}>
        <h1>Mentoria</h1>

        <CardMentoria />
    </main>
  )
}

export default Mentoria