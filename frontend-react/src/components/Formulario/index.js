import { useState } from 'react';
import CampoTexto from '../CampoTexto';
import './Formulario.css';
import Botao from '../Botao';
import Tabela from '../Tabela';

const Formulario = (props) => {
    const [tarefa, setTarefa] = useState('')

    return (
        <main>
            <section className="formulario">
            <h2>Preencha os dados para criar a tarefa</h2>
                <form >                
                    <CampoTexto
                        label="Tarefa"
                        valor={tarefa}
                        aoAlterado={valor => setTarefa(valor)}
                    />
                    <Botao />
                </form>
            </section>
            <Tabela />
        </main>
    )
}
export default Formulario;