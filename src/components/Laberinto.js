/*
 Nombre: Javier Valle
 Carnet: 20159 
*/

import React, { useState, useEffect, useRef } from 'react'
import styles from './Laberinto.css'
import Paredes from './Paredes.js'
import Otro from './Otro.js'
import Meta from './Meta.js'
import Jugador from './Jugador.js'


function Laberinto () {
    
    //API: https://maze.juanelcaballo.club/?type=json&w=4&h=4.

    //useState sirve para modificar el estado de un componente.
    const [maze, setMaze] = useState([]) //Se le pasa un array vacío porque va a ser el estado del maze; la variable laberinto va a ser el estado inicial del maze.
                                        //setLaberinto permite actualizar el estado del laberinto.

    /*Estados para las posiciones 'x' y 'y'*/
    //Se inicializa en 1, dado que el jugador está en (1,1)
    const [posx, setPosx] = useState(75)
    const [posy, setPosy] = useState(75)

    console.log(posx)
    
    //useEffect sirve para poder ver efectos secundarios en componentes.
    useEffect(() => {

        //Función que manda a pedir el laberinto al API. 
        //El async determina que la función va a tener un pedido asincrónico y cuando se hace el pedido, no se sabe cuánto va a tardar. En ese momento se pone un await
        //para decirle que espere hasta que se haga la consulta.
        const obtenerLaberinto = () => {

            //Trayendo el laberinto desde el API.
             const url = 'https://maze.juanelcaballo.club/?type=json&w=4&h=4' //Url del API. 
            //Pedido con fetch.
             fetch(url)
                .then(res => res.json()) 
                .then(datos => setMaze(datos))//Se llama a setMaze y se le pasa como parámetro el result.data que es la matriz de que se pidió desde el API.
             //console.log(result.data) //Imprimiendo la data del API.
             //console.log(resultado) //Imprimiendo las cosas que trajo del API.
             //La función para actualizar elementos es setMaze.
            //console.log(maze)
        }

        obtenerLaberinto() //Poniendo a funcionar la promesa.
    }, []) //Si no se pone un array vacío, entonces la función se ejecuta en un loop infinito.

   // console.log(maze) //Corroborando la matriz que se trajo del API.

   //console.log("Laberinto antes del event listener: ",maze) //Comprobando el array del laberinto.

   //Función del movimiento.

    const mov = React.useCallback((e) =>{

        if(e.key === "ArrowLeft"){
            //setPosx((oldPosx) => oldPosx - 1)
            
            //Posición inicial del personaje.

            //Menos uno de la posición en x del personaje. 
            //Posición del personaje en x.
            const lpixelx = posx - 1

            console.log(lpixelx)
            //Posición del personaje en y.
            const lpixely = posy 

            //Obteniendo la posición del personaje en el maze.
            const indexX = Math.ceil((lpixelx/75)) //Posición en x.
            const indexY = Math.ceil((lpixely/75)) //Posición en y.

            ///console.log("Este es el maze cuando se presiona el botón de la izquierda: ", maze)

            //console.log(maze, indexX, indexY) //Posición del personaje en el maze.
            //console.log(lpixelx)               //Posición inicial del personaje en x. 

            //console.log(lpixely)               //Posición del personaje ne y.
              
            //console.log("Datos del lab", maze)

            /*Detectando la flecha izquierda para poder mover al personaje*/
            console.log("Izquierda")
        
            //setPosx(posx - 1) //Haciendo set del movimiento hacia la izquierda

            //setPosx(indexX)

            //setPosx((oldPosx) => oldPosx - 1) //Haciendo set del movimiento hacia la derecha.
            
            //Viendo si hay un espacio vacío.
            if(maze[indexY][indexX] === ' '){
              setPosx((oldPosx) => oldPosx - 10) //Moviendo al personaje hacia la izquierda.
            }else if(maze[indexY][indexX] === 'g'){
                alert("Ganaste!")
            }

        }else if(e.key === "ArrowRight"){

            //Menos uno de la posición en x del personaje. 
            //Posición del personaje en x.
            const lpixelx = posx + 1

            console.log({lpixelx})
            //Posición del personaje en y.
            const lpixely = posy 

            //Obteniendo la posición del personaje en el maze.
            const indexX = Math.ceil((lpixelx/75)) //Posición en x.
            const indexY = Math.ceil((lpixely/75)) //Posición en y.

            
            /*Detectando la flecha derecha para poder mover al personaje*/
            console.log("Derecha", indexX, indexY)

            //setPosx(posx + 1) //Haciendo set del movimiento hacia la derecha.

            //setPosx((oldPosx) => oldPosx + 1) //Haciendo set del movimiento hacia la derecha.

            console.log('ww',maze[indexX][indexY],maze)

            //Viendo si hay un espacio vacío.
            if(maze[indexX][indexY] === ' '){
                setPosx((oldPosx) => oldPosx + 10) //Moviendo al personaje hacia la izquierda.
            }else if(maze[indexX][indexY] === 'g'){
                alert("Ganaste!")
            }

        }else if(e.key === "ArrowDown"){
           
            //setPosx((oldPosx) => oldPosx - 1)
            
            //Posición inicial del personaje.

            //Menos uno de la posición en x del personaje. 
            //Posición del personaje en x.
            const lpixelx = posx

            console.log(lpixelx)
            //Posición del personaje en y.
            const lpixely = posy + 1

            //Obteniendo la posición del personaje en el maze.
            const indexX = Math.ceil((lpixelx/75)) //Posición en x.
            const indexY = Math.ceil((lpixely/75)) //Posición en y.

            ///console.log("Este es el maze cuando se presiona el botón de la izquierda: ", maze)

            //console.log(maze, indexX, indexY) //Posición del personaje en el maze.
            //console.log(lpixelx)               //Posición inicial del personaje en x. 

            //console.log(lpixely)               //Posición del personaje ne y.
              
            //console.log("Datos del lab", maze)

            /*Detectando la flecha izquierda para poder mover al personaje*/
            console.log("Abajo")
        
            //setPosx(posx - 1) //Haciendo set del movimiento hacia la izquierda

            //setPosx(indexX)

            //setPosx((oldPosx) => oldPosx - 1) //Haciendo set del movimiento hacia la derecha.
            
            //Viendo si hay un espacio vacío.
            if(maze[indexX][indexY] === ' '){
              setPosy((oldPosy) => oldPosy + 10) //Moviendo al personaje hacia la izquierda.
            }else if(maze[indexX][indexY] === 'g'){
                alert("Ganaste!")
            }

        }else if(e.key === "ArrowUp"){
            
            //setPosx((oldPosx) => oldPosx - 1)
            
            //Posición inicial del personaje.

            //Menos uno de la posición en x del personaje. 
            //Posición del personaje en x.
            const lpixelx = posx

            console.log(lpixelx)
            //Posición del personaje en y.
            const lpixely = posy - 1

            //Obteniendo la posición del personaje en el maze.
            const indexX = Math.ceil((lpixelx/75)) //Posición en x.
            const indexY = Math.ceil((lpixely/75)) //Posición en y.

            ///console.log("Este es el maze cuando se presiona el botón de la izquierda: ", maze)

            //console.log(maze, indexX, indexY) //Posición del personaje en el maze.
            //console.log(lpixelx)               //Posición inicial del personaje en x. 

            //console.log(lpixely)               //Posición del personaje ne y.
              
            //console.log("Datos del lab", maze)

            /*Detectando la flecha izquierda para poder mover al personaje*/
            console.log("Arriba")
        
            //setPosx(posx - 1) //Haciendo set del movimiento hacia la izquierda

            //setPosx(indexX)

            //setPosx((oldPosx) => oldPosx - 1) //Haciendo set del movimiento hacia la derecha.
            
            //Viendo si hay un espacio vacío.
            if(maze[indexX][indexY] === ' '){
              setPosy((oldPosy) => oldPosy - 10) //Moviendo al personaje hacia la izquierda.
            }else if(maze[indexX][indexY] === 'g'){
                alert("Ganaste")
            } 
        }
    }, [maze, posx, posy])

    /*Esta función se encarga de poder hacer los movimeintos del personaje*/
     useEffect(() => {
        //Event Listener de la ventana.
        /*Identificando las teclas que se presionan*/
         window.addEventListener("keydown", mov)

         return () => window.removeEventListener("keydown", mov)
    }, [mov])
    //movimientos() //Llamando al método para detectar los movimientos.

    //window.addEventListener("keydown", mov)

    //console.log("Laberinto luego del event listener: ",maze)


    return(
        <div className="Maze"> {/*Padre de todos los div's*/}
            {/*Devolviendo un map que va a imprimir cada elemento del laberinto*/}
            <h2>Ahora trata de llegar a la meta</h2> {/*Imprimiendo en pantalla un título h2 para indicar que se está imprimiendo el laberinto*/}

            <div className='Mapa'> {/*Se mapea la matriz de laberinto y luego se mapea cada matriz que hay dentro de la matriz grande.*/}
                { /*Jalando todos los objetos de la matriz devuelta por el fetch*/
                    maze.map((elementos) => 
                        /*Entrando a la matriz que se trae desde el API*/
                     <div className='Todo' key={Math.random()}>{
                        elementos.map((elemento) => {
                            /*Leyendo cada elemento de la matriz que se trae desde el API*/
                            if(elemento === "-" || elemento === "|" || elemento === "+"){
                                /*Si la matriz tiene estos elementos, entonces significa que hay paredes y suelos*/
                                /*Llamando al elemento Paredes para dibujarlas en la pantalla*/
                                return <Paredes
                                        key = {Math.random()}
                                        /> 
                            }if(elemento === " "){
                                /*Llamando al elemento otro para dibujar un espacio vacío en el canvas*/
                                return <Otro 
                                        key={Math.random()}
                                        />
                            }if(elemento === "p"){
                                return <>

                                 <Jugador
                                        key={Math.random()}
                                        x={parseInt(posx, 10)} /*Se parsea a entero para que no se pase como string*/
                                        y={parseInt(posy, 10)} /*Se parsea a entero para que no se pase como string*/
                                    />

                                    <Paredes
                                        key = {Math.random()}
                                    />
                                </>
                            }
                            if(elemento === "g"){
                                /*Llamando al elemento meta para dibujarla en el canvas*/
                                return <Meta
                                    key={Math.random()}
                                />                                
                            }
                        })}
                        </div>
                    )}     
            </div>
            {
                /*Buscando al jugador*/
            }
            
                
        </div>
    )

    //console.log(maze) //Imprimiendo el array del laberinto.
}

export default Laberinto