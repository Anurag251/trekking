import { useContext } from "react";
import { AllDataContext } from "../../context/AllData.context";

const HeaderTopComponent = () => {
  const { contactDatas } = useContext(AllDataContext);
  return (
    <div className="header-top">
      <div className="wrapper">
        <ul>
          <li>
            <i className="fas fa-phone"></i>
            <a href={`tel:${contactDatas && contactDatas.branding.phone}`}>
              {contactDatas && contactDatas.branding.phone}
            </a>
          </li>
          <li>
            <i className="fas fa-envelope"></i>{" "}
            <a href={`mailto:${contactDatas && contactDatas.branding.email}`}>
              {contactDatas && contactDatas.branding.email}
            </a>
          </li>
          {/* <li>
            Select Language <i className="fas fa-angle-down"></i>
          </li> */}
       {/*    <li>
            <div id="google_translate_element"></div>
          </li> */}
        </ul>
      </div>
    </div>
  );
};

export default HeaderTopComponent;
