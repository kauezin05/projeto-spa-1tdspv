import "./Home.scss"

export default function Home() {

    document.title = "Home";
  
    return (
      <section className="containerHome">
          <h1>COMPONENTE - HOME</h1>
          <img className="imagemProdutos" src="/produtos.jpg" alt="Produtos" />
      </section>
    )
  }