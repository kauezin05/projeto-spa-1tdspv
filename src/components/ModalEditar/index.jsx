import "./ModalEditar.scss";
import styles from './ModalEditar.scss';
import { useState, useEffect } from 'react';

export default function ModalEditar({ open, setOpen, id }) {
    const [produtoEditar, setProdutoEditar] = useState([{
        id: "",
        nome: "",
        desc: "",
        preco: "",
        img: ""
    }]);

    const fetchData = async () => {
        fetch("http://localhost:5000/produtos", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((response) => response.json())
            .then((data) => {
                const produtoFiltro = data.find(item => item.id === Number(id));
                setProdutoEditar(produtoFiltro && produtoFiltro);
            })
            .catch((error) => console.log(error));
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setProdutoEditar({ ...produtoEditar, [name]: value });
        console.log("handleChange: ", produtoEditar)
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch(`http://localhost:5000/produtos/${id}`, {
            method: "PUT",
            body: JSON.stringify(produtoEditar),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((response) => response.json())
            .then((data) => console.log(data))
            .catch((error) => console.log(error));
        setOpen(false);
    };

    useEffect(() => {
        open && fetchData();
    }, [open]);

    return (
        <>
            {open && (
                <div className={styles.container}>
                    <form onSubmit={handleSubmit} className='formulario'>
                        <fieldset className='fieldset'>
                            <div className="header">
                                <h3 className="titulo">Editar Produto</h3>
                                <button className="closeButton" onClick={() => setOpen(false)}>X</button>
                            </div>
                            
                            <div className="inputContainer">
                                <label className="label" htmlFor="idProd">Nome do Produto</label>
                                <input className="input"
                                    type="text"
                                    name="nome"
                                    id="idProd"
                                    onChange={handleChange}
                                    value={produtoEditar?.nome}
                                />
                            </div>
                            <div className="inputContainer">
                                <label className="label" htmlFor="idDesc">Descrição</label>
                                <input className="input"
                                    type="text"
                                    name="desc"
                                    id="idDesc"
                                    onChange={handleChange}
                                    value={produtoEditar?.desc}
                                />
                            </div >
                            <div className="inputContainer">
                                <label className="label" htmlFor="idPreco">Preço</label>
                                <input className="input"
                                    type="text"
                                    name="preco"
                                    id="idPreco"
                                    onChange={handleChange}
                                    value={produtoEditar?.preco}
                                />
                            </div>
                            <div className="inputContainer">
                                <label className="label" htmlFor="idImg">Imagem</label>
                                <input className="input"
                                    type="url"
                                    name="img"
                                    id="idImg"
                                    onChange={handleChange}
                                    value={produtoEditar?.img}
                                />
                            </div>

                            <button className="editButton">EDITAR</button>

                        </fieldset>
                    </form>
                </div>
            )}
        </>
    )
}