// Nombre: Javier Valle
// Carnet: 20159

import React from 'react'
import Puertas from './puerta.jpg'

// Función que procesa los elementos y los manda a la pantalla. Este lee el espacio vacío.
function Puerta() {
  return (
    <div className="Puerta">
      <img className="Puertas" src={Puertas} alt="Puerta" />
    </div> /* Haciendo div para el espacio vacío */
  )
}

export default Puerta
