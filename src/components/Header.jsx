import React from 'react'

// Se quitó props y title.
// Se puso el title.
function Header({ title }) {
  // Se retorna un h1 con el título.
  return (
    <h1>{ title }</h1>
  )
}

export default Header
