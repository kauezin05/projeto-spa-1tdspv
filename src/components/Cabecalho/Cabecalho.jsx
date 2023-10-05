import { Link, useLocation } from "react-router-dom";
import { BsFillBoxSeamFill as Logo } from "react-icons/bs"
import "./Cabecalho.scss";

export default function Cabecalho() {

    const rota = useLocation();

  return (
    <>
      <header className="cabecalho">

        <h1><Logo/></h1>

        <h1>PROJETO REACT - FIAP</h1>

        <ul>
          <li>
            <Link to="/" className={rota.pathname == "/" ? "active" : ""}>HOME</Link>
          </li>
          <li>
            <Link to="/produtos" className={rota.pathname == "/produtos" ? "active" : ""}>PRODUTOS</Link>
          </li>
        </ul>
      </header>
    </>
  );
}
