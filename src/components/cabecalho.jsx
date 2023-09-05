import { createElement } from "react";
import { Link } From="React-router-dom";
// Até então teria que aparecer a bomba do router dom 

export default function Cabecalho() {
  return (
    <>
    <header>
        <h1>Vite + React</h1>

        {/* Crie uma lista com 5 links para as nossas rotas obs( Utilizar o compnente link do router-dom*/}

        <nav>
          <ul>
            <li><link to='/'>Home</link></li>
          </ul>
        </nav>

    </header>
    </>
  )
}
