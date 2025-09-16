import {useState, useEffect} from 'react';

function Relogio(){
  // Criar um estaqdo chamado 'hora' que sera inicializado 
  // com a função Date()

  const [hora, sethora] = useState(new Date());

  // useEffect executado sem dependencias isto é 
  // o array [] vazio

  useEffect(() =>{
  // inicia o relogio  setInterval(a função a ser executada, intervalo de tempo)
  const idIntervalo = setInterval(() =>{
  console.log('Atualizando o relogio'); 
  sethora(new Date()); }, 1000);
  // esse retorno do useEffect() quando o componente for desmontado
  // evita-se que o setInterval rode desnecessariamente em segundo plano
  return() =>{
    clearInterval(idIntervalo);
    console.log('Relogio parado, intervalo limpo');
  }
  }, [])

  return(
    <div>
      <h2>Relogio Digital</h2>
      <p>A hora atual é: {hora.toLocaleTimeString()}</p>
    </div>
  )

}
export default Relogio;