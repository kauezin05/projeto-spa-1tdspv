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
                            
                        </fieldset>
                    </form>
                </div>
            )}
        </>
    )
}