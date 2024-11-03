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
    {
      id: "1",
      image: "/residencia_software.jpg",
      caption: "Residência em Software",
    },
    { id: "2", image: "/residencia_redes.jpg", caption: "Residência em Redes" },
    { id: "3", image: "/residencia_dados.jpg", caption: "Residência em Dados" },
  ];

  const locais = [
    { id: "4", image: "/areal_foto.jpg", caption: "Areal" },
    { id: "5", image: "/friburgo_foto.jpg", caption: "Nova Friburgo" },
    { id: "6", image: "/petropolis_foto.jpg", caption: "Petrópolis" },
    { id: "7", image: "/teresopolis_foto.jpg", caption: "Teresópolis" },
  ];

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Trilhas do Serratec</h1>
      <Swiper
        modules={[Navigation]}
        slidesPerView={slidePerView}
        pagination={{ clickable: true }}
        navigation
      >
        {residencias.map((item) => (
          <SwiperSlide key={item.id} className={styles.slideContainer}>
            <img src={item.image} alt="Slider" className={styles.slideItem} />
            <div className={styles.legenda}>{item.caption}</div>
          </SwiperSlide>
        ))}
      </Swiper>

      <h1 className={styles.title}>Polos do Serratec</h1>
      <Swiper
        modules={[Navigation]}
        slidesPerView={slidePerView}
        pagination={{ clickable: true }}
        navigation
      >
        {locais.map((item) => (
          <SwiperSlide key={item.id} className={styles.slideContainer}>
            <img src={item.image} alt="Slider" className={styles.slideItem} />
            <div className={styles.legenda}>{item.caption}</div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
