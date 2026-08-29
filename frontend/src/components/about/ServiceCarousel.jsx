import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { services } from "../../data/services.js";

/* The theme's `finance-carousel` from index.html, which ran on Owl
   Carousel. Swiper drives it here instead.

   The card is the theme's own: a bordered white panel with the icon on
   top, a 4px cyan rule under the copy, and four stacked bars that scale
   in with staggered delays on hover so the navy fills the card in bands.
   Styling lives in theme.css under `.fx-service-carousel`, because the
   theme scopes its version to `.homePageOne`, which this page is not. */

export default function ServiceCarousel() {
  return (
    <div className="fx-service-carousel">
      <Swiper
        modules={[Navigation]}
        navigation
        // Looping keeps both arrows live. Without it the previous arrow
        // sits greyed out on the first slide, which the theme's own
        // carousel never showed.
        loop
        spaceBetween={26}
        slidesPerView={1}
        breakpoints={{
          480: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1200: { slidesPerView: 4 },
        }}
      >
        {services.map((service) => (
          <SwiperSlide key={service.slug}>
            <div className="finance-wrapper">
              <div className="icon">
                <i className={`fa ${service.icon}`} aria-hidden="true"></i>
              </div>
              <div className="wrapper-content">
                <h4>
                  <Link to={service.path}>{service.title}</Link>
                </h4>
                <p>{service.excerpt}</p>
              </div>
              {/* Four bands, each a quarter of the card, that scale in on
                  hover. The theme's own mechanism, kept as-is. */}
              <div className="hover" aria-hidden="true">
                <span className="hover-one"></span>
                <span className="hover-two"></span>
                <span className="hover-three"></span>
                <span className="hover-four"></span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
