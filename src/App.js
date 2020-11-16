/*


*/
import React from 'react';
import Alert from './alert/Alert';
import { AlertProvider } from './alert/AlertContext';
import Main from './Main';





function App() {


  return (
    <AlertProvider>
      <Alert/>
      <Main toggle={() => {}}/>
    </AlertProvider>
  )
}

export default App
