import { useContext } from "react";
import { AllDataContext } from "../../context/AllData.context";

const ContactInfosComponent = () => {
  const { contactDatas } = useContext(AllDataContext);

  return (
    <div className="contact-infos">
      <div className="infos-sec">
        <h3 className="title">MAIN OFFICE:</h3>
        <p>{contactDatas && contactDatas.branding.address}</p>

        <ul>
          <li>
            Tour & Trek Booking or Enquiry:{" "}
            <span>
              {" "}
              <a href={`tel:${contactDatas && contactDatas.branding.phone}`}>
                {contactDatas && contactDatas.branding.phone}
              </a>
            </span>
          </li>
          <li>
            Email:
            <span>
              {" "}
              <a href={`mailto:${contactDatas && contactDatas.branding.email}`}>
                {contactDatas && contactDatas.branding.email}
              </a>
            </span>
          </li>
        </ul>
      </div>

      <div className="map-sec">
        <iframe
          className="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d38650.61660921728!2d85.29230011149491!3d27.760023053489366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1855948df2a7%3A0x7b7a73f9df113cc3!2sMountain%20Go%20Trekking%20%26%20Expedition%20Pvt.%20Ltd!5e0!3m2!1sen!2snp!4v1684159237185!5m2!1sen!2snp"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactInfosComponent;
