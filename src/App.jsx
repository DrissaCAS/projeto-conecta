import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./globalStyle.scss"
import Home from "./pages/home/Home";
import Doacao from "./pages/doacao/Doacao";
import Voluntariado from "./pages/voluntariado/Voluntariado";
import Mentoria from "./pages/mentoria/mentoria";
import Eventos from "./pages/eventos/eventos";
import Usuario from "./pages/usuario/Usuario";
import Header from "./components/header/Header";



const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/doacao" element={<Doacao />} />
        <Route path="/voluntariado" element={<Voluntariado />} />
        <Route path="/mentoria" element={<Mentoria />} />
        <Route path="/eventos" element={<Eventos />} />
        <Route path="/usuario" element={<Usuario />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;