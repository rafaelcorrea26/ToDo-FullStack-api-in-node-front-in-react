import './ListaTarefas.css';
import ListaStatus from '../ListaStatus';
import BotaoAcao from '../BotaoAcao';


function ListaTarefas({ data }) {
    const { id, title, created_at, status } = data;

    return (
            <tbody className="listaTarefas">
                <tr>
                    <td>{title}</td>
                    <td>{created_at}</td>
                    <td >
                        <ListaStatus status={status}/>
                    </td>
                    <td >
                        <div className='botoes'>
                            <BotaoAcao
                                label="Editar"
                                cor='#FFA500'
                            />
                            <BotaoAcao
                                label="Deletar"
                                cor='#FF0000'
                            />
                        </div>
                    </td>
                </tr>
            </tbody>
    );
}

export default ListaTarefas;
