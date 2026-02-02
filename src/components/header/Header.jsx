import S from "./header.module.scss"
import { Link } from "react-router-dom"
import logo from "../../assets/icones/logo.png"
import { useEffect, useState } from "react"

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768)

  useEffect(() => {
    function menuMobile () {
      setIsMobile(window.innerWidth <= 768);
      if (innerWidth > 768) {
        setMenuOpen(false)
      }
    }
    window.addEventListener("resize", menuMobile);
    return () => window.removeEventListener('resize', menuMobile)
  }, [])

  return (
    <>
      <header>
          <Link to={"/"}>
              <img src={logo} alt="Imagem da logo do projeto Connect, sendo representada por uma mão segurando um coração, simbolizando apoio." />
          </Link>

          {!isMobile &&
            (<nav className={S.navHeader}>
                <Link to={"/doacao"} className={S.menu} onClick={() => setMenuOpen(false)}>Doação</Link>
                <Link to={"/voluntariado"} className={S.menu} onClick={() => setMenuOpen(false)}>Voluntariado</Link>
                <Link to={"/mentoria"} className={S.menu} onClick={() => setMenuOpen(false)}>Mentoria</Link>
                <Link to={"/eventos"} className={S.menu} onClick={() => setMenuOpen(false)}>Eventos</Link>
            </nav>)
          }


          <img className={S.photoProfile} src="https://avatars.githubusercontent.com/u/25387693?v=4" alt="Foto do Usuário"  onClick={() => setMenuOpen(!menuOpen)} />
      </header>

      <nav className={menuOpen ? S.navUser : S.closedNavUser}>
        <Link to={"/usuario"} onClick={() => setMenuOpen(false)}>Drissa Cas</Link>
        <Link to={"/voluntariado"} onClick={() => setMenuOpen(false)}>Meu Voluntariado</Link>
        <Link onClick={() => setMenuOpen(false)}>Configurações</Link>

        {isMobile &&
          (<div>
            <Link to={"/doacao"} className={S.menu} onClick={() => setMenuOpen(false)}>Doação</Link>
              <Link to={"/voluntariado"} className={S.menu} onClick={() => setMenuOpen(false)}>Voluntariado</Link>
              <Link to={"/mentoria"} className={S.menu} onClick={() => setMenuOpen(false)}>Mentoria</Link>
              <Link to={"/eventos"} className={S.menu} onClick={() => setMenuOpen(false)}>Eventos</Link>
          </div>)
        }

        <Link className={S.menuMobile} onClick={() => setMenuOpen(false)}>Sair</Link>
      </nav>
    </>
  )
}

export default Header;