/* eslint-disable react/prop-types */

const TestimonialsCardComponent = ({ cardData }) => {
  return (
    <div className="testimonials-card">
      <picture>
        <img
          src={cardData.image !== null ? cardData.image.original_image : ""}
          alt=""
        />
      </picture>

      <article>
        <div className="content">
          <h3 className="name">{cardData.title}</h3>
          <div
            className="desc"
            dangerouslySetInnerHTML={{ __html: cardData.description }}
          />
        </div>

        <div className="user-details">
          <div className="user-image">
            <img
              src={cardData.image !== null ? cardData.image.original_image : ""}
              alt=""
            />
          </div>
          <div className="user-name">{cardData.name}</div>
        </div>
      </article>
    </div>
  );
};

export default TestimonialsCardComponent;
