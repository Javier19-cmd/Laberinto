/*
 Nombre: Javier Valle
 Carnet: 20159 
*/

import React, { useState, useEffect } from 'react'
import pared from './pared.svg'

//Función que procesa los elementos y los manda a la pantalla. Este lee a todas las paredes.
function Paredes(){
    return(
        <div className='Pared'>
            <img className='Paredes' src={pared}/>
        </div> /*Haciendo div para los elemenetos paredes*/
    )
}

export default Paredes