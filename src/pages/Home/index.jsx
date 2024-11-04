import React from "react";
import * as styles from "./Home.module.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function Home() {
  const slidePerView = 1;

  const residencias = [
    {
      id: "1",
      imagem: "/metodo_pomodoro.jpg",
      legenda: "Método Pomodoro",
    },
    {
      id: "2",
      imagem: "/mapa_mental.jpg",
      legenda: "Mapa Mental",
    },
    {
      id: "3",
      imagem: "/leitura_ativa.jpg",
      legenda: "Leitura Ativa",
    },
    {
      id: "4",
      imagem: "/revisao_espacada.jpg",
      legenda: "Revisão Espaçada",
    },
    {
      id: "5",
      imagem: "/estudo_intercalado.jpg",
      legenda: "Estudo Intercalado",
    },
  ];

  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.conteudo}>
        <section className={styles.home}>
          <div className={styles.shape}></div>
          <div className={styles.titulosHome}>
            <h1 className={styles.titulo}>Guia de Estudos</h1>
          </div>
          <img
            src="/homem_pc.png"
            alt="Pessoas no computador"
            className={styles.bannerFoto}
          />
        </section>

        <section className={styles.introducao}>
          <h1 className={styles.tituloUm}>Introdução</h1>
          <h3 className={styles.subtitulo}>
            Bem-vindo ao Guia de Estudos para a Residência em TIC/Software do
            Serratec!
          </h3>
          <p className={styles.texto}>
            Este espaço foi criado especialmente para apoiar você, residente, em
            sua jornada de aprendizado e desenvolvimento. Aqui, você encontrará
            orientações práticas para entender melhor as disciplinas do programa
            e maximizar seu rendimento, além de dicas valiosas sobre como
            organizar seu tempo de estudo de forma eficaz. Nosso objetivo é
            ajudar você a tirar o melhor proveito do curso, com métodos que
            facilitam a assimilação de conteúdo e técnicas para aprimorar a
            gestão do seu tempo. Aproveite nossas ferramentas e sugestões para
            planejar cada etapa, equilibrar o estudo com outras atividades e
            alcançar um aprendizado consistente e focado. Estamos aqui para
            caminhar com você rumo ao sucesso!
          </p>
        </section>

        <section className={styles.slideSection}>
          <h1 className={styles.tituloDois}>Métodos de Estudo</h1>
          <div className={styles.swiperContainer}>
            <Swiper
              modules={[Navigation]}
              slidesPerView={slidePerView}
              pagination={{ clickable: true }}
              navigation
            >
              {residencias.map((item) => (
                <SwiperSlide key={item.id} className={styles.slideContainer}>
                  <img
                    src={item.imagem}
                    alt="Slider"
                    className={styles.slideItem}
                  />
                  <div className={styles.legenda}>{item.legenda}</div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>

        <section className={styles.diferenciais}>
          <h1 className={styles.tituloTres}>
            Vantagens de estudar de forma organizada:
          </h1>
          <div className={styles.texto}>
            <h3 className={styles.objetivo}>
              1. Gestão do Tempo e Produtividade:
            </h3>
            <h4 className={styles.descricao}>
              Com uma rotina organizada, você consegue distribuir melhor seu
              tempo entre as diversas disciplinas, evitando sobrecarga e
              aumentando a produtividade. Assim, você poderá se dedicar
              plenamente a cada tema, sem deixar acumular conteúdos importantes.
            </h4>
            <h3 className={styles.objetivo}>
              2. Maior Retenção e Compreensão de Conteúdos:
            </h3>
            <h4 className={styles.descricao}>
              Planejar revisões e estudos intercalados permite que você assimile
              o conhecimento de forma contínua e profunda, fixando o conteúdo a
              longo prazo. Com a prática de metodologias eficazes, como o método
              Pomodoro e a revisão espaçada, você retém o aprendizado de forma
              mais sólida.
            </h4>
            <h3 className={styles.objetivo}>
              3. Redução de Ansiedade e Estresse:
            </h3>
            <h4 className={styles.descricao}>
              A organização proporciona uma visão clara do que precisa ser
              feito, reduzindo a ansiedade diante de prazos e tarefas
              acumuladas. Com um plano de estudos, você alcança suas metas de
              maneira mais tranquila, focando no aprendizado sem pressão
              desnecessária.
            </h4>
            <h5 className={styles.descricaoFinal}>
              Nosso portal está aqui para fornecer ferramentas, técnicas de
              estudo e dicas de gestão de tempo, ajudando você a desenvolver uma
              rotina produtiva e bem organizada para alcançar o sucesso no
              curso.
            </h5>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
