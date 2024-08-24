import { useState } from 'react'


import './App.css'
import { Provider } from 'react-redux';
import store from './store';
import Dashboard from './Dashboard.jsx';


function App() {
  return (
    < >
    <Provider store={store} >
      <Dashboard />
    </Provider>
</>
  )
}

export default App
