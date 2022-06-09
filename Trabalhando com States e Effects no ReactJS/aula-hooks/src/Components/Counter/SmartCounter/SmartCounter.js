import {useState} from 'react';
function SmartCounter(){
  //Retorna um valor
  //1 variável stateful
  //2 função amarrada a essa variável que atualiza esse valor
  const [quantity, upQuantity] = useState(1);
  return(
    <>
        <h1>{quantity}</h1>
        <button onClick={()=> upQuantity(quantity+1)} >Aumentar</button>
    </>
  )
}
export default SmartCounter;