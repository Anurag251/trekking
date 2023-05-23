import { useContext } from "react";
import { AllDataContext } from "../context/AllData.context";

// eslint-disable-next-line react/prop-types
const SuccessMessageComponent = () => {
  const { message, setMessage } = useContext(AllDataContext);
  return (
    <div className={`success-message ${message !== "" ? "active" : ""}`}>
      <div className="message-box">
        <div className="message-icon">
          <i className="fas fa-check"></i>
        </div>

        <div className="message-title">Thank you!!!</div>

        <div className="message-content">{message}</div>

        <button className="message-close-button" onClick={() => setMessage("")}>
          Close
        </button>
      </div>
    </div>
  );
};

export default SuccessMessageComponent;
