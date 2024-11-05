import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import * as styles from "./Disciplinas.module.css";
import { useForm } from "react-hook-form";
import axios from "axios";

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
    const newpost = {
      nome: data.titulo,
      descricao: data.descricao,
    };
    axios
      .post("https://672921086d5fa4901b6c3fb2.mockapi.io/Disciplinas", newpost)
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
                maxLength="65"
                {...register("titulo")}
              />
            </div>
            <div className={styles.dfField}>
              <label htmlFor="descricao">Descrição da Disciplina:</label>
              <input
                type="text"
                name="descricao"
                id="descricao"
                maxLength="500"
                {...register("descricao")}
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
          {disciplinas.map((d) => (
            <div className={styles.dcard} key={d.id}>
              <header className={styles.dcard__header}>
                <h2>{d.nome}</h2>
              </header>
              <div className={styles.dline}></div>
              <div className={styles.dcard__main}>
                <p>{d.descricao}</p>
              </div>
              <div className={styles.dline}></div>
              <footer className={styles.dcard__footer}>
                <h3>&copy; 2024 - Grupo 5</h3>
              </footer>
            </div>
          ))}
        </main>
      )}
      <Footer />
    </div>
  );
}
