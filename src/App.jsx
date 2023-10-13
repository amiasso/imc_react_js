import React, {useState} from "react"
import TabelaImc from "./tabela/TabelaImc"
import Peso from "./tabela/peso"
import Altura from "./tabela/Altura"
import CalcularIMC from "./tabela/CalcularIMC"
import ResultadoIMC from "./tabela/ResultadoIMC"

export default function App() {

  const [peso, setPeso] = useState(0)
  const [altura, setAltura] = useState(0)
  const [resultado, setResultado] = useState(0)

  return (
    <>
    <Peso p={peso} sp={setPeso}/>
    <Altura a={altura} sa={setAltura}/>
    <CalcularIMC p={peso} a={altura} sr={setResultado}/>
    <ResultadoIMC r={resultado}/>
     <TabelaImc/>
    </>
  );
}


