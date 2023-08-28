// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/navigation";

// import required modules
import { Mousewheel, Pagination, EffectFade, Navigation } from "swiper/modules";
import "./Innova.css";

export const Innova = () => {
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
          <div className="caja-innova" id="innova-uno">
            <div className="contenido-uno-innova">
              <h1 className="fw-bolder">Somos Innova</h1>
              <p>
                Durante 20 años hemos sido líderes en la implementación exitosa
                de soluciones Contact Center y BPO en la región; Con el
                desarrollo tecnológico profundamente arraigado en nuestro ADN,
                somos ahora pioneros en la implementación de estrategias de
                transformación digital para empresas.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="caja-innova" id="innova-dos">
            <div className="fusion-builder-row fusion-row ">
              <h1 className="fw-bolder innovaTituloSegundoSliderMobile ">Nuestros pilares</h1>
              <p className="text-center innovaTextoSegundoSliderMobile">
                Gracias a la combinación de avanzada tecnología, el mejor equipo
                de trabajo y un profundo conocimiento de los diferentes modelos
                de negocio de nuestros aliados, hemos logrado transformar la
                forma en que las empresas abordan sus procesos con eficiencia y
                respaldo:
              </p>

              <div className="flips-innova innovaSegundoSliderPC">
                <div className="flip-box" id="flip-box-uno">
                  <div className="flip-box-inner">
                    <div className="flip-box-front">
                      <img
                        src="https://millenium.com.co/wp-content/uploads/2019/05/bkg-pilar-tecnologia.jpg"
                        alt="Paris"
                      />
                    </div>
                    <div className="flip-box-back px-3">
                      <div>
                        <h2 className="fw-bolder">Tecnología</h2>
                        <p>
                          Nos encontramos en un proceso permanente de
                          innovación, a través de herramientas de última
                          generación para llevar la transformación digital a
                          nuestros aliados.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flip-box" id="flip-box-dos">
                  <div className="flip-box-inner">
                    <div className="flip-box-front">
                      <img
                        src="https://millenium.com.co/wp-content/uploads/2019/05/bkg-pilar-humano-1.jpg"
                        alt="Paris"
                      />
                    </div>
                    <div className="flip-box-back px-3">
                      <div>
                        <h2 className="fw-bolder">Capital Humano</h2>
                        <p>
                          Además de esforzarnos por consolidar el mejor grupo de
                          trabajo para nuestros aliados y sus clientes, nos
                          encargamos de fomentar una cultura laboral positiva y
                          enfocada en el éxito.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flip-box" id="flip-box-tres">
                  <div className="flip-box-inner">
                    <div className="flip-box-front">
                      <img
                        src="https://millenium.com.co/wp-content/uploads/2019/05/bkg-pilar-procesos.jpg"
                        alt="Paris"
                      />
                    </div>
                    <div className="flip-box-back px-3">
                      <div>
                        <h2 className="fw-bolder">Procesos</h2>
                        <p>
                          Dos décadas de proyectos exitosos de la mano de
                          nuestros aliados nos han permitido desarrollar un
                          conocimiento profundo de la operación y gestión
                          empresarial eficiente.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flips-innova innovaSegundoSliderMobile">
                <Swiper
                  slidesPerView={1}
                  spaceBetween={0}
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
                      slidesPerView: 1,
                      spaceBetween: 20,
                    },
                    1024: {
                      slidesPerView: 3,
                      spaceBetween: 20,
                    },
                  }}
                >
                  <SwiperSlide>
                    <div className="flip-box" id="flip-box-uno">
                      <div className="flip-box-inner">
                        <div className="flip-box-front">
                          <img
                            src="https://millenium.com.co/wp-content/uploads/2019/05/bkg-pilar-tecnologia.jpg"
                            alt="Paris"
                          />
                        </div>
                        <div className="flip-box-back px-3">
                          <div>
                            <h2 className="fw-bolder">Tecnología</h2>
                            <p>
                              Nos encontramos en un proceso permanente de
                              innovación, a través de herramientas de última
                              generación para llevar la transformación digital a
                              nuestros aliados.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="flip-box" id="flip-box-dos">
                      <div className="flip-box-inner">
                        <div className="flip-box-front">
                          <img
                            src="https://millenium.com.co/wp-content/uploads/2019/05/bkg-pilar-humano-1.jpg"
                            alt="Paris"
                          />
                        </div>
                        <div className="flip-box-back px-3">
                          <div>
                            <h2 className="fw-bolder">Capital Humano</h2>
                            <p>
                              Además de esforzarnos por consolidar el mejor
                              grupo de trabajo para nuestros aliados y sus
                              clientes, nos encargamos de fomentar una cultura
                              laboral positiva y enfocada en el éxito.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="flip-box" id="flip-box-tres">
                      <div className="flip-box-inner">
                        <div className="flip-box-front">
                          <img
                            src="https://millenium.com.co/wp-content/uploads/2019/05/bkg-pilar-procesos.jpg"
                            alt="Paris"
                          />
                        </div>
                        <div className="flip-box-back px-3">
                          <div>
                            <h2 className="fw-bolder">Procesos</h2>
                            <p>
                              Dos décadas de proyectos exitosos de la mano de
                              nuestros aliados nos han permitido desarrollar un
                              conocimiento profundo de la operación y gestión
                              empresarial eficiente.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};
