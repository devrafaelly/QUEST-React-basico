import React from "react";

const showLabel = (props) => {
    alert(`A label desse botão é: ${props.label}`)
}

const Button = (props) => {
    return <button onClick={() => showLabel(props)}>Clique aqui para um alerta misterioso</button>
}

Button.defaultProps = {
    label: 'Clique aqui'
}

export default Button