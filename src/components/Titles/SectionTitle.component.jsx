/* eslint-disable react/prop-types */
const SectionTitleComponent = ({ children, title }) => {
  return (
    <div className="sec-title">
      <h6>{title}</h6>
      <h3>{children}</h3>
    </div>
  );
};

export default SectionTitleComponent;
