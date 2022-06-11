//  Nombre: Javier Valle
//  Carnet: 20159

import React from 'react'
import * as ReactDOMClient from 'react-dom/client' //  Importando el ReactDOMClient.
import Tamanos from './components/Tamanos'

function App() {
  return (
    <div>
      <h1>Laberinto</h1>
      <Tamanos />
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
