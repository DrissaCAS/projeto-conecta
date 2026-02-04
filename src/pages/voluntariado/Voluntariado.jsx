import CardVoluntariado from "../../components/infocards/CardVoluntariado"
import S from "./voluntariado.module.scss"

const Voluntariado = () => {
  return (
    <main className={S.mainVoluntariado}>
        <h1>Voluntariado</h1>

        <CardVoluntariado />
    </main>
  )
}

export default Voluntariado