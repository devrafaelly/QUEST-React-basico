import React from "react"

const TextChanger = (props) => {
  return (
    <>
      <h1>QUEST - React Básico</h1>
      <br/><br/><br/>
      <p style={{ color: props.color, textTransform: props.textTransform }}>{props.text}</p>
      <p style={{ color: 'purple', textTransform: 'uppercase' }}>{props.textChanged}</p>
    </>
    )
}

TextChanger.defaultProps = {
  text: 'Esse é um texto default, é branco com letras minúsculas!',
  color: 'white',
  textTransform: 'lowercase'
}

export default TextChanger;