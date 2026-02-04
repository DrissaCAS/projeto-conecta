import S from './infocards.module.scss'
import img1 from '../../assets/imagens/doacao/instituto-grande-familia.png'
import img2 from '../../assets/imagens/doacao/projeto-futuro-escola.png'
import img3 from '../../assets/imagens/doacao/instituto-conecta-jovem.png'

const CardDoacoes = () => {
    return (
        <section className={S.sectionCard}>
            
            <article className={S.articleCards}>
                <img src={img1} alt="Instituto grande familia" />
                <h3>Instituto Grande Familia</h3>
                <p>Contribua com alimentos não perecíveis e ajude famílias em situação de vulnerabilidade.</p>
                <button>Quero Doar</button>
            </article>

            <article className={S.articleCards}>
                <img src={img2} alt="Projeto Futuro na Escola" />
                <h3>Projeto Futuro na Escola</h3>
                <p>Doe livros, cadernos, lápis, mochilas e canetas para ajudar jovens a continuarem seus estudos com mais estrutura.</p>
                <button>Quero Doar</button>
            </article>

            <article className={S.articleCards}>
                <img src={img3} alt="Instituto Conecta Jovem" />
                <h3>Instituto Conecta Jovem</h3>
                <p>Doe computadores usados, tablets ou celulares em bom estado para permitir que jovens tenham acesso ao mundo digital e novas oportunidades.</p>
                <button>Quero Doar</button>
            </article>
        </section>
    )
}

export default CardDoacoes