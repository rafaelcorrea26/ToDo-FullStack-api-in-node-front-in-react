import './CampoTexto.css';

 /*required={props.obrigatorio} obriga a ser obrigatorio o campo que e passado no parametro*/
const CampoTexto = (props) => {
    const placeholderModificada = `Digite sua ${props.label}`;
    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value)
    }  
    
    return (
        <div className="campo-Texto">
            <label>{props.label}</label>
            <input value={props.valor} onChange={aoDigitado} required={props.obrigatorio}  placeholder= {placeholderModificada}/>
        </div>
    )
}

export default CampoTexto;