import './ListaTarefas.css';
import ListaStatus from '../ListaStatus';
import BotaoAcao from '../BotaoAcao';
import updateTask from '../../api/updateTask';
import deleteTask from '../../api/deleteTask';
import fetchTasks from '../../api/fetchTasks';
import React, {useState } from "react";


function ListaTarefas({ data }) {  
    console.log(data);
    const { id, title, created_at, status} = data;
    const [novoStatus, setnovoStatus] = useState(status);
    console.log(novoStatus);

    const onClickAlterar = async () => {
        const task = {
            id: id,
            title: title,
            created_at: created_at,
            status: novoStatus  
        }

        console.log(task);
        await updateTask(task);
    }

    const onClickExcluir = async () => {
        await deleteTask(id);
        await fetchTasks();

    }
    return (
            <tbody className="listaTarefas">
                <tr>
                    <td>{title}</td>
                    <td>{created_at}</td>
                    <td >
                        <ListaStatus 
                            valor={novoStatus}
                            aoAlterado={valor => setnovoStatus(valor)}/>
                    </td>
                    <td >
                        <div className='botoes'>
                            <BotaoAcao
                                label="Editar"
                                cor='#FFA500'
                                onClique={onClickAlterar.bind()}
                            />
                            <BotaoAcao
                                label="Deletar"
                                cor='#FF0000'
                                onClique={onClickExcluir.bind()}
                            />
                        </div>
                    </td>
                </tr>
            </tbody>
    );
}

export default ListaTarefas;
