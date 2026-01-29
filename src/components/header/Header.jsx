import S from "./header.module.scss"
import { Link } from "react-router-dom"
import logo from "../../assets/icones/logo.png"

const Header = () => {
  return (
    <header>
        <Link to={"/"}>
            <img src={logo} alt="Imagem da logo do projeto Connect, sendo representada por uma mão segurando um coração, simbolizando apoio." />
        </Link>

        <nav className={S.navHeader}>
            <Link to={"/doacao"}>Doação</Link>
            <Link to={"/voluntariado"}>Voluntariado</Link>
            <Link to={"/mentoria"}>Mentoria</Link>
            <Link to={"/eventos"}>Eventos</Link>
        </nav>

        <img src="https://avatars.githubusercontent.com/u/25387693?v=4" alt="Foto do Usuário" className={S.photoProfile} />
    </header>
  )
}

export default Header;