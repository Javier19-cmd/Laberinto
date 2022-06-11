import React from 'react'
import Laberinto from './Laberinto'

function Tamanos() {
    // Pedir el ancho y el alto del laberinto.
    const ancho = prompt('Ingrese el ancho del laberinto: ')
    const alto = prompt('Ingrese el alto del laberinto: ')

    //  Creando el laberinto.
    return (
      <Laberinto ancho={ancho} alto={alto} />
    )
        
}

export default Tamanos
