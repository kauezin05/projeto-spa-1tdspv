import { Link } from "react-router-dom";

export default function Cabecalho() {
  return (
    <header>
      <h1>Vite + React / RM551812</h1>
      <ul>
        <li><Link to="/">HOME</Link></li>
        <li><Link to="/produtos">PRODUTOS</Link></li>
      </ul>
    </header>
  );
}
