import './ListaStatus.css';

function ListaStatus() {
    return (
        <div className="listaStatus">
            <select>
                <option value="Pendente">Pendente</option>
                <option value="Em Andamento">Em Andamento</option>
                <option value="Concluída">Concluída</option>
            </select>
        </div>
    );
}

export default ListaStatus;
