import styles from './ModalEditar.scss';
import { useState } from 'react';

export default function ModalEditar({ open, setOpen }) {
    const [produto, setProduto] = useState({});

    const handleChange = () => {

    }

    return (
        <>
            {open && (
                <div className={styles.container}>
                    <form className='formulario'>
                        <fieldset className='fieldset'>
                            <button onClick={() => setOpen(false)}>X</button>
                            <legend>Cadastrar Produto</legend>
                            <div>
                                <label htmlFor="idProd">Nome do Produto</label>
                                <input
                                    type="text"
                                    name="nome"
                                    id="idProd"
                                    onChange={handleChange}
                                    value={produto.nome}
                                />
                            </div>
                            <div>
                                <label htmlFor="idDesc">Descrição</label>
                                <input
                                    type="text"
                                    name="desc"
                                    id="idDesc"
                                    onChange={handleChange}
                                    value={produto.desc}
                                />
                            </div>
                            <div>
                                <label htmlFor="idPreco">Preço</label>
                                <input
                                    type="text"
                                    name="preco"
                                    id="idPreco"
                                    onChange={handleChange}
                                    value={produto.preco}
                                />
                            </div>
                            
                        </fieldset>
                    </form>
                </div>
            )}
        </>
    )
}