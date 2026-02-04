import S from './infocards.module.scss'
import img1 from '../../assets/imagens/mentoria/mentoria-carreira-emprego.png'
import img2 from '../../assets/imagens/mentoria/compartilhe-experiencia.png'
import img3 from '../../assets/imagens/mentoria/acompanhamento.png'

const CardMentoria = () => {
    return (
        <section className={S.sectionCard}>
            
            <article className={S.articleCards}>
                <img src={img1} alt="Mentoria de Carreira e Emprego" />
                <h3>Mentoria de Carreira e Emprego</h3>
                <p>Orientação sobre currículo, entrevistas e primeiros passos no mercado de trabalho.</p>
                <button>Quero Participar</button>
            </article>

            <article className={S.articleCards}>
                <img src={img2} alt="Projeto Futuro na Escola" />
                <h3>Compartilhe Experiência</h3>
                <p>Oriente jovens e profissionais iniciantes em sua área.</p>
                <button>Quero Participar</button>
            </article>

            <article className={S.articleCards}>
                <img src={img3} alt="Acompanhamento" />
                <h3>Acompanhamento</h3>
                <p>Participe como guia em jornadas de aprendizado e desenvolvimento.</p>
                <button>Quero Participar</button>
            </article>
        </section>
    )
}

export default CardMentoria
