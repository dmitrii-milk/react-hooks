/*
useRef по своей сути тоже создаёт состояние очегь похож на useState но с своими отличиями

Плохая практика: 

import React, {useState, useEffect, useRef} from 'react'

let renderCount = 1

function App() {

  
// const [renderCount, setRenderCount] = useState(1)
const [value, setValue] = useState('initial')

useEffect(() => {
  renderCount++
})

 

  return (
    <>
      <h1>Count rendre: {renderCount}</h1>
      <input type='text' onChange={e => setValue(e.target.value)} value={value}/>
    </>
  )
}

export default App

Ососбеностью хука useRef заключается в том что мы не получаем значение а получаем объект
у которго присутсвтует свойство current
Те состояние которые мы определяем через хук useRef, не продвержены беспокечному циклу как в варианте выше. 

Так же они сохраняются между рендерами компонента, но при этом когда мы меняет сам ref, мы не вызываем рендер компонента
т.е если мы хотим сохранить что-то между рендерами нужно испольхзовать useRef

Так же у useRef есть доп возможности, например получение ссылок на какие-то DOM элементы

Рефы часто исопльзуются что бы задавтаь фокусы на элементы. 

Рефы так же используют для получение предыдущего стейта
*/


import React, {useState, useEffect, useRef} from 'react'


function App() {


  
// const [renderCount, setRenderCount] = useState(1)
const [value, setValue] = useState('initial')
const renderCount = useRef(1)
const inputRef = useRef(null)
const prevValue = useRef('')


useEffect(() => {
  renderCount.current++
})

const focus = () => inputRef.current.focus()

useEffect(() => {
  prevValue.current(value)
}, [value])


 

  return (
    <>
      <h1>Count rendre: {renderCount.current}</h1>
      <h2>Prev state: {prevValue.current}</h2>
      <input ref={inputRef} type='text' onChange={e => setValue(e.target.value)} value={value}/>
      <button className="btn btn-success" onClick={focus}>Focus</button>
    </>
  )
}

