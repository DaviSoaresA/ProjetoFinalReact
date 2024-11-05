import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import * as styles from "./Disciplinas.module.css";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Disciplinas() {
  const [disciplinas, setDisciplinas] = useState([]);
  const [disc, setDisc] = useState(true);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const listarDisciplinas = () => {
    axios
      .get("https://672921086d5fa4901b6c3fb2.mockapi.io/Disciplinas")
      .then((res) => {
        setDisciplinas(res.data);
      })
      .catch(console.error("Erro na requisição"));
  };

  useEffect(() => {
    listarDisciplinas();
  }, []);

  const addPost = (data) => {
    axios
      .post("https://672921086d5fa4901b6c3fb2.mockapi.io/Disciplinas", data)
      .then(() => {
        setDisc(true);
        listarDisciplinas();
      })
      .catch(console.error("Erro no Post"));
  };

  return (
    <div>
      <Header />
      <div className={styles.buttonArea}>
        <button className={styles.dbutton} onClick={() => setDisc(true)}>
          Disciplinas Existentes
        </button>
        <button className={styles.dbutton} onClick={() => setDisc(false)}>
          Adicionar Disciplinas
        </button>
      </div>
      {!disc && (
        <main className={styles.dmain}>
          <form className={styles.dform} onSubmit={handleSubmit(addPost)}>
            <header className={styles.dfheader}>
              <h1>Adicione uma nova Disciplina</h1>
            </header>
            <div className={styles.dline}></div>
            <div className={styles.dfField}>
              <label htmlFor="titulo">Título da Disciplina:</label>
              <input
                type="text"
                name="titulo"
                id="titulo"
                maxLength="100"
                {...register("titulo")}
              />
            </div>
            <div className={styles.dfField}>
              <label htmlFor="descricao">Descrição da Disciplina:</label>
              <input
                type="text"
                name="descricao"
                id="descricao"
                maxLength="200"
                {...register("descricao")}
              />
            </div>
            <div className={styles.dfField}>
              <label htmlFor="cargaHoraria">Carga horária da Disciplina:</label>
              <input
                type="number"
                name="cargaHoraria"
                id="cargaHoraria"
                maxLength="10"
                {...register("cargaHoraria")}
              />
            </div>
            <button type="submit" className={styles.dbutton}>
              Adicionar
            </button>
          </form>
        </main>
      )}

      {disc && (
        <main className={styles.dmain}>
          {disciplinas.map((d, key) => (
            <div className={styles.dcard} key={key}>
              <header className={styles.dcard__header}>
                <h2>{d.nome}</h2>
              </header>
              <div className={styles.dline}></div>
              <div className={styles.dcard__main}>
                <p>{d.descricao}</p>
              </div>
              <div className={styles.dline}></div>
              <footer className={styles.dcard__footer}>
                <h4>{d.cargaHoraria}Hr</h4>
                <Link to={"/contador"}>
                  <button className={styles.dbutton}>Começe a Estudar!</button>
                </Link>
              </footer>
            </div>
          ))}
        </main>
      )}
      <Footer />
    </div>
  );
}
