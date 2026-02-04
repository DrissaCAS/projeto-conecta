import S from './infocards.module.scss'
import img1 from '../../assets/imagens/eventos/empoderando-jovens-futuro.png'
import img2 from '../../assets/imagens/eventos/tecnologia-que-transforma.png'
import img3 from '../../assets/imagens/eventos/carreira-primeiro-emprego.png'

const CardEventos = () => {
    return (
        <section className={S.sectionCard}>
            
            <article className={S.articleCards}>
                <img src={img1} alt="Empoderando Jovens para o Futuro" />
                <h3>Empoderando Jovens para o Futuro</h3>
                <p>Atividade: Palestra motivacional sobre liderança jovem e transformação social.</p>
                <p>Impacto: Inspirar adolescentes a se tornarem agentes de mudança em suas comunidades.</p>
                <button>Quero Participar</button>
            </article>

            <article className={S.articleCards}>
                <img src={img2} alt="Tecnologia que Transforma" />
                <h3>Tecnologia que Transforma</h3>
                <p>Atividade: Workshop de introdução à programação e inovação digital.</p>
                <p>Impacto: Preparar jovens para o mercado de trabalho através da tecnologia.</p>
                <button>Quero Participar</button>
            </article>

            <article className={S.articleCards}>
                <img src={img3} alt="Carreira e Primeiro Emprego" />
                <h3>Carreira e Primeiro Emprego</h3>
                <p>Atividade: Palestra com profissionais de RH sobre como preparar currículo, entrevistas e postura no mercado.</p>
                <p>Impacto: Ajudar jovens a conquistar oportunidades de trabalho.</p>
                <button>Quero Participar</button>
            </article>
        </section>
    )
}

export default CardEventos