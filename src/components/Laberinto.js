import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styles from './Laberinto.css'

function Laberinto () {
    
    //Api: https://maze.juanelcaballo.club/?type=json&w=4&h=4.

    //useState sirve para modificar el estado de un componente.
    const [laberinto, setLaberinto] = useState([]) //Se le pasa un array vacío porque va a ser el estado del maze; la variable laberinto va a ser el estado inicial del maze.
                                                    //setLaberinto permite actualizar el estado del laberinto.
    
    //console.log(laberinto)

    //useEffect sirve para poder ver efectos secundarios en componentes.
    useEffect(() => {

        //Función que manda a pedir el laberinto al API. Esta función va a hacer un pedido asincrónico. Va a tener un async y un await. 
        //El async determina que la función va a tener un pedido asincrónico y cuando se hace el pedido, no se sabe cuánto va a tardar. En ese momento se pone un await
        //para decirle que espere hasta que se haga la consulta.
        const obtenerLaberinto = async() => {
             const url = 'https://maze.juanelcaballo.club/?type=json&w=5&h=5' //Url del API. 
             const result = await fetch(url) //Pedido con axios y get. Se pone await para que espere la respuesta.
             const resultado = await result.json()
             //console.log(result.data) //Imprimiendo la data del API.
             console.log(resultado)
            //Se desea guardar en actores.
            //La función para actualizar actores es setLaberinto.
            setLaberinto(resultado) //Se llama a setLaberinto y se le pasa como parámetro el result.data que es la matriz de que se pidió desde el API.
            cosas()
        }

        obtenerLaberinto() //Poniendo a funcionar la promesa.


    }, []) //Si no se pone un array vacío, entonces la función se ejecuta en un loop infinito.

    //Método para poder ver cada elemento del laberinto.
    const cosas = () => {

        setLaberinto(prevLaberinto => {
            return prevLaberinto.map(objeto => {
                //Con una función de devolución ES5
                objeto.forEach(function (element) {
                    
                    //Elemento player.
                    if(element === "p"){
                        console.log("Elemento player", element)
                        return <div className="Player">{element}</div>
                        
                    }
                    
                    //Elememento más +.
                    if(element === "+"){
                        console.log("Elemento '+'", element)
                        return <div className="Mas">{element}</div>
                    }

                    //Elememento menos "-".
                    if(element === "-"){
                        console.log("Elemento '-'", element)
                        return <div className="Menos">{element}</div>
                    }

                    //Elememento palo "|".
                    if(element === "-"){
                        console.log("Elemento '|'", element)
                        return <div className="Palo">{element}</div>
                    }

                    //Elememento meta "g".
                    if(element === "g"){
                        console.log("Elemento 'g'", element)
                        return <div className="Meta">{element}</div>
                    }
                })
            })
        })
    }

    return(
        <div> {/*Padre de todos los div's*/}
            {/*Devolviendo un map que va a imprimir cada elemento del laberinto*/}
            <h2>Imprimiendo el laberinto</h2> {/*Imprimiendo en pantalla un título h2 para indicar que se está imprimiendo el laberinto*/}
            <Laberinto/>
        </div>
    )

    //console.log(laberinto) //Imprimiendo el array del laberinto.
}

export default Laberinto