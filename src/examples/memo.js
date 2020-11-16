/*
useMemo - позволяет оптимизировать приложение
В таком коде если мы посомтрим то увидим что функция complexCompute вызывается даже тогда когда мы меняем совершенно другое состояние. 
Так получается из за того, что как только случается ренддер мы создаём компонент заново а значит вызываем функцию  complexCompute ещё раз, что негативно сказывается на 
скорости работы приложения.
Как раз таки для решения такой проблематики используют хук useMemo

import React, {useState, useEffect, useRef} from 'react'

function complexCompute(num) {
  let i = 0;
  while(i < 1000000000) i++
  return num * 2
}





function App() {

  const [number, setNumber] = useState(42);
  const [colored, setColored] = useState(false);

  const styles = {
    color: colored ? 'blue' : 'black'
  }

  const computed = complexCompute(number)


  
  return (
    <>
     <h1 style={styles}>Сomputed property: {computed}</h1>
     <button className={'btn btn-success'} onClick={() => setNumber(prev => prev + 1)}>Add</button>
     <button className={'btn btn-danger'} onClick={() => setNumber(prev => prev - 1)}>Remove</button>
     <button className={'btn btn-warning'} onClick={() => setColored(prev => !prev)}>Change</button>
    </>
  )
}

export default App

что бы изолировать выполнеине функции complexCompute каждый раз при рендере пишем вот такую конструкцию
 
const computed = useMemo(() => {
    return complexCompute(number)
  }, [number]) 

  передаём первым параметром колбэк функцию
  вторым параметром в массив передаём те значения от которых зависит выполнение данной функции. В данном случае number


  Теперь задержка будет при роботе с одним стейтом



Есть так же другое применение данного хука, когда мы работаем например с объектами

например когда нам нужно следить за сотоянием объекта

  const styles = useMemo(() => {
    return {
      color: colored ? 'blue' : 'black'
    }
  }, [colored])



*/

import React, {useState, useMemo, useEffect, useRef} from 'react'

function complexCompute(num) {
  let i = 0;
  while(i < 1000000000) i++
  return num * 2
}





function App() {

  const [number, setNumber] = useState(42);
  const [colored, setColored] = useState(false);

  const styles = useMemo(() => {
    return {
      color: colored ? 'blue' : 'black'
    }
  }, [colored])
 

  const computed = useMemo(() => {
    return complexCompute(number)
  }, [number]) 


  useEffect(() => {
    console.log('Styles changed')
  }, [styles])

  
  return (
    <>
     <h1 style={styles}>Сomputed property: {computed}</h1>
     <button className={'btn btn-success'} onClick={() => setNumber(prev => prev + 1)}>Add</button>
     <button className={'btn btn-danger'} onClick={() => setNumber(prev => prev - 1)}>Remove</button>
     <button className={'btn btn-warning'} onClick={() => setColored(prev => !prev)}>Change</button>
    </>
  )
}

