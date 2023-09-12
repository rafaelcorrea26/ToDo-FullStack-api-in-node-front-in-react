import './ListaStatus.css';
import updateStatusTask from '../../api/updateStatusTask';

function ListaStatus(props) {

    const handleChange = async (event) => {
        evento => props.aoAlterado(evento.target.value);

        const task = {
            status: event.target.value  
        }


        console.log(task);

        await updateStatusTask(task);
        
      };



    return (
        <div className="listaStatus">
            <select   onChange={handleChange} required={props.required} value={props.valor}>
                <option value="Pendente">Pendente</option>
                <option value="Em Andamento">Em Andamento</option>
                <option value="Concluída">Concluída</option>
            </select>
        </div>      
    );
}

export default ListaStatus;
