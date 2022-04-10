/* 
Instalaciones realizadas: 

1. Webpack: npm install webpack webpack-cli. Para reinstalar node_modules se corre npm install.
2. 


Otras observaciones: 
1. En el .gitignore se puso el node_modules, que nunca se tiene que subir.
2. Para generar el archivo main.js en la carpeta dist, se puso en el package.json y en su apartado de scripts la instrucción "build": "webpack --mode development"
y se ejecutó el comando npm run build. En el .gitignore se puso que no se tiene que subir el main.js.

*/

//import Header from './components/Header' //Importando el módulo de Header.
import {sum, sub} from './utils.js'

console.log('Hello from index.js')

console.log('sum 2 + 2', sum(2,2)) //Suma de dos elementos.

console.log('sub 2 - 2', sub(2,2)) //Resta de dos elementos.

//const root = document.getElementById('root') //Accediento al root del html.

//Header(root, 'Hello world') //Mandando al root el hello world.