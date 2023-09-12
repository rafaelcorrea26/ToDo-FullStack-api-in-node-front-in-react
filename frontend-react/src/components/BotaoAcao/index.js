import updateTask from '../../api/updateTask';
import './BotaoAcao.css';

function BotaoAcao(props) {
    const cssCor = { backgroundColor: props.cor };

    return (
        <div className="botaoAcao">
                <button style={cssCor} onClick={props.onClique}>
                    <span> {props.label}</span>
                </button>
        </div>)
} 


    export default BotaoAcao;
