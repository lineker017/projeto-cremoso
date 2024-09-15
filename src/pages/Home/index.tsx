import Modal from "../../components/Modal";
import "./style.css";
import { useState } from "react";

export default function Home() {
  return (
    <>
      <header>
        <a href="./pages/Home/index.tsx">
          <img
            className="logo-header"
            src="./src/assets/imgs/cremoso.png"
            alt="logo header"
          />
        </a>

        <Modal />
      </header>
    </>

  );
}
