import React, { useState, useEffect } from "react";
import * as styles from "./Contador.module.css";
import * as globalStyles from "../../styles/Global.module.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

//States - estados do contador
export default function Contador() {
  const [time, setTime] = useState(25 * 60); // armazena o tempo iniciando em 25 minutos
  const [isActive, setIsActive] = useState(false); //controla se o temporiador está ativo inciando em false
  const [mode, setMode] = useState("Pomodoro"); // indica o modo atual do temporizador entre as 3 possibilidades

  // função para formatar o tempo
  const formatTime = (time) => {
    // Formato MM:ss
    const minutes = Math.floor(time / 60); //retorna o maior inteiro menor que o argumento, no caso, minutos.
    const seconds = time % 60; //calcula o resto da divisãopara para os segundos
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
      2,
      "0"
    )}`;
    //padStart formata minutos e segundos sempre com dois dígitos e arrendonda para 0
  };

  // funções que definem cada modo de contador
  const startPomodoro = () => {
    setTime(25 * 60); //ajusta o tempo de início da contagem
    setMode("Pomodoro"); //atualiza a contagem
    setIsActive(false); //pausa quando ativado - botão stop
  };

  const startLongBreak = () => {
    setTime(10 * 60);
    setMode("Long Break");
    setIsActive(false);
  };

  const startShortBreak = () => {
    setTime(5 * 60);
    setMode("Short Break");
    setIsActive(false);
  };

  // função que inicia a contagem
  const startTimer = () => {
    setIsActive(true);
  };

  // inverso
  const stopTimer = () => {
    setIsActive(false);
  };

  // função reset
  const resetTimer = () => {
    setIsActive(false);
    if (mode === "Pomodoro") setTime(25 * 60);
    else if (mode === "Long Break") setTime(10 * 60);
    else setTime(5 * 60);
  };

  // Contagem regressiva
  useEffect(() => {
    let interval = null;
    if (isActive && time > 0) {
      //se o temporizador está a tivo e for maior que zero, diminui um segundo
      interval = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    } else if (time === 0) {
      // quando chegar em zero interrompe a cotagem e emite o som
      clearInterval(interval);
      new Audio("/alert.mp3").play();
    }
    return () => clearInterval(interval); //limpa o contador
  }, [isActive, time]);

  return (
    <div className="header-footer">
      <Header />
      <div className={globalStyles.container}>
        <h1 className={styles.title}>Pomodoro Timer</h1>
        <h3 className={styles.subtitle}>Você conhece o método Pomodoro?</h3>
        <p className={styles.paragraph}>
          O método Pomodoro é uma técnica de gerenciamento de tempo que ajuda a
          melhorar a concentração e a produtividade nos estudos. Ele envolve
          dividir o tempo em blocos de trabalho focado{" "}
          <i>(geralmente de 25 minutos)</i>, intercalados com pausas curtas,
          para evitar a fadiga e manter o foco por mais tempo.
        </p>
        <h2 className={styles.timer}>{formatTime(time)}</h2>
        <div className={styles.allButtonsContainer}>
        <div className={styles.buttonGroup}>
          <button onClick={startPomodoro} className={styles.button}>
            Pomodoro
          </button>
          <button onClick={startLongBreak} className={styles.button}>
            Long Break
          </button>
          <button onClick={startShortBreak} className={styles.button}>
            Short Break
          </button>
        </div>
        <div className={styles.buttonGroup}>
          <button onClick={startTimer} className={styles.start}>
            Start
          </button>
          <button onClick={stopTimer} className={styles.stop}>
            Stop
          </button>
          <button onClick={resetTimer} className={styles.reset}>
            Reset
          </button>
        </div>
      </div>
      </div>
      <Footer />
    </div>
  );
}
