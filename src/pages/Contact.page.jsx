import { useEffect } from "react";
import ContactInfosComponent from "../components/Contacts/ContactInfos.component";
import ContactsFormComponent from "../components/Contacts/ContactsForm.component";
import SectionTitleComponent from "../components/Titles/SectionTitle.component";

const ContactPage = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <div className="contact-page">
      <section className="bg-color">
        <div className="wrapper">
          <ContactInfosComponent />
        </div>
      </section>

      <section >
        <div className="wrapper">
          <SectionTitleComponent title="Packages">
            Contact Us
          </SectionTitleComponent>
          <ContactsFormComponent />
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
