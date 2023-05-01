import image from "../../assets/images/card3.png";

const TestimonialsCardComponent = () => {
  return (
    <div className="testimonials-card">
      <picture>
        <img src={image} alt="" />
      </picture>

      <article>
        <div className="content">
          <h3 className="name">Perfect trekking crew</h3>
          <p className="desc">
            Preparing and back office: almost perfect (except little remarks,
            see below Guiding could not be better, perfect Trekking crew: could
            no Preparing and back office: almost perfect (except little remarks:
            could not be better, perfect Trekking crew: could no Preparing and
            back office: almost perfect (except little remarks, see below
            Guiding (Namgyal): could not be better, perfect Trekking crew: could
            no ...
          </p>
        </div>

        <div className="user-details">
          <div className="user-image">
            <img src={image} alt="" />
          </div>
          <div className="user-name">Werner Fuschberger, Switzerland</div>
        </div>
      </article>
    </div>
  );
};

export default TestimonialsCardComponent;
