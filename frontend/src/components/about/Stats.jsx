import site from "../../config/site.js";
import useCountUp from "../../hooks/useCountUp.js";

/* The theme's `counting-section`. Its jQuery counter plugin is replaced by
   useCountUp, which starts when the row scrolls into view.

   A stat marked `placeholder` in site.js renders a dash rather than a
   number. These are factual claims about the business, and inventing a
   flattering figure would be putting words in the client's mouth. */

function Stat({ stat }) {
  const [ref, value] = useCountUp(stat.value);

  return (
    <div className="counting-wrapper" ref={ref}>
      <span className="icon pull-left">
        <img src={`/assets/images/counter/${stat.icon}`} alt="" />
      </span>
      <div className="content">
        <div className="count-description">
          <span className="timer">
            {stat.placeholder ? "—" : value}
            {stat.placeholder ? "" : stat.suffix}
          </span>
        </div>
        <p>{stat.label}</p>
      </div>
    </div>
  );
}

export default function Stats() {
  return (
    <section className="counting-section section-padding">
      <div className="container">
        <h2 className="hidden">By the numbers</h2>
        <div className="counting-pusher">
          {site.stats.map((stat) => (
            <Stat key={stat.label} stat={stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
