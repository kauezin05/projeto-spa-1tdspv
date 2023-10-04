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
                            
                        </fieldset>
                    </form>
                </div>
            )}
        </>
    )
}