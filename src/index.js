/* 
Instalaciones realizadas: 

1. Webpack: npm install webpack webpack-cli. Para reinstalar node_modules se corre npm install.
2. React: npm install react react-dom.


Otras observaciones: 
1. En el .gitignore se puso el node_modules, que nunca se tiene que subir.
2. Se escribió el npm run build para que se pueda correr en el navegador.
3. Para generar el archivo main.js en la carpeta dist, se puso en el package.json y en su apartado de scripts la instrucción "build": "webpack --mode development"
y se ejecutó el comando npm run build. En el .gitignore se puso que no se tiene que subir el main.js. El "build": "webpack --mode development" es para programar.
4. Para recuperar el main.js se tiene que correr el npm run build.
5. El "build": "webpack --mode production" es lo que se va para los clientes. El "build": "webpack --mode production" es para producción final de la página.
*/

import Header from './components/Header.js' //Importando el módulo de Header.
import {sum, sub} from './utils.js'

console.log('Hello from index.js')

console.log('sum 2 + 2', sum(2,2))

console.log('sum 2 - 2', sub(2,2))

const root = document.getElementById('root') //Jalando el root del index.html

Header(root, {title: 'Hello world'}) //Llamando al método Header que está en la referencia Header del archivo Header.js */