/*
делает тоже самое что и useMemo отличиие в том что useCallback работает с функцией, а не с значением, и возвращает функцию, а не значение. 

*/

import React, {useState, useMemo, useEffect, useRef} from 'react'
import ItemsList from "./ItemsList";



function App() {

  const [count, setCount] = useState(1);
  const [colored, setColored] = useState(false);

  const styles =  {color: colored ? 'blue' : 'black'}


  const generateItemsFromApi = useCallback( () => {
    return new Array(count).fill('').map((_, i) => `Elem ${i + 1}`)
  },[count])
  
  return (
    <>
     <h1 style={styles}>amount of elements: {count}</h1>
     <button className={'btn btn-success'} onClick={() => setCount(prev => prev + 1)}>Add</button>
     <button className={'btn btn-warning'} onClick={() => setColored(prev => !prev)}>Change</button>
    
    <ItemsList getItems={generateItemsFromApi}/>
    </>
  )
}

export default App
