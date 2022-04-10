import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styles from './Laberinto.css'

function Laberinto () {
    
    //Api: https://maze.juanelcaballo.club/?type=json&w=4&h=4.

    //useState sirve para modificar el estado de un componente.
    const [laberinto, setLaberinto] = useState([]) //Se le pasa un array vacío porque va a ser el estado del maze; la variable laberinto va a ser el estado inicial del maze.
                                                    //setLaberinto permite actualizar el estado del laberinto.
    
    console.log(laberinto)

    //useEffect sirve para poder ver efectos secundarios en componentes.
    useEffect(() => {

        //Función que manda a pedir el laberinto al API. Esta función va a hacer un pedido asincrónico. Va a tener un async y un await. 
        //El async determina que la función va a tener un pedido asincrónico y cuando se hace el pedido, no se sabe cuánto va a tardar. En ese momento se pone un await
        //para decirle que espere hasta que se haga la consulta.
        const obtenerLaberinto = async() => {
             const url = 'https://maze.juanelcaballo.club/?type=json&w=5&h=5' //Url del API. 
             const result = await axios.get(url) //Pedido con axios y get. Se pone await para que espere la respuesta.
             //console.log(result.data) //Imprimiendo la data del API.
            //Se desea guardar en actores.
            //La función para actualizar actores es setLaberinto.
            setLaberinto(result.data) //Se llama a setLaberinto y se le pasa como parámetro el result.data que es la matriz de que se pidió desde el API.
        }

        obtenerLaberinto() //Poniendo a funcionar la promesa.


    }, []) //Si no se pone un array vacío, entonces la función se ejecuta en un loop infinito.

    return(
        <div> {/*Padre de todos los div's*/}
            {/*Devolviendo un map que va a imprimir cada elemento del laberinto*/}
            <h2>Imprimiendo el laberinto</h2> {/*Imprimiendo en pantalla un título h2 para indicar que se está imprimiendo el laberinto*/}
            {laberinto.map((hola, index) => { /*Mapeando el laberinto: Si en caso no hay nada, entonces se dice que se está cargando. Si no, se pasa al map.*/
                
                //Devolviendo un div con un hijo h3 que tiene la matriz de lo que se pidió en el API.
                return(
                    <div key={index} className='Hola'>
                        <h3>{index}</h3>
                        <h3>{hola}</h3>
                    </div>
                    )
            
            })}
        </div>
    )

    //console.log(laberinto) //Imprimiendo el array del laberinto.
}

export default Laberinto