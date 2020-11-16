 // React.useState()
 //Хорошей практикой считается заранее определять состояние прямо когда стартует компонент
 //Хук useState работает асинхронно
 //Если я хочу точно основыватся на том состояние которое было до этого, что бы небыло багов, 
 //Лучшей практикой считается изменение состояние через колбэк setCounter(prev => prev + 1). Смотри строку ''
 //Например если нужно задавать начальное состояние которое вычисляется, и избежать постоянного ререндеринга
 //хорошей практикой считается, для таких случаев передавать функцию в useState. 
/* 
вот так:

const [counter, setCounter] = useState(() => {
   return computeInitialCounter()
 })

*/

//Для взаимодействия с объектами в в state посмотри на функцию updateTitle


import React, {useState} from 'react'

function computeInitialCounter() {
  console.log('Some calculations...')
  return Math.trunc(Math.random() * 20)
}


function App() {
//  const [counter, setCounter] = useState(0)
//  const [counter, setCounter] = useState(computeInitialCounter)
 const [counter, setCounter] = useState(() => {
   return computeInitialCounter()
 })

 const [state, setState] = useState({
   title: 'Counter',
   date: Date.now()
 })


 function increment() {
  //  setCounter(counter + 1)
  //  setCounter(counter + 1)

  //  setCounter((prevCounter) => {
  //   return prevCounter + 1
  //  })

    setCounter(prev => prev + 1);
}
 function decrement() {
   setCounter(counter - 1)
 }

 function updateTitle() {
  setState(prevState => {
    return {
      ...prevState,
      title: 'new title'
    }
  })
 }

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={increment} className="btn btn-success">Add</button>
      <button onClick={decrement} className="btn btn-danger">Remove</button>
      <button onClick={updateTitle} className="btn btn-default">Change title</button>
      <pre>{JSON.stringify(state, null, 2)}</pre>
    </div> 

    
  )
}

