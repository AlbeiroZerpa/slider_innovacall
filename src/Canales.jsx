import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { Mousewheel, Pagination, EffectFade } from "swiper/modules";

export const Canales = () => {
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
          <div className="caja-innova" id="canales-uno">
            <div className="contenido-uno-innova ">
              <h1 className="fw-bolder textoCanales" style={{ color: "white" }}>
                Los Canales
              </h1>
              <p className="" style={{ color: "white" }}>
                Son el medio por el cual nuestros Aliados se comunican con sus
                clientes finales. Nuestro objetivo es lograr una cobertura total
                de los clientes finales con una experiencia de usuario final
                orientada al éxito, basada en la coherencia y la mejora continua
                de procesos.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="caja-innova" id="canales-dos">
            <div className="contenido-uno-innova ">
              <h1 className="fw-bolder pt-lg-5" style={{ color: "white" }}>
                Digitales
              </h1>
              <p className="pb-lg-5" style={{ color: "white" }}>
                El sistema multicanal nos permite ofrecer una experiencia
                integrada, fluida y adaptada a las necesidades de cada cliente.
                Con una plataforma que utiliza inteligencia artificial (IA), y
                unifica procesos e información, conseguimos proveer un nivel de
                servicio excepcional, al mismo tiempo que optimizamos la
                eficiencia en costo y gestión para nuestros socios.
              </p>
              <div className="container mt-4 pt-lg-5">
                <hr className="lineaLogosCanales" />
                <div className="logosCanales row logo-row">
                  <div className="col-4 col-md-2 logo-col">
                    <i className="logoFondo fa fa-comments-o fa-2x"></i>
                    <p className="tituloLogoCanales">Chat</p>
                  </div>
                  <div className="col-4 col-md-2 logo-col">
                    <i className="logoFondo fa fa-comment-o fa-2x"></i>
                    <p className="tituloLogoCanales">Mensajería instantánea</p>
                  </div>
                  <div className="col-4 col-md-2 logo-col">
                    <i className="logoFondo fa fa-user-circle-o fa-2x"></i>
                    <p className="tituloLogoCanales">Puntos Atención Virtual</p>
                  </div>
                  <div className="col-4 col-md-2 logo-col">
                    <i className="logoFondo fa fa-facebook-official fa-2x"></i>
                    <p className="tituloLogoCanales">Redes Sociales</p>
                  </div>
                  <div className="col-4 col-md-2 logo-col">
                    <i className="logoFondo fa fa-envelope-o fa-2x"></i>
                    <p className="tituloLogoCanales">Email</p>
                  </div>
                  <div className="col-4 col-md-2 logo-col">
                    <i className="logoFondo fa fa-mobile fa-2x"></i>
                    <p className="tituloLogoCanales">Apps Móviles</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="caja-innova" id="canales-tres">
            <div className="contenido-uno-innova ">
              <h1 className="fw-bolder textoCanales" style={{ color: "white" }}>
                Telefónicos
              </h1>
              <p className="" style={{ color: "white" }}>
                La comunicación telefónica es un elemento clave de nuestra
                plataforma, ya que es el medio más usado en la cultura de la
                región. Contamos con una plataforma automatizada, además de un
                equipo profesional experto, que nos hace un socio estratégico de
                gran valor, tanto para el soporte como para las ventas
                telefónicas de alto volumen.
              </p>
              <div className="container mt-5 pt-lg-5">
                <hr className="lineaLogosCanales" />
                <div className="logosCanales row logo-row">
                  <div className="col-md-6 logo-col">
                    <i className="logoFondo fa fa-phone fa-2x"></i>
                    <p className="tituloLogoCanales">Chat</p>
                  </div>
                  <div className="col-md-6 logo-col">
                    <i className="logoFondo fa fa-video-camera fa-2x"></i>
                    <p className="tituloLogoCanales">Apps Móviles</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="caja-innova" id="canales-cuatro">
            <div className="contenido-uno-innova ">
              <h1 className="fw-bolder textoCanales" style={{ color: "white" }}>
                Presenciales
              </h1>
              <p className="" style={{ color: "white" }}>
                Contamos con un grupo de trabajo profesional y eficiente, que
                sumados a nuestra plataforma tecnológica orientada a la
                innovación y el mejoramiento de procesos en nuestros aliados, lo
                que convierte el canal presencial en un componente esencial de
                nuestra oferta de servicios enfocada al crecimiento de negocio.
              </p>
              <div className="container mt-5 pt-lg-5">
                <hr className="lineaLogosCanales" />
                <div className="logosCanales row logo-row">
                  <div className="col-md-6 logo-col">
                    <i className="logoFondo fa fa-check-square-o fa-2x"></i>
                    <p className="tituloLogoCanales">Chat</p>
                  </div>
                  <div className="col-md-6 logo-col">
                    <i className="logoFondo fa fa-suitcase fa-2x"></i>
                    <p className="tituloLogoCanales">Apps Móviles</p>
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
