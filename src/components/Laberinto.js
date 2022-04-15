import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styles from './Laberinto.css'

// //Función que procesa los elementos y los manda a la pantalla.
// function Cosas({cosa}){

//     /*
//     //Agregando movimientos del personaje. Aún falta arreglarle cosas.

//     const elemento = document.getElementById('root')
//     const cantidad = 0

//     window.addEventListener('keydown', (e) => {
//         const tecla = e.key
        
//         switch (tecla){
//             case 'ArrowRight': 
//                 elemento.style.transform="translateX(100px)"
//                 break
//             case 'ArrowLeft':
//                 elemento.style.transform="translateX(-100px)"
//                 break
//             case 'ArrowUp':
//                 elemento.style.transform="translateY(-100px)"
//                 break
//             case 'ArrowDown':
//                 elemento.style.transform="translateY(100px)"
//                 break
//             default:
//                 break
//         }
    
    
//     })*/

//     return(
//         <div className='maze'>
//             <div className={cosa ? "p": ""}> {/*Div para el player*/}
//                 <div className='Player'></div>
//             </div>
            
//             <div className={cosa ? "g": ""}> {/*Div para la meta*/}
//                 <div className='Meta'></div>
//             </div>

//             <div className={cosa ? "+": ""}> {/*Div para el techo*/}
//                 <div className='Mas'></div>
//             </div>

//             <div className={cosa ? "-": ""}> {/*Div para el suelo*/}
//                 <div className='Menos'></div>
//             </div>

//             <div className={cosa ? "|": ""}> {/*Div para la pared*/}
//                 <div className='Palo'></div>
//             </div>
//         </div>
//     )
// }

//Función que procesa los elementos y los manda a la pantalla.
function Paredes(){
    return(
        <div className='Pared'></div>
    )
}


// //Función que procesa los elementos y los manda a la pantalla.
// function Palo({cosa}){
//     return(
//         <div className='maze'>
//             <div className={cosa ? "|": ""}> {/*Div para el player*/}
//                 <div className='Palo'></div>
//             </div>
//         </div>
//     )
// }


// //Función que procesa los elementos y los manda a la pantalla.
// function Mas({cosa}){
//     return(
//         <div className='maze'>
//             <div className={cosa ? "+": ""}> {/*Div para el player*/}
//                 <div className='Mas'></div>
//             </div>
//         </div>
//     )
// }

// //Función que procesa los elementos y los manda a la pantalla.
// function Menos({cosa}){
//     return(
//         <div className='maze'>
//             <div className={cosa ? "-": ""}> {/*Div para el player*/}
//                 <div className='Menos'></div>
//             </div>
//         </div>
//     )
// }


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

    return(
        <div> {/*Padre de todos los div's*/}
            {/*Devolviendo un map que va a imprimir cada elemento del laberinto*/}
            <h2>Imprimiendo el laberinto</h2> {/*Imprimiendo en pantalla un título h2 para indicar que se está imprimiendo el laberinto*/}
            <div className='Mapa'> {/*Se mapea la matriz de laberinto y luego se mapea cada matriz que hay dentro de la matriz grande.*/}
                { /*Jalando todos los objetos de la matriz devuelta por el fetch*/
                    laberinto.map((elementos) => 
                        /*Entrando a la matriz que se trae desde el API*/
                        elementos.map((elemento, idx) => {
                            /*Leyendo cada elemento de la matriz que se trae desde el API*/
                            if(elemento === "-" || elemento === "|" || elemento === "+"){
                                /*Si la matriz tiene estos elementos, entonces significa que hay paredes y suelos*/
                                return <Paredes
                                    key = {idx}
                                />
                            }
                        })

                    )
                }

            </div>
        </div>
    )

    //console.log(laberinto) //Imprimiendo el array del laberinto.
}

export default Laberinto