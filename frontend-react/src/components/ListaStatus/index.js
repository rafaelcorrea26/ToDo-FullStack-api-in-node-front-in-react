import './ListaStatus.css';

function ListaStatus(props) {
    return (
        <div className="listaStatus">
            <select   onChange={event => props.onChange(event.target.value)} required={props.required} defaultValue={props.valor}>
                <option value="Pendente">Pendente</option>
                <option value="Em Andamento">Em Andamento</option>
                <option value="Concluída">Concluída</option>
            </select>
        </div>      
    );
}

export default ListaStatus;
