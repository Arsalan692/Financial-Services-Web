import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";

/* Replaces Revolution Slider.

   The template drove this hero with ~500 KB of licensed jQuery plugin,
   animating each line through `data-frames` strings. The visible result
   is a full-bleed photo, a headline, a line of body copy and two
   buttons — which Swiper does in a fraction of the weight, with no
   extra licence and no jQuery.

   Slide styling lives in theme.css under `.fx-hero`, because the
   theme's own hero CSS targets Revolution's `tp-*` class names. */

const slides = [
  {
    image: "/assets/images/slider/slider-7.jpg",
    heading: "Your books, closed on time. Every time.",
    body: "Payroll, bookkeeping, tax filing and reconciliation — worked from your own records, not a reconstruction of them.",
    primary: { label: "Financial Services", to: "/services/financial" },
    secondary: { label: "Talk to us", to: "/contact" },
  },
  {
    image: "/assets/images/slider/slider-4.jpg",
    heading: "Pipeline you can actually predict",
    body: "We find the businesses worth talking to and hand your team qualified conversations, not raw lists.",
    primary: { label: "B2B Lead Generation", to: "/services/b2b" },
    secondary: { label: "Talk to us", to: "/contact" },
  },
  {
    // Generated rather than taken from the theme: nothing the template
    // ships reads as web work. Composed with its left half open, because
    // the headline and buttons sit there.
    image: "/assets/generated/hero-digital.jpg",
    // This one needs a scrim; the theme's two do not. Its left half is a
    // bright window wall, measuring 1.18:1 against white text where the
    // headline sits — effectively invisible. The theme's own slides are
    // darker there (1.98:1 and 2.10:1) and were left alone deliberately.
    scrim: true,
    heading: "A site that works on every screen",
    body: "Designed, built and kept online — domain, hosting and certificates included, so nothing lapses quietly.",
    primary: { label: "Design & Development", to: "/services/digital" },
    secondary: { label: "Talk to us", to: "/contact" },
  },
];

export default function Hero() {
  return (
    <section className="slider-section fx-hero">
      <h2 className="hidden">Introduction</h2>

      <Swiper
        modules={[Autoplay, EffectFade, Pagination, Navigation]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        speed={800}
        loop
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation
        a11y={{ enabled: true }}
        className="fx-hero-swiper"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.heading}>
            <div
              className={`fx-hero-slide${
                slide.scrim ? " fx-hero-slide--scrim" : ""
              }`}
            >
              {/* The photo is its own layer so it can drift slowly while
                  the slide is active, the way the template's Ken Burns
                  extension did. */}
              <div
                className="fx-hero-bg"
                style={{ backgroundImage: `url(${slide.image})` }}
              />
              <div className="container">
                <div className="fx-hero-content">
                  <h1 className="fx-hero-heading">{slide.heading}</h1>
                  <p className="fx-hero-body">{slide.body}</p>
                  <div className="fx-hero-actions">
                    <Link to={slide.primary.to} className="btn btn-primary">
                      {slide.primary.label}
                    </Link>
                    <Link
                      to={slide.secondary.to}
                      className="btn btn-primary color-bg"
                    >
                      {slide.secondary.label}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
