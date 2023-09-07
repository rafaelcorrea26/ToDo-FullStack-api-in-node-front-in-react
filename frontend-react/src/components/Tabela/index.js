import './Tabela.css';
import ListaStatus from '../ListaStatus';
import BotaoAcao from '../BotaoAcao';

function Tabela() {
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

                <tbody>
                    <td>título da task</td>
                    <td>00 de janeiro de 2023 15:00</td>
                    <td >
                        <ListaStatus />
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
                </tbody>


            </table>
        </div>
    );
}

export default Tabela;
