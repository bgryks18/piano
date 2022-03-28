import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { PianoProvider } from './context/PianoContext'
ReactDOM.render(
  <PianoProvider>
    <App />
  </PianoProvider>,
  document.getElementById('root'),
)
