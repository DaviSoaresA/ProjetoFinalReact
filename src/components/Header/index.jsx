import React from "react";
import { Link } from "react-router-dom";
import * as styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div>
        <h1> Contador de Tempo de Estudo </h1>

        <Link to="/"> Home </Link>
        <p></p>
        <Link to="/login"> Login </Link>
        <p></p>
        <Link to="/disciplinas"> Disciplinas </Link>
        <p></p>
        <Link to="/contador"> Contador </Link>
        <p></p>
        <Link to="/sobre"> Sobre </Link>
      </div>
    </header>
  );
}
