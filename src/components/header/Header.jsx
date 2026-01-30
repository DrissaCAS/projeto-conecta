import S from "./header.module.scss"
import { Link } from "react-router-dom"
import logo from "../../assets/icones/logo.png"

const Header = () => {
  return (
    <>
      <header>
          <Link to={"/"}>
              <img src={logo} alt="Imagem da logo do projeto Connect, sendo representada por uma mão segurando um coração, simbolizando apoio." />
          </Link>

          <nav className={S.navHeader}>
              <Link to={"/doacao"} className={S.menu}>Doação</Link>
              <Link to={"/voluntariado"} className={S.menu}>Voluntariado</Link>
              <Link to={"/mentoria"} className={S.menu}>Mentoria</Link>
              <Link to={"/eventos"} className={S.menu}>Eventos</Link>
          </nav>

          <img src="https://avatars.githubusercontent.com/u/25387693?v=4" alt="Foto do Usuário" className={S.photoProfile} />
      </header>

      <nav className={S.navUser}>
        <Link to={"/usuario"}>Drissa Cas</Link>
        <Link to={"/voluntariado"}>Meu Voluntariado</Link>
        <Link>Configurações</Link>
        <Link className={S.menuMobile}>Sair</Link>
      </nav>
    </>
  )
}

export default Header;