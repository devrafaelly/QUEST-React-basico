import './App.css'
import TextChanger from './components/Text/text.jsx'
import Button from './components/Button/button.jsx'

function App() {
  return (
    <>
      <TextChanger textChanged='esse é um texto transformado, é roxo com letras maiúsculas!'/>
      <br/>
      <Button label='Parabéns, esse é seu alerta misterioso!' />
    </>
  )
}

export default App
