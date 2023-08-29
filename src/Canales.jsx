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
            <div className="contenido-uno-innova">
              <h1 className="fw-bolder">Canales</h1>
              <p>
                A través de los canales suceden las interacciones entre nuestros
                Aliados y sus clientes finales. Buscamos generar un cubrimiento
                total de los clientes finales con una experiencia de usuario
                final enfocada al éxito, basada en la consistencia y el
                constante mejoramiento de procesos.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="caja-innova" id="canales-dos">
            <div className="contenido-uno-innova">
              <h1 className="fw-bolder" style={{ color: "white" }}>
                Digitales
              </h1>
              <p style={{ color: "white" }}>
                La multicanalidad digital permite desarrollar una experiencia
                omnipresente, consolidada, y personalizada según las
                expectativas de cada cliente. Con una plataforma que integra
                inteligencia artificial (IA), y consolida procesos e
                información, logramos brindar un nivel de servicio incomparable,
                mientras que maximizamos la eficiencia en costo y gestión para
                nuestros aliados.
              </p>
              <div className="container mt-4">
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
            <div className="contenido-uno-innova">
              <h1 className="fw-bolder" style={{ color: "white" }}>
                Telefónicos
              </h1>
              <p style={{ color: "white" }}>
                Uno de los componentes más importantes de nuestra plataforma,
                debido a la prevalencia de este medio en la cultura de la
                región. Nuestra experiencia de 20 años y nuestra plataforma
                automatizada, sumada a un equipo profesional experto, nos
                convierte en un aliado de alto valor estratégico, tanto en el
                soporte como en los procesos de ventas telefónicas de alto
                volumen.
              </p>
              <div className="container mt-5">
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
            <div className="contenido-uno-innova">
              <h1 className="fw-bolder" style={{ color: "white" }}>
                Presenciales
              </h1>
              <p style={{ color: "white" }}>
                Contamos con un grupo de trabajo profesional y eficiente, que
                sumados a nuestra plataforma tecnológica orientada hacia la
                innovación y el mejoramiento de procesos en nuestros aliados, lo
                que convierte el canal presencial en un componente esencial de
                nuestra oferta de servicios enfocada al crecimiento de negocio.
              </p>
              <div className="container mt-5">
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
