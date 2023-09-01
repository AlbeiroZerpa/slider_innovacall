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
import pilar1 from "../public/tecnologia1.png";
import pilar2 from "../public/tecnologia2.png";
import pilar3 from "../public/tecnologia.png";

export const Innova = () => {
  return (
    <>
      <Swiper
        direction={"vertical"}
        slidesPerView={1}
        spaceBetween={10}
        mousewheel={true}
        effect="fade"
        pagination={{
          clickable: true,
        }}
        modules={[Mousewheel, Pagination, EffectFade]}
        className="mySwiper-Innova"
      >
        <SwiperSlide>
          <div className="caja-innova" id="innova-uno">
            <div className="contenido-uno-innova">
              <h1 className="fw-bolder">Somos Innovacall</h1>
              <p>
                Somos un call center con más de 3 años de experiencia en el
                mercado, ofreciendo soluciones integrales de atención al
                cliente, ventas y soporte técnico.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="caja-innova" id="innova-dos">
            <div className="fusion-builder-row fusion-row ">
              <h1 className="fw-bolder innovaTituloSegundoSliderMobile ">
                Nuestros pilares
              </h1>
              <p className="text-center innovaTextoSegundoSliderMobile">
                Somos una empresa que brinda soluciones a medida para mejorar
                los procesos de nuestros socios, empleando tecnología avanzada,
                un personal altamente capacitado y un profundo conocimiento de
                las demandas y metas de cada sector.
              </p>

              <div className="flips-innova innovaSegundoSliderPC">
                <div className="flip-box" id="flip-box-uno">
                  <div className="flip-box-inner">
                    <div className="flip-box-front">
                      <img src={pilar1} alt="Paris" />
                    </div>
                    <div className="flip-box-back px-3">
                      <div>
                        <h2 className="fw-bolder">Tecnología</h2>
                        <p>
                          Es un factor clave para el desarrollo de las
                          organizaciones, por eso ofrecemos soluciones digitales
                          a medida que se adaptan a las necesidades del cliente.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flip-box" id="flip-box-dos">
                  <div className="flip-box-inner">
                    <div className="flip-box-front">
                      <img src={pilar2} alt="Paris" />
                    </div>
                    <div className="flip-box-back px-3">
                      <div>
                        <h2 className="fw-bolder">Capital Humano</h2>
                        <p>
                          Es el recurso más valioso que tenemos, ya que son las
                          personas las que aportan su talento y compromiso a
                          cada proyecto.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flip-box" id="flip-box-tres">
                  <div className="flip-box-inner">
                    <div className="flip-box-front">
                      <img src={pilar3} alt="Paris" />
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
                    <div className="flip-box" id="flip-box-uno">
                      <div className="flip-box-inner">
                        <div className="flip-box-front">
                          <img src={pilar1} alt="Paris" />
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
                          <img src={pilar2} alt="Paris" />
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
                          <img src={pilar3} alt="Paris" />
                        </div>
                        <div className="flip-box-back px-3">
                          <div>
                            <h2 className="fw-bolder">Procesos</h2>
                            <p>
                              Hemos trabajado con nuestros aliados en proyectos
                              exitosos que nos han permitido adquirir una
                              experiencia profunda en laoperación y gestión
                              eficiente de las empresas.
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
