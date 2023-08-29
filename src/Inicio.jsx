// Import Swiper React components
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Mousewheel, Pagination, Navigation } from "swiper/modules";
import "./Inicio.css";

export const Inicio = () => {
  return (
    <>
      <Swiper
        direction={"vertical"}
        slidesPerView={1}
        spaceBetween={0}
        mousewheel={true}
        pagination={{
          clickable: true,
        }}
        modules={[Mousewheel, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div
            id="carouselExampleControls"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src="https://millenium.com.co/wp-content/uploads/2019/04/slider-001-v2.jpg"
                  className="d-block w-100 imagenInicioCarrusel"
                />
                <div className="carousel-caption d-none d-md-block caption-top">
                  <h5>Soluciones Contact Center y BPO</h5>
                  <p>
                    El mejor indicador de servicio para sus clientes es una
                    solución eficiente a sus problemas.
                  </p>
                </div>
              </div>
              <div className="carousel-item">
                <img
                  src="https://millenium.com.co/wp-content/uploads/2019/05/slider-002-v3.jpg"
                  className="d-block w-100 imagenInicioCarrusel"
                />
                <div className="carousel-caption d-none d-md-block caption-top">
                  <h5>Soluciones Automatización de Procesos RPA </h5>
                  <p>
                    Maximice eficiencia liberando al personal de trabajos
                    repetitivos que no agregan valor
                  </p>
                </div>
              </div>
              <div className="carousel-item">
                <img
                  src="https://millenium.com.co/wp-content/uploads/2019/04/slider-003-1.jpg"
                  className="d-block w-100 imagenInicioCarrusel"
                />
                <div className="carousel-caption d-none d-md-block caption-top caption-top-cel">
                  <h5>Soluciones Sistemas Conversacionales NLP - Chatbots</h5>
                  <p>
                    En la historia de la humanidad, la inteligencia artificial
                    es lo mas importante en lo que el hombre ha trabajado.
                    <b>Sundar Pichai - CEO Google</b>
                  </p>
                </div>
              </div>
              <div className="carousel-item">
                <img
                  src="https://millenium.com.co/wp-content/uploads/2019/02/slider-004.jpg"
                  className="d-block w-100 imagenInicioCarrusel"
                />
                <div className="carousel-caption d-none d-md-block caption-top">
                  <h5>Soluciones Inteligencia de Negocio BI</h5>
                  <p>
                    Si usted no tiene la información, es simplemente otra
                    persona con una opinión. <b>W. Edwards Deming</b>
                  </p>
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="caja-innova" id="slider2">
            <div className="container">
              <div className="row">
                <div className="col-sm-4 col-12">
                  <h1 className="fw-bolder">Somos Millenium</h1>
                </div>
                <div className="col-sm-8 col-12">
                  <p>
                    Más de 20 años de experiencia en el mercado Colombiano
                    apoyando a nuestros aliados en la gestión eficiente de sus
                    procesos. A través de nuestras soluciones en RPA/RDA,
                    Contact Center, Inteligencia Artificial e Inteligencia de
                    Negocios, somos la mejor opción para enfrentar los retos de
                    la transformación digital.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="container pt-lg-5 pt-1">
            <div className="row">
              <div className="col-12">
                <h1 className="tituloTercerSlider">Confianza y respaldo</h1>
              </div>
              <div className="col-12">
                <p className="textoTercerSlider">
                  Las empresas más importantes del país confían en nosotros.
                  Operamos en diferentes sectores de la industria nacional:
                </p>
              </div>
            </div>
            <Swiper
              slidesPerView={1}
              spaceBetween={10}
              navigation={true}
              pagination={{
                clickable: true,
              }}
              modules={[Navigation, Pagination]}
              className="mySwiperr"
              breakpoints={{
                // Cuando el ancho de pantalla es <= 640px
                640: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 20,
                },
              }}
            >
              <SwiperSlide>
                <img
                  src="https://millenium.com.co/wp-content/uploads/2019/04/01-icon-financiero.png"
                  className="d-block w-100 imgTercerSlider"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="https://millenium.com.co/wp-content/uploads/2019/04/02-icon-seguros.png"
                  className="d-block w-100 imgTercerSlider"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="https://millenium.com.co/wp-content/uploads/2019/04/03-icon-serpub.png"
                  className="d-block w-100 imgTercerSlider"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="https://millenium.com.co/wp-content/uploads/2019/04/04-icon-educacion.png"
                  className="d-block w-100 imgTercerSlider"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="https://millenium.com.co/wp-content/uploads/2019/04/05-icon-telecom.png"
                  className="d-block w-100 imgTercerSlider"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="https://millenium.com.co/wp-content/uploads/2019/04/06-icon-salud.png"
                  className="d-block w-100 imgTercerSlider"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="https://millenium.com.co/wp-content/uploads/2019/04/07-icon-gobierno.png"
                  className="d-block w-100 imgTercerSlider"
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};
