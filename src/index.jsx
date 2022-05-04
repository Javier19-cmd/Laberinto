//  Nombre: Javier Valle
//  Carnet: 20159

import React from 'react'
import * as ReactDOMClient from 'react-dom/client' //  Importando el ReactDOMClient.
import Laberinto from './components/Laberinto'

function App() {
  return (
    <div>
      <h1>Laberinto</h1>
      <Laberinto />
    </div>
  )
}

// Creando la raíz del código.
const root = ReactDOMClient.createRoot(
  document.getElementById('root'),
)

//  Enlazado
root.render(
  <App />,
)
