import { useContext, useState } from "react";
import { apis } from "../../utils/apis";
import { AllDataContext } from "../../context/AllData.context";

const ContactsFormComponent = () => {
  const { setMessage } = useContext(AllDataContext);
  const [buttonLoading, setButtonLoading] = useState(false);
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setButtonLoading(true);

    if (
      formValues.name !== "" ||
      formValues.email !== "" ||
      formValues.subject !== "" ||
      formValues.message !== ""
    ) {
      apis
        .post("/send/message", {
          name: formValues.name,
          email: formValues.email,
          phone: formValues.phone,
          subject: formValues.subject,
          message: formValues.message,
        })
        .then((res) => {
          // console.log(res);
          if (res.status === 200) {
            setButtonLoading(false);
            setMessage("Your message is sent");
            setFormValues({
              ...formValues,
              name: "",
              email: "",
              phone: "",
              subject: "",
              message: "",
            });
          } else {
            setButtonLoading(false);
            setMessage("Something went wrong");
          }
        })
        .catch((err) => {
          console.log(err);
          setButtonLoading(false);
        });
    } else {
      alert("All fields are required");
      setButtonLoading(false);
    }
  };

  return (
    <div className="contacts-form">
      <div className="form-area">
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <div className="form-input">
              <label htmlFor="inputName">Name</label>
              <input
                type="text"
                id="inputName"
                name="name"
                onChange={(e) =>
                  setFormValues({ ...formValues, name: e.target.value })
                }
                value={formValues.name}
              />
            </div>

            <div className="form-input">
              <label htmlFor="inputEmail">Email</label>
              <input
                type="email"
                id="inputEmail"
                name="email"
                onChange={(e) =>
                  setFormValues({ ...formValues, email: e.target.value })
                }
                value={formValues.email}
              />
            </div>
          </div>

          <div className="input-group">
            <div className="form-input">
              <label htmlFor="inputPhone">
                Phone <span>(optional)</span>
              </label>
              <input
                type="number"
                id="inputPhone"
                name="phone"
                onChange={(e) =>
                  setFormValues({ ...formValues, phone: e.target.value })
                }
                value={formValues.phone}
              />
            </div>

            <div className="form-input">
              <label htmlFor="inputSubject">Subject </label>
              <input
                type="text"
                id="inputSubject"
                name="subject"
                onChange={(e) =>
                  setFormValues({ ...formValues, subject: e.target.value })
                }
                value={formValues.subject}
              />
            </div>
          </div>

          <div className="input-group">
            <div className="form-input">
              <label htmlFor="inputCommentRemarks">Comment/Remarks</label>
              <textarea
                name="message"
                cols="30"
                rows="7"
                id="inputCommentRemarks"
                onChange={(e) =>
                  setFormValues({ ...formValues, message: e.target.value })
                }
                value={formValues.message}
              ></textarea>
            </div>
          </div>

          <button className={`submit ${buttonLoading ? "active" : ""}`}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactsFormComponent;
