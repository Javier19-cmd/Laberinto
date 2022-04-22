import Personaje from './Personaje.jpg'
import React, { useState, useEffect, useRef } from 'react'

//Función que procesa los elementos y los manda a la pantalla. Este lee al elemento del jugador.
export default function Jugador({x, y}){

    const style = {
        position: 'relative',
        left: `${x*10}px`, 
        top: `${y*10}px`,
        width: `75px`, /*Ancho*/
        height: `75px`, /*Altura*/
        background: `blue` /*Color*/
        //margin: `2px` /*Margen del cinco pixeles*/
    }

    return(
        <img className='Heroe' src={Personaje} style={style}/>
    )
} 