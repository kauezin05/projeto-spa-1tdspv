import Cabecalho from "./components/Cabecalho";
import Conteudo from "./components/Conteudo";
import reactLogo from "./assets/react.svg"
import Rodape from "./components/Rodape";
import {BrowserRouter,  Route, Routes } from "react-router-dom"


export default function App() {
  
  //ÁREA DECLARATIVA

  let reactLogoTextAlt = "Logo React"


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element></Route>
      </Routes>
    </BrowserRouter>
  )
}
