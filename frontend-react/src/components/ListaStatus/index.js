import './ListaStatus.css';

function ListaStatus(props) {
    return (
        <div className="listaStatus">
            <select value={props.status}>
                <option value="Pendente">Pendente</option>
                <option value="Em Andamento">Em Andamento</option>
                <option value="Concluída">Concluída</option>
            </select>
        </div>
    );
}

export default ListaStatus;
