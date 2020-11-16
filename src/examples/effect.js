/*
useEffect следит за различными сайд-эффектами
Если в useEffect  передавать колбэк то он будет вызыватся каждый раз
когда происходит рендер компонента
Так же 2-м параметром мы передаём массив где указываем от чего должен зависить данный эффект.
Например если передать в массив type: 
 useEffect(() => {

  }, [type])

  то useEffect будет срабатывать только в том члучае если если в type что то изменилось
  а в других рендерах делать этого не нужно

Так же с помощью useEffect мы можем эмулировать разные lifeCycle хуки



*/


import React, {useState, useEffect} from 'react'




function App() {
  const [type, setType] = useState('users');
  const [data, setData] = useState([]);
  const [pos, setPos] = useState({
    x: 0, y: 0
  })


  // useEffect(() => {
  //   console.log('render')
  // })

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then(response => response.json())
      .then(json => setData(json))

      return () => {
        console.log('clean type')
      }
  }, [type]);

  const mouseMoveHandler = event => {
    setPos({
      x: event.clientX,
      y: event.clientY,
    })
  };

  useEffect(() => {
    console.log('ComponentDidMount')

    window.addEventListener('mousemove', mouseMoveHandler) 

    return () => {
      window.removeEventListener('mousemove', mouseMoveHandler) 
    }



  }, []);




  return (
    <>
    <h1>Resources: {type} </h1>
    <button onClick={() => setType('users')}>Users</button>
    <button onClick={() => setType('todos')}>Todo</button>
    <button onClick={() => setType('posts')}>Posts</button>

    {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
    <pre>{JSON.stringify(pos, null, 2)}</pre>
    </>
  )
}

