import React from 'react';
import { useAlert } from './alert/AlertContext';




export default function Main () {
  const {show} =  useAlert();
  return (
    <>
    <h1>Hello in expample with context</h1>
    <button onClick={() => show('This text from Main.js')} className="btn btn-success">Show alert</button>
    </>
  )
}