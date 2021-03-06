//  Nombre: Javier Valle
//  Carnet: 20159
import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import styles from './Laberinto.css'
import Paredes from './Pared'
import Otro from './Otro'
import Meta from './Meta'
import Jugador from './Jugador'
import Puerta from './Puerta'

function Laberinto({ ancho, alto }) {
  //  API: https://maze.juanelcaballo.club/?type=json&w=4&h=4.
  //  useState sirve para modificar el estado de un componente.
  const [maze, setMaze] = useState([]) // Array vacío para el laberinto.
  //  setLaberinto permite actualizar el estado del laberinto.
  /*  Estados para las posiciones 'x' y 'y' */
  //  Se inicializa en 1, dado que el jugador está en (1,1)
  const [posx, setPosx] = useState(0.5)
  const [posy, setPosy] = useState(75)
  console.log(posx)
  //  useEffect sirve para poder ver efectos secundarios en componentes.
  useEffect(() => {
    //  Función que manda a pedir el laberinto al API.
    const obtenerLaberinto = () => {
      /*  Link del API: https://maze.juanelcaballo.club/?type=json&w=4&h=4  */
      //  Trayendo el laberinto desde el API.
      const url = `https://maze.juanelcaballo.club/?type=json&w=${ancho}&h=${alto}` //  Url del API.
      //  Pedido con fetch.
      fetch(url)
        .then((res) => res.json())
        .then((datos) => setMaze(datos))//  Almacenando el array del laberinto.
        // console.log(result.data) //Imprimiendo la data del API.
        // console.log(resultado) //Imprimiendo las cosas que trajo del API.
        // La función para actualizar elementos es setMaze.
      //  console.log(maze)
    }
    obtenerLaberinto() // Poniendo a funcionar la promesa.
  }, []) // Si no se pone un array vacío, entonces la función se ejecuta en un loop infinito.
  // console.log(maze) //Corroborando la matriz que se trajo del API.
  // console.log("Laberinto antes del event listener: ",maze) //Comprobando el array del laberinto.
  // Función del movimiento.
  const mov = React.useCallback((e) => {
    if (e.key === 'ArrowLeft') {
      //  setPosx((oldPosx) => oldPosx - 1)
      //  Posición inicial del personaje.
      //  Menos uno de la posición en x del personaje.
      //  Posición del personaje en x.
      const lpixelx = posx - 1
      console.log(lpixelx)
      //  Posición del personaje en y.
      const lpixely = posy
      //  Obteniendo la posición del personaje en el maze.
      const indexX = Math.ceil((lpixelx / 75)) // Posición en x.
      const indexY = Math.ceil((lpixely / 75)) // Posición en y.
      //  console.log("Este es el maze cuando se presiona el botón de la izquierda: ", maze)
      //  console.log(maze, indexX, indexY) //  Posición del personaje en el maze.
      //  console.log(lpixelx) // Posición inicial del personaje en x.
      //  console.log(lpixely) // Posición del personaje ne y.
      //  console.log("Datos del lab", maze)
      /*  Detectando la flecha izquierda para poder mover al personaje  */
      console.log('Izquierda')
      //  setPosx(posx - 1) //Haciendo set del movimiento hacia la izquierda
      //  setPosx(indexX)
      //  setPosx((oldPosx) => oldPosx - 1) //  Haciendo set del movimiento hacia la derecha.
      //  Viendo si hay un espacio vacío.
      if (maze[indexY][indexX] === ' ') {
        setPosx((oldPosx) => oldPosx - 10) // Moviendo al personaje hacia la izquierda.
      } else if (maze[indexY][indexX] === 'g') {
        alert('Ganaste!')
      }
    } else if (e.key === 'ArrowRight') {
      //  Menos uno de la posición en x del personaje.
      //  Posición del personaje en x.
      const lpixelx = posx + 1
      //  console.log({lpixelx})
      //  Posición del personaje en y.
      const lpixely = posy
      //  Obteniendo la posición del personaje en el maze.
      const indexX = Math.ceil((lpixelx / 75)) // Posición en x.
      const indexY = Math.ceil((lpixely / 75)) // Posición en y.
      console.log('Derecha')
      /*  Detectando la flecha derecha para poder mover al personaje  */
      //  console.log("Derecha", indexX, indexY)
      //  setPosx(posx + 1) //Haciendo set del movimiento hacia la derecha.
      //  setPosx((oldPosx) => oldPosx + 1) //  Haciendo set del movimiento hacia la derecha.
      //  console.log('ww',maze[indexX][indexY],maze)
      //  Viendo si hay un espacio vacío.
      if (maze[indexX][indexY] === ' ') {
        setPosx((oldPosx) => oldPosx + 10) // Moviendo al personaje hacia la izquierda.
      } else if (maze[indexX][indexY] === 'g') {
        alert('Ganaste!')
      }
    } else if (e.key === 'ArrowDown') {
      //  setPosx((oldPosx) => oldPosx - 1)
      //  Posición inicial del personaje.
      //  Menos uno de la posición en x del personaje.
      //  Posición del personaje en x.
      const lpixelx = posx
      console.log(lpixelx)
      const lpixely = posy + 1
      //  Obteniendo la posición del personaje en el maze.
      const indexX = Math.ceil((lpixelx / 75)) // Posición en x.
      const indexY = Math.ceil((lpixely / 75)) // Posición en y.
      //  console.log("Este es el maze cuando se presiona el botón de la izquierda: ", maze)
      //  console.log(maze, indexX, indexY) //  Posición del personaje en el maze.
      //  console.log(lpixelx) // Posición inicial del personaje en x.
      //  console.log(lpixely) // Posición del personaje ne y.
      //  console.log("Datos del lab", maze)
      /* Detectando la flecha izquierda para poder mover al personaje */
      console.log('Abajo')
      //  setPosx(posx - 1) //Haciendo set del movimiento hacia la izquierda
      //  setPosx(indexX)
      //  setPosx((oldPosx) => oldPosx - 1) //Haciendo set del movimiento hacia la derecha.
      //  Viendo si hay un espacio vacío.
      if (maze[indexX][indexY] === ' ') {
        setPosy((oldPosy) => oldPosy + 10) // Moviendo al personaje hacia la izquierda.
      } else if (maze[indexX][indexY] === 'g') {
        alert('Ganaste!')
      }
    } else if (e.key === 'ArrowUp') {
      //  setPosx((oldPosx) => oldPosx - 1)
      //  Posición inicial del personaje.
      //  Menos uno de la posición en x del personaje.
      //  Posición del personaje en x.
      const lpixelx = posx

      console.log(lpixelx)
      //  Posición del personaje en y.
      const lpixely = posy - 1

      //  Obteniendo la posición del personaje en el maze.
      const indexX = Math.ceil((lpixelx / 75)) // Posición en x.
      const indexY = Math.ceil((lpixely / 75)) // Posición en y.

      //  console.log("Este es el maze cuando se presiona el botón de la izquierda: ", maze)
      //  console.log(maze, indexX, indexY) //Posición del personaje en el maze.
      //  console.log(lpixelx) //Posición inicial del personaje en x.
      //  console.log(lpixely) //Posición del personaje ne y.
      //  console.log("Datos del lab", maze)

      /*  Detectando la flecha izquierda para poder mover al personaje  */
      console.log('Arriba')

      //  setPosx(posx - 1) //Haciendo set del movimiento hacia la izquierda
      //  setPosx(indexX)
      //  setPosx((oldPosx) => oldPosx - 1) //Haciendo set del movimiento hacia la derecha.
      //  Viendo si hay un espacio vacío.
      if (maze[indexX][indexY] === ' ') {
        setPosy((oldPosy) => oldPosy - 10) //   Moviendo al personaje hacia la izquierda.
      } else if (maze[indexX][indexY] === 'g') {
        alert('Ganaste')
      }
    }
  }, [maze, posx, posy])

  /* Esta función se encarga de poder hacer los movimeintos del personaje */
  useEffect(() => {
    // Event Listener de la ventana.
    /* Identificando las teclas que se presionan */
    window.addEventListener('keydown', mov)

    return () => window.removeEventListener('keydown', mov)
  }, [mov])
  //    movimientos() //Llamando al método para detectar los movimientos.

  //    window.addEventListener("keydown", mov)

  //    console.log("Laberinto luego del event listener: ",maze)
  return (
    <div className="Maze" style={styles}>
      {/* Padre de todos los div's */ }
      {/* Título */}
      <h2>Ahora trata de llegar a la meta</h2>
      <h3>Primero debes mover hacia abajo el personaje y luego desplazarte como quieras</h3>
      {/* Devolviendo un map que va a imprimir cada elemento del laberinto */}
      <div className="Mapa">
        {/* Se hace un doble map a la matriz de maze. */}
        { /* Jalando todos los objetos de la matriz devuelta por el fetch */
          maze.map((elementos) => (
            <div className="Todo" key={Math.random()}>
              {
              elementos.map((elemento) => {
                /* Leyendo cada elemento de la matriz que se trae desde el API */
                if (elemento === '-' || elemento === '|' || elemento === '+') {
                  //    Detectando paredes y suelos
                  return (
                    <Paredes
                      key={Math.random()}
                    />
                  )
                } if (elemento === ' ') {
                  /* Llamando al elemento otro para dibujar un espacio vacío en el canvas */
                  return (
                    <Otro
                      key={Math.random()}
                    />
                  )
                } if (elemento === 'p') {
                  return (
                    <div>
                      {/* El jugador debe aparecer encima de la puerta */}
                      <Jugador
                        key={Math.random()}
                        x={parseInt(posx, 10)} /* Parsing a entero para que no sea string */
                        y={parseInt(posy, 10)} /* Parsing a entero para que no sea string */
                      />
                      <Puerta
                        key={Math.random()}
                      />
                    </div>
                  )
                }
                if (elemento === 'g') {
                  /* Llamando al elemento meta para dibujarla en el canvas */
                  return (
                    <Meta
                      key={Math.random()}
                    />
                  )
                }
                return elemento
              })
              }
            </div>
          ))
          }
      </div>
    </div>
  )
}

Laberinto.propTypes = {
  alto: PropTypes.number.isRequired,
  ancho: PropTypes.number.isRequired,
}

export default Laberinto
