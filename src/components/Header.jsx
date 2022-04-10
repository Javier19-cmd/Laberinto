import React from 'react'

//Se quitó props y title.
//Se puso el title.
const Header = ({title}) => {
    //Se retorna un h1 con el título.
    return (
        <h1>{title}</h1>
    )

    /*console.log('Hello from header')
    const header = document.createElement('h1') //Creando título en el archivo header.
    header.append(props.title) //Append del título.
    parent.append(header) //Se append del header al parent.*/
}

export default Header