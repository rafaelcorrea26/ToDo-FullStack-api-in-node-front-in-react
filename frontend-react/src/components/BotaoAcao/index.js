import './BotaoAcao.css';

function BotaoAcao(props) {
    const cssCor = {backgroundColor: props.cor};
    return (
        <div className="botaoAcao">
            <button style={cssCor}>
                <span> {props.label}</span>
            </button>
        </div>
    );
}

export default BotaoAcao;
