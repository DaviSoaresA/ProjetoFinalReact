import React from "react";
import { Link } from "react-router-dom";
import "./Header.module.css";

export default function Header() {
  return (
    <header className="header">
      <div>
        <h1> Contador de Tempo de Estudo </h1>

        <Link to="/"> Home </Link>
        <Link to="/login"> Login </Link>
        <Link to="/disciplinas"> Disciplinas </Link>
        <Link to="/contador"> Contador </Link>
        <Link to="/sobre"> Sobre </Link>
      </div>
    </header>
  );
}
