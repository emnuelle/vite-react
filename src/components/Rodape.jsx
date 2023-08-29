import { createElement } from "react";

export default function Rodape(props) {
    return (
      <>
        <footer>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>

            <ul>
              {props.listaProps.map( (li,index)=>{
                createElement('li', key={index}, li);
                return li;
              })};
            </ul>

            <p>&copy; 2021, Vite.js and React</p>
        </footer>
      </>
    )
  }
  