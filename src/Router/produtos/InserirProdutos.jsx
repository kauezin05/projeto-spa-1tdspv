import { ListaProdutos } from "./ListaProdutos";
import { useNavigate } from "react-router-dom";
import classes from "./InserirProdutos.module.css";

export default function InserirProdutos() {

  const navigate = useNavigate();

  
  document.title = "INSERIR PRODUTOS"
  
  const handleSubmitAdd = (event) =>{
     event.preventDefault();

         //Destructuring
    const {nome, desc, preco} = event.target;

    //useState()
    const produtoNovo = {
      id: ListaProdutos.length + 1,
      nome: nome.value,
      desc: desc.value,
      preco: preco.value,
      img: "https://picsum.photos/100/100",
      
    }

     ListaProdutos.push(produtoNovo);
     navigate("/produtos");
  }
  
  
  return (
      <div>
        <h1>EditarProdutos</h1>
        <div>
          <form onSubmit={handleSubmitAdd}>
            <fieldset>
              <legend>Novo produto</legend>
              <input type="hidden" name="id"/>
              <div>
                <label htmlFor="idProd">Nome do Produto</label>
                <input type="text" name="nome" id="idProd"/>
              </div>
              <div>
                <label htmlFor="idDesc">Descrição</label>
                <input type="text" name="desc" id="idDesc" />
              </div>
              <div>
                <label htmlFor="idPreco">Preço</label>
                <input
                  type="text"
                  name="preco"
                  id="idPreco"            
                />
              </div>
              <div>
                <button>INSERIR</button>
              </div>
            </fieldset>
          </form>
        </div>
  
      </div>
  );



}