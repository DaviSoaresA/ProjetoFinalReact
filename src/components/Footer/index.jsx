import React from "react";
import * as styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p> {new Date().getFullYear()} Contador de Tempo de Estudo</p>
      <p> &copy; Desenvolvido pelo Grupo 5 </p>
      <p> Professor Roni </p>
    </footer>
  );
}
