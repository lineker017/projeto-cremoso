import { useState } from "react";
import "./style.css";

export default function Modal() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen(true)}>
        <img
          src="./src/assets/icons/hamburguer.svg"
          alt=""
          className="icon-menu"
        />
      </button>

      <div className={`open-menu ${open ? "open" : ""}`}>

        <button onClick={() => setOpen(false)}>
          <img src="./src/assets/icons/close.svg" alt="close" />
        </button>
        
        <ul className="menu">
          <li>
            <a href=""> Home </a>
          </li>
          <li>
            <a href=""> Institucional</a>
          </li>
          <li>
            <a href=""> Produtos</a>
          </li>
          <li>
            <a href=""> Onde Encontrar</a>
          </li>
          <li>
            <a href=""> Contato</a>
          </li>
          <li>
            <a href=""> FAÇA SUA FESTA</a>
          </li>
        </ul>
      </div>
    </>
  );
}
