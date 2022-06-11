//  Nombre: Javier Valle
//  Carnet: 20159
import React from 'react'
import PropTypes from 'prop-types'
import Personaje from './Personaje.jpg'

// Función que procesa los elementos y los manda a la pantalla. Este lee al elemento del jugador.
function Jugador({ x, y }) {
  const style = {
    position: 'absolute',
    left: `${x}px`,
    top: `${y}px`,
    width: '75px', /* Ancho */
    height: '75px', /* Altura */
    background: 'blue', /* Color */ // Este se va a dejar por si no llegara cargar la imagen del personaje.
  }

  return (
    <img className="Heroe" src={Personaje} style={style} alt="Héroe" />
  )
}

Jugador.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
}

export default Jugador
