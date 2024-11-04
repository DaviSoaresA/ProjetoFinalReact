import React from "react";
import "./Footer.module.css";

export default function Footer() {
  return (
    <footer className="footer">
      <p> {new Date().getFullYear()} Contador de Tempo de Estudo</p>
      <p> &copy; Desenvolvido por [Grupo 05]</p>
    </footer>
  );
}
