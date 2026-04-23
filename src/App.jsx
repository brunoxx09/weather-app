 import { useState } from "react"
 import BarraDeBusca from "./components/barradebusca"
 import Temperatura from "./components/temperatura"
 import MensagemDeErro from "./components/mensagemdeerro"
 import './App.css'
 function App(){
  
  const [clima,setclima]= useState(null)
  const [erro,seterro]= useState(null)
  const [carregado,setcarregado]=useState(false)
  
  async function buscarclima(cidade){
   setclima(null)
   seterro(null)
   setcarregado(true)
  
 const resposta = await fetch(
  `https://geocoding-api.open-meteo.com/v1/search?name=${cidade}&count=1&language=pt&format=json`
)
const dados = await resposta.json()

if (!dados.results) {   
    seterro('Cidade não encontrada')
    setcarregado(false)
    return
  }

  const {latitude,longitude,name:nome}= dados.results[0]

const respostaclima = await fetch(
  `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,weathercode&timezone=auto`
)
const dadosclima = await respostaclima.json()

setclima({
  cidade:nome,
  temperatura:dadosclima.current.temperature_2m
})
setcarregado(false)

}

return (
    <div className="container">
      <h1>Clima das cidades</h1>
      <BarraDeBusca onBuscar={buscarclima}/>
      {clima && <Temperatura dados={clima}/>}
      {erro && <MensagemDeErro mensagem={erro}/>}
    </div>
   )
}
export default App