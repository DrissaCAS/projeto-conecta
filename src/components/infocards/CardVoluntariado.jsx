import S from './infocards.module.scss'
import img1 from '../../assets/imagens/voluntariado/mutirao-reciclagem.png'
import img2 from '../../assets/imagens/voluntariado/aulas-tecnologia.png'
import img3 from '../../assets/imagens/voluntariado/esporte-inclusao.png'

const CardVoluntariado = () => {
    return (
        <section className={S.sectionCard}>
            
            <article className={S.articleCards}>
                <img src={img1} alt="Mutirão de reciclagem" />
                <h3>Mutirão de reciclagem</h3>
                <p>Coletar materiais recicláveis e orientar sobre descarte consciente.</p>
                <button>Quero Participar</button>
            </article>

            <article className={S.articleCards}>
                <img src={img2} alt="Aulas de Tecnologia" />
                <h3>Aulas de Tecnologia</h3>
                <p>Ensinar noções básicas de informática, internet segura e programação. Preparar jovens para o mercado de trabalho digital.</p>
                <button>Quero Participar</button>
            </article>

            <article className={S.articleCards}>
                <img src={img3} alt="Acompanhamento" />
                <h3>Esporte e Inclusão</h3>
                <p>Organizar treinos e jogos que incentivem a participação de todos. Promover disciplina, saúde e trabalho em equipe entre jovens.</p>
                <button>Quero Participar</button>
            </article>
        </section>
    )
}

export default CardVoluntariado