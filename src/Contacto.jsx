// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

// import required modules
import { Mousewheel, Pagination, EffectFade } from "swiper/modules";

export const Contacto = () => {
  return (
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
        <div className="caja-innova" id="innova-contacto">
          <div className="contenido-uno-innova">
            <h1 className="fw-bolder">Contáctenos</h1>
            <p>
              Estamos siempre dispuestos a ayudar a nuestros clientes y
              asociados a alcanzar sus objetivos. Si desea saber más sobre
              nuestros servicios, puede escribirnos o contactarnos por cualquier
              medio.
            </p>
            <h5 className="fw-bolder pt-3">Dirección</h5>
            <p>
              Centro Comercial Sabana Sur Oficina 23-3,
              <b> San José, Costa Rica</b>
            </p>
            <h5 className="fw-bolder pt-3">Teléfonos</h5>
            <p>
              6 354 4440
              <br />4 103 1200
            </p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div style={{ width: "100%" }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d982.5121037491515!2d-84.10677618383522!3d9.929926083187235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa0fcada4555555%3A0xe5cd243abcf194c3!2sCentro%20Comercial%20Sabana%20Sur!5e0!3m2!1ses!2sve!4v1690568122774!5m2!1ses!2sve"
            style={{ border: "0px" }}
            allowFullScreen
            loading="lazy"
            title="Google Map"
            className="iframe-contacto"
          />
        </div>
      </SwiperSlide>
    </Swiper>
  );
};
