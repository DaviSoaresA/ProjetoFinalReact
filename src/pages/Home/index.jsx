import React from "react";
import * as styles from "./Home.module.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

export default function Home() {
  const slidePerView = 1;

  const residencias = [
    { id: "1", imagem: "/residencia_software.jpg", legenda: "Residência em Software" },
    { id: "2", imagem: "/residencia_redes.jpg", legenda: "Residência em Redes" },
    { id: "3", imagem: "/residencia_dados.jpg", legenda: "Residência em Dados" },
  ];

  return (
    <div className={styles.container}>
      <h1 className={styles.titulo}>Introdução</h1>
      <h3 className={styles.subtitulo}>
        Bem-vindo ao Guia de Estudos para a Residência em TIC/Software do
        Serratec!
      </h3>
      <h3 className={styles.texto}>
        Este espaço foi criado especialmente para apoiar você, residente, em sua
        jornada de aprendizado e desenvolvimento. Aqui, você encontrará
        orientações práticas para entender melhor as disciplinas do programa e
        maximizar seu rendimento, além de dicas valiosas sobre como organizar
        seu tempo de estudo de forma eficaz. Nosso objetivo é ajudar você a
        tirar o melhor proveito do curso, com métodos que facilitam a
        assimilação de conteúdo e técnicas para aprimorar a gestão do seu tempo.
        Aproveite nossas ferramentas e sugestões para planejar cada etapa,
        equilibrar o estudo com outras atividades e alcançar um aprendizado
        consistente e focado. Estamos aqui para caminhar com você rumo ao
        sucesso!
      </h3>

      <div className={styles.slideSection}>
        <h1 className={styles.tituloDois}>Trilhas do Serratec</h1>
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
      </div>

      <h1 className={styles.tituloTres}>Nossos diferenciais</h1>
      <h3 className={styles.texto}>
        <h3 className={styles.objetivo}>
          1. Aprimoramento da Gestão do Tempo e da Organização dos Estudos:
        </h3>
        <h4 className={styles.descricao}>
          Com o nosso contador, é possível aprender a gerenciar o tempo de
          estudo e a organizar as atividades de maneira eficiente, garantindo um
          aprendizado contínuo e bem-estruturado.
        </h4>
        <h3 className={styles.objetivo}>
          2. Garantia de que está por dentro do conteúdo programático:
        </h3>
        <h4 className={styles.descricao}>
          Com a page de disciplinas, você consegue se organizar melhor e ficar
          sabendo sobre cada uma das disciplinas da Residência em Software do
          Serratec.
        </h4>
        <h3 className={styles.objetivo}>
          3. Aplicação dos conhecimentos para solucionar problemas e construir metas:{" "}
        </h3>
        <h4 className={styles.descricao}>
          Utilizar os conhecimentos aqui adquiridos para alavancar seus estudos
          e seu potencial de maneira constante é um diferencial.
        </h4>
      </h3>
    </div>
  );
}
