/*
 Nombre: Javier Valle
 Carnet: 20159 
*/

import Personaje from './Personaje.jpg'
import React, { useState, useEffect } from 'react'

//Función que procesa los elementos y los manda a la pantalla. Este lee al elemento del jugador.
export default function Jugador({x, y}){

    const style = {
        position: 'absolute',
        left: `${x}px`, 
        top: `${y}px`,
        width: `75px`, /*Ancho*/
        height: `75px`, /*Altura*/
        background: `blue`, /*Color*/ //Este se va a dejar por si no llegara cargar la imagen del personaje.
        margin: `2px` /*Margen del cinco pixeles*/
    }

    return(
        <img className='Heroe' src={Personaje} style={style}/>
    )
} 