import React, { useState, useEffect, useRef } from 'react'
import Metas from './Metas.jpg'

//Función que procesa los elementos y los manda a la pantalla.
function Meta(){
    return(
        <div className='Meta'>
            <img className='Metas' src={Metas}/>
        </div> /*Haciendo div para el espacio vacío*/
    )
}

export default Meta