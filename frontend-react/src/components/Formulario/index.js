import { useState } from 'react';
import CampoTexto from '../CampoTexto';
import './Formulario.css';

const Formulario = (props) => {
    const [tarefa, setTarefa] = useState('')

    return (

        <body>

            <main>

                <form class="add-form">
                <CampoTexto
                    label="Tarefa"
                    valor={tarefa}
                    aoAlterado={valor => setTarefa(valor)}
                />
                    <button type="submit">+</button>
                </form>

                <table>
                    <thead>
                        <tr>
                            <th>Tarefa</th>
                            <th>Criada em</th>
                            <th>Status</th>
                            <th>Ações</th>
                        </tr>
                    </thead>

                    <tbody>
                        <td>título da task</td>
                        <td>00 de janeiro de 2023 15:00</td>
                        <td>
                            <select>
                                <option value="pendente">pendente</option>
                                <option value="em andamento">em andamento</option>
                                <option value="concluída">concluída</option>
                            </select>
                        </td>
                        <td>
                            <button class="btn-action">
                                <span class="material-symbols-outlined">edit</span>
                            </button>

                            <button class="btn-action">
                                <span class="material-symbols-outlined">delete</span>
                            </button>
                        </td>
                    </tbody>


                </table>

            </main>
        </body>
    )
}
export default Formulario;