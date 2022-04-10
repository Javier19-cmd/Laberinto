/* 
Instalaciones realizadas: 

1. Webpack: npm install webpack webpack-cli. Para reinstalar node_modules se corre npm install.
2. React: npm install react react-dom.
3. Babel: npm install babel-loader @babel/core @babel/preset-react 
4. Webpack para correr el código: npm install webpack-dev-server
CSS: 
5. npm install --save-dev style-loader
6. npm install -D mini-css-extract-plugin
7. npm install --save-dev css-loader

Otras observaciones: 
1. En el .gitignore se puso el node_modules, que nunca se tiene que subir.
2. Se escribió el npm run build para que se pueda correr en el navegador.
3. Para generar el archivo main.js en la carpeta dist, se puso en el package.json y en su apartado de scripts la instrucción "build": "webpack --mode development"
y se ejecutó el comando npm run build. En el .gitignore se puso que no se tiene que subir el main.js. El "build": "webpack --mode development" es para programar.
4. Para recuperar el main.js se tiene que correr el npm run build.
5. El "build": "webpack --mode production" es lo que se va para los clientes. El "build": "webpack --mode production" es para producción final de la página.
*/

import Header from './components/Header.jsx' //Importando el módulo de Header.
import {sum, sub} from './utils.js'
import React, { useState, useEffect } from 'react'
//import ReactDOM from 'react-dom'
import * as ReactDOMClient from 'react-dom/client' //Importando el ReactDOMClient.
import css from './style.css' 
import axios from 'axios'

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
             const url = 'https://maze.juanelcaballo.club/?type=json&w=4&h=4' //Url del API. 
             const result = await axios.get(url) //Pedido con axios y get. Se pone await para que espere la respuesta.
             //console.log(result.data) //Imprimiendo la data del API.
            //Se desea guardar en actores.
            //La función para actualizar actores es setLaberinto.
            setLaberinto(result.data) //Se llama a setLaberinto y se le pasa como parámetro el result.data que es la matriz de que se pidió desde el API.
        }

        obtenerLaberinto() //Poniendo a funcionar la promesa.


    }, []) //Si no se pone un array vacío, entonces la función se ejecuta en un loop infinito.

    return(
        <div>
            {laberinto.map(function(objeto, i) { 
                
                console.log(objeto)
                
               return <div key={i}>{objeto}</div>
                
            }
            )}
        </div>
    )

    //console.log(laberinto) //Imprimiendo el array del laberinto.
}

const App = () => {

    return(
        <>
            <h1>Laberinto</h1>
            <Laberinto/>    
        </>
    )
}


//Creando la raíz del código.
const root = ReactDOMClient.createRoot(
    document.getElementById('root')
  );
  
  //Enlazado
  root.render(
    <App/>
  )

/*
ReactDOM.render(
    <App/>,
    document.getElementById('root')
    
)*/

/*console.log('Hello from index.js')

console.log('sum 2 + 2', sum(2,2))

console.log('sum 2 - 2', sub(2,2))*/

// const root = document.getElementById('root') //Jalando el root del index.html

// Header(root, {title: 'Hello world'}) //Llamando al método Header que está en la referencia Header del archivo Header.js */