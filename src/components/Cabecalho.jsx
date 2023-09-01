import { Link } from "react-router-dom";

export default function Cabecalho() {
    return (
      <>
        <header>
          <h1>Vite + React / Coded By- RM551812</h1>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/produtos">Produtos</Link>
            </li>
            <li>
            <Link to="/editar/produtos/1">PRODUTO-1</Link>
            </li>
          </ul>
        </header>
      </>
    );
  }
  