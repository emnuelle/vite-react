import { createElement } from "react";

export default function Conteudo(props) {
  /*Área declarativa*/
    return (
      <>
        
        { /*Área imperativa*/ }

          <section>

            <p><a href="/">Home Page</a></p>

            <button onClick={()=> alert("Hello World")}>
                click me!
            </button>

            <img src={props.reactLogoProps} alt={props.reactLogoAltProps}/>

          </section>
      </>
    )
  }
  