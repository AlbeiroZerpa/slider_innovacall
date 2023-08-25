// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Mousewheel, Pagination } from "swiper/modules";
import "./Inicio.css";

export const Inicio = () => {
  let items = document.querySelectorAll(".carousel .carousel-item");

  items.forEach((el) => {
    const minPerSlide = 4;
    let next = el.nextElementSibling;
    for (var i = 1; i < minPerSlide; i++) {
      if (!next) {
        // wrap carousel by using first child
        next = items[0];
      }
      let cloneChild = next.cloneNode(true);
      el.appendChild(cloneChild.children[0]);
      next = next.nextElementSibling;
    }
  });

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
                    es lo mas importante en lo que el hombre ha trabajado.{" "}
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
        <div className="container text-center my-3">
            <h2 className="font-weight-light">
              Bootstrap Multi Slide Carousel
            </h2>
            <div className="row mx-auto my-auto justify-content-center">
              <div
                id="recipeCarousel"
                className="carousel slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner carousel-inner-tercerSlide" role="listbox">
                  <div className="carousel-item active">
                    <div className="col-md-3">
                      <div className="card">
                        <div className="card-img">
                          <img
                            src="//via.placeholder.com/500x400/31f?text=1"
                            className="img-fluid"
                          />
                        </div>
                        <div className="card-img-overlay">Slide 1</div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="col-md-3">
                      <div className="card">
                        <div className="card-img">
                          <img
                            src="//via.placeholder.com/500x400/e66?text=2"
                            className="img-fluid"
                          />
                        </div>
                        <div className="card-img-overlay">Slide 2</div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="col-md-3">
                      <div className="card">
                        <div className="card-img">
                          <img
                            src="//via.placeholder.com/500x400/7d2?text=3"
                            className="img-fluid"
                          />
                        </div>
                        <div className="card-img-overlay">Slide 3</div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="col-md-3">
                      <div className="card">
                        <div className="card-img">
                          <img
                            src="//via.placeholder.com/500x400?text=4"
                            className="img-fluid"
                          />
                        </div>
                        <div className="card-img-overlay">Slide 4</div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="col-md-3">
                      <div className="card">
                        <div className="card-img">
                          <img
                            src="//via.placeholder.com/500x400/aba?text=5"
                            className="img-fluid"
                          />
                        </div>
                        <div className="card-img-overlay">Slide 5</div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="col-md-3">
                      <div className="card">
                        <div className="card-img">
                          <img
                            src="//via.placeholder.com/500x400/fc0?text=6"
                            className="img-fluid"
                          />
                        </div>
                        <div className="card-img-overlay">Slide 6</div>
                      </div>
                    </div>
                  </div>
                </div>
                <a
                  className="carousel-control-prev bg-transparent w-aut"
                  href="#recipeCarousel"
                  role="button"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                </a>
                <a
                  className="carousel-control-next bg-transparent w-aut"
                  href="#recipeCarousel"
                  role="button"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                </a>
              </div>
            </div>
            <h5 className="mt-2 fw-light">advances one slide at a time</h5>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};
