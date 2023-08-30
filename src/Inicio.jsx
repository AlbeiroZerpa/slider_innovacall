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
                  src="../public/inicioSlider1.jpeg"
                  className="d-block w-100 imagenInicioCarrusel"
                />
                <div className="carousel-caption d-none d-md-block caption-top">
                  <h5 style={{ color: "white" }}>Soluciones Contact Center</h5>
                  <p style={{ color: "white" }}>
                    Lo que hace que una empresa se destaque de la competencia es
                    la calidad de su atención al cliente. Por eso, debe contar
                    con un equipo de profesionales capacitados y comprometidos
                    que brinden una respuesta rápida y efectiva a las
                    necesidades implicadas.
                  </p>
                </div>
              </div>
              <div className="carousel-item">
                <img
                  src="../public/inicioSlider2.jpg"
                  className="d-block w-100 imagenInicioCarrusel"
                />
                <div className="carousel-caption d-none d-md-block caption-top">
                  <h5 style={{ color: "white" }}>
                    Automatización de procesos RPA (Robotic Process Automation)
                  </h5>
                  <p style={{ color: "white" }}>
                    Permite aumentar la eficiencia operativa, reducir los
                    errores y mejorar la satisfacción del cliente y de los
                    empleados.
                  </p>
                </div>
              </div>
              <div className="carousel-item">
                <img
                  src="../public/inicioSlider3.jpeg"
                  className="d-block w-100 imagenInicioCarrusel"
                />
                <div className="carousel-caption d-none d-md-block caption-top caption-top-cel">
                  <h5 style={{ color: "white" }}>Los sistemas conversacionales NPL </h5>
                  <p style={{ color: "white" }}>
                    Son una herramienta poderosa para facilitar la comunicación
                    y el aprendizaje. Además, pueden crear experiencias
                    interactivas, creativas y divertidas para los usuarios.
                  </p>
                </div>
              </div>
              <div className="carousel-item">
                <img
                  src="../public/inicioSlider4.jpeg"
                  className="d-block w-100 imagenInicioCarrusel"
                />
                <div className="carousel-caption d-none d-md-block caption-top">
                  <h5 style={{ color: "white" }}>La inteligencia de negocios</h5>
                  <p style={{ color: "white" }}>
                    "Es la capacidad de transformar los datos en información, y
                    la información en conocimiento." <b>Carlos Serrano</b>
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
                  <h1 className="fw-bolder">Somos Innovacall</h1>
                </div>
                <div className="col-sm-8 col-12">
                  <p>
                    Somos una empresa de Contact Center que ofrece múltiples
                    servicios para una óptima atención al cliente. Nuestro
                    objetivo es facilitar la comunicación entre las empresas y
                    sus usuarios, ofreciendo soluciones personalizadas y de
                    calidad.
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
