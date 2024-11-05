import React from "react";
import styles from "./Sobre.module.css";

export default function Sobre() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>
                Guia de Estudos: Como Aproveitar Melhor seu Tempo e Aprender de
                Forma Eficaz
            </h1>
            <p className={styles.paragraph}>
                Estudar de forma eficiente vai muito além de apenas ler e
                revisar materiais. É preciso ter uma estratégia e conhecer as
                metodologias que melhor se adaptam ao seu estilo de aprendizado.
                Abaixo, você encontrará algumas abordagens e técnicas para
                otimizar seu estudo, além de links para sites e artigos com mais
                informações sobre metodologias de aprendizado.
            </p>

            <h2 className={styles.subtitle}>1. Método Pomodoro</h2>
            <p className={styles.paragraph}>
                O método Pomodoro é uma técnica simples e poderosa de gestão de
                tempo. Ela consiste em dividir o tempo de estudo em blocos de 25
                minutos de foco total, seguidos de uma pausa de 5 minutos. Após
                quatro "pomodoros", você faz uma pausa mais longa. Esse método
                ajuda a manter a concentração e evita o cansaço mental.
            </p>

            <h2 className={styles.subtitle}>2. Mapas Mentais</h2>
            <p className={styles.paragraph}>
                Criar mapas mentais é uma forma visual de organizar informações,
                facilitando a compreensão e a memorização. Eles conectam ideias
                e conceitos, o que pode ser especialmente útil ao revisar
                disciplinas que envolvem muita teoria. Para montar um mapa
                mental, você pode usar papel e caneta ou plataformas como o
                MindMeister.
            </p>

            <h2 className={styles.subtitle}>3. Leitura Ativa</h2>
            <p className={styles.paragraph}>
                A leitura ativa envolve interagir com o conteúdo, fazendo
                anotações, destacando pontos importantes e resumindo o que foi
                lido. Essa abordagem permite uma compreensão mais profunda do
                tema e ajuda a manter a atenção.
            </p>

            <h2 className={styles.subtitle}>4. Estudo Intercalado</h2>
            <p className={styles.paragraph}>
                Em vez de estudar uma disciplina por horas seguidas, alterne
                entre diferentes assuntos. O estudo intercalado ajuda a evitar a
                fadiga mental e facilita a retenção, pois seu cérebro se mantém
                engajado com novos conteúdos.
            </p>

            <h2 className={styles.subtitle}>5. Revisão Espaçada</h2>
            <p className={styles.paragraph}>
                A revisão espaçada consiste em revisar o conteúdo em intervalos
                crescentes ao longo do tempo, reforçando a memorização e
                diminuindo a chance de esquecimento. Existem aplicativos como
                Anki que ajudam a aplicar essa técnica automaticamente.
            </p>

            <h2 className={styles.subtitle}>
                Sites com Conteúdo sobre Técnicas e Metodologias de Estudo
            </h2>
            <p className={styles.paragraph}>
                Para se aprofundar em metodologias de estudo e encontrar mais
                dicas, confira os seguintes sites:
            </p>
            <ul className={styles.list}>
                <li className={styles.listItem}>
                    <a
                        href="https://www.nucleoensino.usp.br/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Núcleo de Ensino da USP
                    </a>
                </li>
                <li className={styles.listItem}>
                    <a
                        href="https://www.youtube.com/channel/UCY0OT85HL0a_k4u0V1FzFNA"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Estude com Eficiência
                    </a>
                </li>
                <li className={styles.listItem}>
                    <a
                        href="https://www.mindtools.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        MindTools
                    </a>
                </li>
                <li className={styles.listItem}>
                    <a
                        href="https://www.estudopratico.com.br/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Estudo Prático
                    </a>
                </li>
            </ul>
        </div>
    );
};
>>>>>>> 9fc819133083163881033c2553c6edfba24a78bd
