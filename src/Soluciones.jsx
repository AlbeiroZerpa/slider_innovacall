// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

// import required modules
import { Mousewheel, Pagination, EffectFade } from "swiper/modules";

export const Soluciones = () => {
  return (
    <>
      <Swiper
        direction={"vertical"}
        slidesPerView={1}
        spaceBetween={0}
        mousewheel={true}
        effect="fade"
        pagination={{
          clickable: true,
        }}
        modules={[Mousewheel, Pagination, EffectFade]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="caja-innova" id="soluciones-uno">
            <div className="contenido-uno-innova">
              <h1 className="fw-bolder">Soluciones/Servicios</h1>
              <p>
                En nuestra empresa de contact center, brindamos una amplia
                variedad de soluciones y servicios para una gestión eficiente de
                la comunicación con los clientes.
              </p>
              <h5 className="fw-bolder pt-2">
                Nuestra Plataforma Digital de Servicio
              </h5>
              Combina la experiencia de nuestro talentoso equipo humano, la
              tecnología avanzada que empleamos y nuestra experiencia en el
              sector para ofrecer soluciones personalizadas e inteligentes.
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="caja-innova" id="soluciones-dos">
            <div className="d-flex justify-content-center align-items-center">
              <img
                src="https://millenium.com.co/wp-content/uploads/2019/04/icon-solution-01-contact-400x400.png"
                className="circulo-img"
              />
              <div className="contenido-uno-innova">
                <h1 className="fw-bolder" style={{ color: "white" }}>
                  En relación a nuestro Contact Center
                </h1>
                <p style={{ color: "white" }}>
                  Proporcionamos una solución integral que integra diferentes
                  áreas de negocio. Nuestra solución permite el envío y
                  recepción de información relevante con el objetivo de
                  fidelizar a los clientes. Nos basamos en la tecnología y la
                  innovación para ofrecer servicios adaptados a las necesidades
                  del cliente, en el momento adecuado y a través del canal más
                  conveniente.
                </p>
                <div className="container mt-5">
                  <hr className="lineaLogosCanales" />
                  <div className="logosCanales row logo-row">
                    <div className="col-4 col-md-3 logo-col">
                      <i className="logoFondo fa fa-question-circle-o fa-2x"></i>
                      <p className="tituloLogoCanales">Servicio al cliente</p>
                    </div>
                    <div className="col-4 col-md-3 logo-col">
                      <i className="logoFondo fa fa-shopping-cart fa-2x"></i>
                      <p className="tituloLogoCanales">Ventas</p>
                    </div>
                    <div className="col-4 col-md-3 logo-col">
                      <i className="logoFondo fa fa-money fa-2x"></i>
                      <p className="tituloLogoCanales">Cobranzas</p>
                    </div>
                    <div className="col-4 col-md-3 logo-col">
                      <i className="logoFondo fa fa-bullhorn fa-2x"></i>
                      <p className="tituloLogoCanales">Telemercadeo</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="caja-innova" id="soluciones-tres">
            <div className="d-flex justify-content-center align-items-center">
              <img
                src="https://millenium.com.co/wp-content/uploads/2019/04/icon-solution-02-operaciones-400x400.png"
                className="circulo-img"
              />
              <div className="contenido-uno-innova">
                <h1 className="fw-bolder" style={{ color: "white" }}>
                  Servicios especializados de Operaciones BackOffice
                </h1>
                <p style={{ color: "white" }}>
                  Combinan nuestras tecnologías de gestión de procesos BPM y
                  procesos de negocio. Estas soluciones mejoran la rentabilidad
                  de la operación de nuestros socios al analizar y controlar
                  documentos, emitir y formalizar PQRs, y brindar apoyo en
                  ventas y atención al cliente en todo el ciclo de vida. Nuestra
                  solución de BPM automatiza los procesos de nuestros socios y
                  les brinda un seguimiento y asesoramiento completo en diseño,
                  desarrollo e implementación.
                </p>
                <div className="container mt-5">
                  <hr className="lineaLogosCanales" />
                  <div className="logosCanales row logo-row">
                    <div className="col-4 logo-col">
                      <i className="logoFondo fa fa-thumbs-o-up fa-2x"></i>
                      <p className="tituloLogoCanales">Gestión de PQR's</p>
                    </div>
                    <div className="col-4 logo-col">
                      <i className="logoFondo fa fa-headphones fa-2x"></i>
                      <p className="tituloLogoCanales">Mesa de ayuda</p>
                    </div>
                    <div className="col-4 logo-col">
                      <i className="logoFondo fa fa-file-o fa-2x"></i>
                      <p className="tituloLogoCanales">Gestión documental</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="caja-innova" id="soluciones-cuatro">
            <div className="d-flex justify-content-center align-items-center">
              <img
                src="https://millenium.com.co/wp-content/uploads/2019/04/icon-solution-03-inteligencia-400x400.png"
                className="circulo-img"
              />
              <div className="contenido-uno-innova">
                <h1 className="fw-bolder" style={{ color: "white" }}>
                  Inteligencia de Negocio
                </h1>
                <p style={{ color: "white" }}>
                  Permite extraer y analizar de manera avanzada el conocimiento
                  de nuestros socios en cada canal, experiencia y contacto. Esto
                  nos permite optimizar sus operaciones y servicios al integrar
                  la información de diferentes canales, como llamadas,
                  pantallas, CRM y aplicaciones, y convertirla en conocimiento
                  de gran valor comercial y operativo.
                </p>
                <div className="container mt-5">
                  <hr className="lineaLogosCanales" />
                  <div className="logosCanales row logo-row">
                    <div className="col-4 col-md-3 logo-col">
                      <i className="logoFondo fa fa-pie-chart fa-2x"></i>
                      <p className="tituloLogoCanales">Estudio de mercadeo</p>
                    </div>
                    <div className="col-4 col-md-3 logo-col">
                      <i className="logoFondo fa fa-long-arrow-up fa-2x"></i>
                      <p className="tituloLogoCanales">Análisis de datos</p>
                    </div>
                    <div className="col-4 col-md-3 logo-col">
                      <i className="logoFondo fa fa-line-chart fa-2x"></i>
                      <p className="tituloLogoCanales">Modelos predictivos</p>
                    </div>
                    <div className="col-4 col-md-3 logo-col">
                      <i className="logoFondo fa fa-thumbs-o-up fa-2x"></i>
                      <p className="tituloLogoCanales">
                        Sistemas de recomendación
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="caja-innova" id="soluciones-cinco">
            <div className="d-flex justify-content-center align-items-center">
              <img
                src="https://millenium.com.co/wp-content/uploads/2019/04/icon-solution-04-rparda-400x400.png"
                className="circulo-img"
              />
              <div className="contenido-uno-innova">
                <h1 className="fw-bolder" style={{ color: "white" }}>
                  Servicios de Optimización y Automatización de procesos (RPA,
                  RDA)
                </h1>
                <p style={{ color: "white" }}>
                  Cada proceso se adapta a las necesidades de cada cliente.
                  Utilizamos la automatización robótica de procesos (RPA) para
                  llevar a cabo tareas y procesos que requieren precisión,
                  rapidez y consistencia, y la automatización robótica de
                  escritorio (RDA) para interactuar con pantallas y usuarios.
                </p>
                <div className="container mt-5">
                  <hr className="lineaLogosCanales" />
                  <div className="logosCanales row logo-row">
                    <div className="col-4 logo-col">
                      <i className="logoFondo fa fa-cogs fa-2x"></i>
                      <p className="tituloLogoCanales">RPA/RDA</p>
                    </div>
                    <div className="col-4 logo-col">
                      <i className="logoFondo fa fa-comment-o fa-2x"></i>
                      <p className="tituloLogoCanales">Chat Bot</p>
                    </div>
                    <div className="col-4 logo-col">
                      <i className="logoFondo fa fa-comments-o fa-2x"></i>
                      <p className="tituloLogoCanales">Voice Bot</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};
