import { useState } from 'react';
import CampoTexto from '../CampoTexto';
import './Formulario.css';
import Botao from '../Botao';
import Tabela from '../Tabela';
import insertTask from '../../api/insertTask';

const Formulario = () => {
    const [tarefa, setTarefa] = useState('');

    const aoSalvar = async (evento) => {

        console.log(' cheguei no botao de incluir');
        const task = {
            title: tarefa
        }

    await insertTask(task);

    }

    return (
        <main>
            <section className="formulario">
                <h2>Preencha os dados para criar a tarefa</h2>
                <form onSubmit={aoSalvar}>
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