import './Tabela.css';
import ListaTarefas from '../ListaTarefas';
import Loading from '../Loading';
import { useContext, useEffect } from 'react';
import fetchTasks from '../../api/fetchTasks';
import AppContext from '../../context/AppContext';

function Tabela() {
    const { tasks, setTasks, loading, setLoading } = useContext(AppContext);

    useEffect(() => {
        fetchTasks().then((response) => {
            setTasks(response);
            setLoading(false);
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="tabela">
            <table>
                <thead>
                    <tr>
                        <th>Tarefa</th>
                        <th>Criada em</th>
                        <th>Status</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                {tasks?.map((task) => <ListaTarefas key={task.id} data={task} />)}
            </table>
        </div>
    );
}

export default Tabela;
