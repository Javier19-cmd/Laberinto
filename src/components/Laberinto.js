import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styles from './Laberinto.css'

//Función que procesa los elementos y los manda a la pantalla.
function Elementos({cosa}){
    return(
        <div className='maze'>
            <div className={cosa ? "p": ""}> {/*Div para el player*/}
                <div className='Player'></div>
            </div>

            <div className={cosa ? "g": ""}> {/*Div para la meta*/}
                <div className='Meta'></div>
            </div>

            <div className={cosa ? "|": ""}> {/*Div para las paredes*/}
                <div className='Palo'></div>
            </div>

            <div className={cosa ? "+": ""}> {/*Div para los +*/}
                <div className='Mas'></div>
            </div>

            <div className={cosa ? "-": ""}> {/*Div para los -*/}
                <div className='Menos'></div>
            </div>

        </div>
    )
}

function Laberinto () {
    
    //Api: https://maze.juanelcaballo.club/?type=json&w=4&h=4.

    //useState sirve para modificar el estado de un componente.
    const [laberinto, setLaberinto] = useState([]) //Se le pasa un array vacío porque va a ser el estado del maze; la variable laberinto va a ser el estado inicial del maze.
                                                    //setLaberinto permite actualizar el estado del laberinto.

    //const [partes, setPartes] = useState([]) //Elementos del laberinto.

    //useEffect sirve para poder ver efectos secundarios en componentes.
    useEffect(() => {

        //Función que manda a pedir el laberinto al API. Esta función va a hacer un pedido asincrónico. Va a tener un async y un await. 
        //El async determina que la función va a tener un pedido asincrónico y cuando se hace el pedido, no se sabe cuánto va a tardar. En ese momento se pone un await
        //para decirle que espere hasta que se haga la consulta.
        const obtenerLaberinto = () => {

            //Trayendo el laberinto desde el API.
             const url = 'https://maze.juanelcaballo.club/?type=json&w=1&h=1' //Url del API. 
            //Pedido con fetch.
             fetch(url)
                .then(res => res.json()) 
                .then(datos => setLaberinto(datos))//Se llama a setLaberinto y se le pasa como parámetro el result.data que es la matriz de que se pidió desde el API.
             //console.log(result.data) //Imprimiendo la data del API.
             //console.log(resultado) //Imprimiendo las cosas que trajo del API.
             //La función para actualizar elementos es setLaberinto.
            //console.log(laberinto)
        }

        obtenerLaberinto() //Poniendo a funcionar la promesa.

        // //Método para poder ver cada elemento del laberinto.
        // const cosas = () => {
            
        //     //Haciendo set de los div's con clases a cada elemento encontrado en los arrays.
        //     setLaberinto(prevLaberinto => {
        //         return prevLaberinto.map(objeto => {
        //             //Con una función de devolución ES5
        //             objeto.forEach(function (element) {
                        
        //                 //Elemento player.
        //                 if(element === "p"){
        //                     console.log("Elemento player", element)
        //                     return <div className="Player"></div>
                            
        //                 }
                        
        //                 //Elememento más +.
        //                 if(element === "+"){
        //                     console.log("Elemento '+'", element)
        //                     return <div className="Mas"></div>
        //                 }
    
        //                 //Elememento menos "-".
        //                 if(element === "-"){
        //                     console.log("Elemento '-'", element)
        //                     return <div className="Menos"></div>
        //                 }
    
        //                 //Elememento palo "|".
        //                 if(element === "|"){
        //                     console.log("Elemento '|'", element)
        //                     return <div className="Palo"></div>
        //                 }
    
        //                 //Elememento meta "g".
        //                 if(element === "g"){
        //                     console.log("Elemento 'g'", element)
        //                     return <div className="Meta"></div>
        //                 }
        //             })
        //         })
        //     })
        // }

        // cosas() //Llamando al estado para verificar los elementos.

    }, []) //Si no se pone un array vacío, entonces la función se ejecuta en un loop infinito.

    // //Asignando los id's.
    // useEffect(() => {
    //     asignar() //Llamando método para que asigne el id a cada elemento del maze.
    // }, [])

    
    // //Método para asignar un id a cada elemento del array.
    // const asignar = () => {
        
    //     //Agarrar las cartas, mezclarlas y duplicarlas.
    //     const asignar = [...laberinto] //Ya se duplicaron las cartas.
    //     .sort(() => Math.random())
    //     .map((elemento) => ({...elemento, id: Math.random() })) //Se mapean las cartas, se le pone un id a cada carta y luego se colocan en el grid.
    //     setLaberinto(asignar) //Se actualiza el estado de las cartas.
    // }

    console.log(laberinto) //Corroborando la matriz que se trajo del API.
    
    laberinto.map((elemento) => (
        elemento.map((elemento2) =>    
        console.log(elemento2))
    ))

    return(
        <div> {/*Padre de todos los div's*/}
            {/*Devolviendo un map que va a imprimir cada elemento del laberinto*/}
            <h2>Imprimiendo el laberinto</h2> {/*Imprimiendo en pantalla un título h2 para indicar que se está imprimiendo el laberinto*/}
            <div className='Mapa'> {/*Se mapea la matriz de laberinto y luego se mapea cada matriz que hay dentro de la matriz grande.*/}
                {laberinto.map((elemento) => (
                    /*Se devuelve cada elemento que hay en cada matriz*/
                    elemento.map((elemento2, idx) =>
                        <Elementos
                            key={idx}
                            cosa={elemento2} 
                        />
                    )))}
            </div>
        </div>
    )

    //console.log(laberinto) //Imprimiendo el array del laberinto.
}

export default Laberinto