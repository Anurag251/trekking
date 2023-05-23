/* eslint-disable react/no-unescaped-entities */
import { useEffect } from "react";
import TestimonialsComponent from "../components/Testimonials/Testimonials.component";

const TestimonialsPage = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <div className="testimonial-page">
      <section>
        <div className="wrapper">
          <TestimonialsComponent />
        </div>
      </section>
    </div>
  );
};

export default TestimonialsPage;
