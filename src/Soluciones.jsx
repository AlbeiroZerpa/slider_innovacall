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
              <h1 className="fw-bolder">Soluciones</h1>
              <p>
                A través de nuestra Plataforma Digital de Servicio integramos
                talento humano, tecnología de última generación y experiencia
                para brindar un portafolio de soluciones inteligentes y a la
                medida.
              </p>
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
                  Contact Center
                </h1>
                <p style={{ color: "white" }}>
                  Nuestra solución permite integrar diferentes áreas de negocio
                  para consolidar, recibir y emitir información vital a clientes
                  finales, a fin de categorizar, ubicar, convencer, investigar,
                  retener, vender y fidelizar. Nuestra estrategia se centra en
                  la tecnología e innovación, enfocados en ofrecer servicios en
                  la forma que el cliente final lo requiera: En el momento
                  correcto y a través del canal adecuado.
                </p>
                <div className="container mt-5">
                  <hr className="lineaLogosCanales" />
                  <div className="logosCanales row logo-row">
                    <div className="col-md-2 logo-col">
                      <i className="logoFondo fa fa-comments-o fa-2x"></i>
                      <p className="tituloLogoCanales">Chat</p>
                    </div>
                    <div className="col-md-2 logo-col">
                      <i className="logoFondo fa fa-comment-o fa-2x"></i>
                      <p className="tituloLogoCanales">
                        Mensajería instantánea
                      </p>
                    </div>
                    <div className="col-md-2 logo-col">
                      <i className="logoFondo fa fa-user-circle-o fa-2x"></i>
                      <p className="tituloLogoCanales">
                        Puntos Atención Virtual
                      </p>
                    </div>
                    <div className="col-md-2 logo-col">
                      <i className="logoFondo fa fa-facebook-official fa-2x"></i>
                      <p className="tituloLogoCanales">Redes Sociales</p>
                    </div>
                    <div className="col-md-2 logo-col">
                      <i className="logoFondo fa fa-envelope-o fa-2x"></i>
                      <p className="tituloLogoCanales">Email</p>
                    </div>
                    <div className="col-md-2 logo-col">
                      <i className="logoFondo fa fa-mobile fa-2x"></i>
                      <p className="tituloLogoCanales">Apps Móviles</p>
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
                  Operaciones BackOffice Especializadas
                </h1>
                <p style={{ color: "white" }}>
                  A través de la convergencia de nuestras tecnologías en gestión
                  de procesos BPM y procesos de negocio aumentamos la
                  rentabilidad de la operación de nuestros aliados mediante
                  soluciones de análisis y control de documentos, emisión y
                  formalización de PQRs, soporte de ventas y atención en todo el
                  ciclo de cliente. Nuestra solución de BPM automatiza los
                  procesos de nuestros aliados, con trazabilidad y
                  acompañamiento total en diseño, desarrollo e implementación.
                </p>
                <div className="container mt-5">
                  <hr className="lineaLogosCanales" />
                  <div className="logosCanales row logo-row">
                    <div className="col-md-2 logo-col">
                      <i className="logoFondo fa fa-comments-o fa-2x"></i>
                      <p className="tituloLogoCanales">Chat</p>
                    </div>
                    <div className="col-md-2 logo-col">
                      <i className="logoFondo fa fa-comment-o fa-2x"></i>
                      <p className="tituloLogoCanales">
                        Mensajería instantánea
                      </p>
                    </div>
                    <div className="col-md-2 logo-col">
                      <i className="logoFondo fa fa-user-circle-o fa-2x"></i>
                      <p className="tituloLogoCanales">
                        Puntos Atención Virtual
                      </p>
                    </div>
                    <div className="col-md-2 logo-col">
                      <i className="logoFondo fa fa-facebook-official fa-2x"></i>
                      <p className="tituloLogoCanales">Redes Sociales</p>
                    </div>
                    <div className="col-md-2 logo-col">
                      <i className="logoFondo fa fa-envelope-o fa-2x"></i>
                      <p className="tituloLogoCanales">Email</p>
                    </div>
                    <div className="col-md-2 logo-col">
                      <i className="logoFondo fa fa-mobile fa-2x"></i>
                      <p className="tituloLogoCanales">Apps Móviles</p>
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
                  Contamos con herramientas tecnológicas propietarias que
                  permiten la extracción y análisis avanzado de conocimiento de
                  nuestros aliados en cada canal, experiencia y contacto para
                  así hacer más eficiente sus operaciones y servicios;
                  consolidamos la información de múltiples canales: telefónicos
                  pantallas, CRM y aplicaciones entre otros para gestionarla y
                  transformarla en conocimiento de altísimo valor comercial y
                  operativo.
                </p>
                <div className="container mt-5">
                  <hr className="lineaLogosCanales" />
                  <div className="logosCanales row logo-row">
                    <div className="col-md-2 logo-col">
                      <i className="logoFondo fa fa-comments-o fa-2x"></i>
                      <p className="tituloLogoCanales">Chat</p>
                    </div>
                    <div className="col-md-2 logo-col">
                      <i className="logoFondo fa fa-comment-o fa-2x"></i>
                      <p className="tituloLogoCanales">
                        Mensajería instantánea
                      </p>
                    </div>
                    <div className="col-md-2 logo-col">
                      <i className="logoFondo fa fa-user-circle-o fa-2x"></i>
                      <p className="tituloLogoCanales">
                        Puntos Atención Virtual
                      </p>
                    </div>
                    <div className="col-md-2 logo-col">
                      <i className="logoFondo fa fa-facebook-official fa-2x"></i>
                      <p className="tituloLogoCanales">Redes Sociales</p>
                    </div>
                    <div className="col-md-2 logo-col">
                      <i className="logoFondo fa fa-envelope-o fa-2x"></i>
                      <p className="tituloLogoCanales">Email</p>
                    </div>
                    <div className="col-md-2 logo-col">
                      <i className="logoFondo fa fa-mobile fa-2x"></i>
                      <p className="tituloLogoCanales">Apps Móviles</p>
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
                Optimización y Automatización de procesos (RPA, RDA)
                </h1>
                <p style={{ color: "white" }}>
                  La automatización robótica de procesos (RPA) se encarga de las
                  tareas y procesos mecánicos, repetitivos y de alto volumen,
                  mientras que la automatización robótica de escritorio (RDA)
                  está enfocada hacia pantallas e interacción con usuarios
                  finales. Ambas soluciones se desarrollan a través de nuestra
                  plataforma 100% propietarias que brindan máxima eficiencia a
                  nuestros aliados y una experiencia de satisfacción
                  incomparable para el cliente final.
                </p>
                <div className="container mt-5">
                  <hr className="lineaLogosCanales" />
                  <div className="logosCanales row logo-row">
                    <div className="col-md-2 logo-col">
                      <i className="logoFondo fa fa-comments-o fa-2x"></i>
                      <p className="tituloLogoCanales">Chat</p>
                    </div>
                    <div className="col-md-2 logo-col">
                      <i className="logoFondo fa fa-comment-o fa-2x"></i>
                      <p className="tituloLogoCanales">
                        Mensajería instantánea
                      </p>
                    </div>
                    <div className="col-md-2 logo-col">
                      <i className="logoFondo fa fa-user-circle-o fa-2x"></i>
                      <p className="tituloLogoCanales">
                        Puntos Atención Virtual
                      </p>
                    </div>
                    <div className="col-md-2 logo-col">
                      <i className="logoFondo fa fa-facebook-official fa-2x"></i>
                      <p className="tituloLogoCanales">Redes Sociales</p>
                    </div>
                    <div className="col-md-2 logo-col">
                      <i className="logoFondo fa fa-envelope-o fa-2x"></i>
                      <p className="tituloLogoCanales">Email</p>
                    </div>
                    <div className="col-md-2 logo-col">
                      <i className="logoFondo fa fa-mobile fa-2x"></i>
                      <p className="tituloLogoCanales">Apps Móviles</p>
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
