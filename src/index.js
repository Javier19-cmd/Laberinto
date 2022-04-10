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

Referencias: 
1. https://www.youtube.com/watch?v=R5LTmCSOVCg&ab_channel=FacundoTissera

*/

//import Header from './components/Header.jsx' //Importando el módulo de Header.
//import {sum, sub} from './utils.js'
import React, { useState, useEffect } from 'react'
//import ReactDOM from 'react-dom'
import * as ReactDOMClient from 'react-dom/client' //Importando el ReactDOMClient.
import styles from './style.css' 
import Laberinto from './components/Laberinto.js'


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