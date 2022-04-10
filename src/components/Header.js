const Header = (parent, props) => {
    console.log('Hello from header')
    const header = document.createElement('h1') //Creando título en el archivo header.
    header.append(props.title) //Append del título.
    parent.append(header) //Se append del header al parent.
}

export default Header