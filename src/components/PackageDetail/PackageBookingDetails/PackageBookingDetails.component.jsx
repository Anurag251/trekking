import { useContext, useEffect, useState } from "react";
import { apis } from "../../../utils/apis";
import { AllDataContext } from "../../../context/AllData.context";

/* eslint-disable react/prop-types */
const PackageBookingDetails = ({ selectedPackage }) => {
  const { setMessage } = useContext(AllDataContext);
  const [choosenPrice, setChoosenPrice] = useState(null);
  const [buttonLoading, setButtonLoading] = useState(false);
  const [formPopup, setformPopup] = useState(false);
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    phone: "",
    destination: "",
    dateOfTravel: "",
    noOfDays: "",
    noOfPerson: "",
    comment: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setButtonLoading(true);

    if (
      formValues.name !== "" ||
      formValues.email !== "" ||
      formValues.destination !== "" ||
      formValues.dateOfTravel !== "" ||
      formValues.noOfDays !== "" ||
      formValues.noOfPerson !== ""
    ) {
      apis
        .post("/booking", {
          name: formValues.name,
          email: formValues.email,
          phone: formValues.phone,
          destination: formValues.destination,
          dateoftravel: formValues.dateOfTravel,
          noofdays: formValues.noOfDays,
          noofperson: formValues.noOfPerson,
          comment: formValues.comment,
          trip_id: selectedPackage.id,
        })
        .then((res) => {
          // console.log(res);
          if (res.status === 200) {
            setButtonLoading(false);
            setMessage({
              message: true,
              title: "Thank You!!",
              type: "success",
              desc: "Your Package is booked",
            });
            setFormValues({
              ...formValues,
              name: "",
              email: "",
              phone: "",
              destination: "",
              dateOfTravel: "",
              noOfDays: "",
              noOfPerson: "",
              comment: "",
            });
          } else {
            setMessage({
              message: true,
              title: "Failed",
              type: "error",
              desc: "Something went wrong",
            });
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

  useEffect(() => {
    if (selectedPackage !== null) {
      setChoosenPrice(selectedPackage.price[0].value);
    }
  }, [selectedPackage]);

  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  return (
    <div className="package-booking-details">
      <div className="package-info-mobile">
        <div className="value">
          {selectedPackage !== null
            ? selectedPackage.price.map((price, idx) => (
                <button
                  className={`${price.value === choosenPrice ? "active" : ""}`}
                  key={idx}
                  onClick={() => {
                    setChoosenPrice(price.value);
                  }}
                >
                  {price.label}
                </button>
              ))
            : null}
        </div>

        <div className="package-info">
          <div className="title">Cost Per Person</div>
          <div className="package-price-area">US$ {choosenPrice}</div>
        </div>

        <button
          className="booknow-button"
          onClick={() => setformPopup(!formPopup)}
        >
          Book Now
        </button>
      </div>

      <div className="item package-pricing">
        <div className="package-head">
          <div className="title">Trip Date</div>
          <div className="value">{currentYear}</div>
        </div>

        <div className="package-info">
          <div className="title">Package Type</div>
          <div className="value">
            {selectedPackage !== null
              ? selectedPackage.price.map((price, idx) => (
                  <button
                    className={`${
                      price.value === choosenPrice ? "active" : ""
                    }`}
                    key={idx}
                    onClick={() => {
                      setChoosenPrice(price.value);
                    }}
                  >
                    {price.label}
                  </button>
                ))
              : null}
          </div>
        </div>

        <div className="package-info">
          <div className="title">Cost Per Person</div>
          <div className="package-price-area">US$ {choosenPrice}</div>
        </div>

        <div>
          {/* <div className="group">
            <div className="choose-package">
              <div className="name">Adults</div>
              <p>Over 18+</p>
            </div>

            <div className="button-group">
              <button>+</button>
              <div className="quantity">0</div>
              <button>-</button>
            </div>
          </div>

          <div className="group">
            <div className="choose-package">
              <div className="name">Adults</div>
              <p>Over 18+</p>
            </div>

            <div className="button-group">
              <button>+</button>
              <div className="quantity">0</div>
              <button>-</button>
            </div>
          </div>

          <div className="group">
            <div className="choose-package">
              <div className="name">Adults</div>
              <p>Over 18+</p>
            </div>

            <div className="button-group">
              <button>+</button>
              <div className="quantity">0</div>
              <button>-</button>
            </div>
          </div> */}

          {/* <div className="item">
          <div className="inner">
            <div className="title">Owner</div>

            <div className="owner">
              <img className="owner-image" src={ownerImage} alt="owner-image" />

              <div className="owner-info">
                <div className="name">nzan</div>
                <div className="since">Member Since 2023</div>
              </div>
            </div>

            <button className="question">Ask A Question</button>
          </div>
        </div> */}
        </div>

        <p className="info">Note: More than 6 persons please contact us.</p>
      </div>

      <div className={`form-area-for-popup ${formPopup ? "active" : ""}`}>
        <div
          className="form-popup-bg"
          onClick={() => setformPopup(false)}
        ></div>

        <div className="item booking-form">
          <div className="form-popup-close" onClick={() => setformPopup(false)}>
            <i className="fas fa-times"></i>
          </div>

          <div className="package-head">Booking Form</div>

          <form onSubmit={handleSubmit}>
            <div className="from-area">
              <div className="form-input-group">
                <div className="package-info">
                  <label htmlFor="inputName" className="form-label">
                    Name
                  </label>
                  <input
                    className="form-input"
                    id="inputName"
                    type="text"
                    onChange={(e) =>
                      setFormValues({ ...formValues, name: e.target.value })
                    }
                    name="name"
                    value={formValues.name}
                  />
                </div>

                <div className="package-info">
                  <label htmlFor="inputPhone" className="form-label">
                    Phone <span>(optional)</span>
                  </label>
                  <input
                    className="form-input"
                    id="inputPhone"
                    type="text"
                    onChange={(e) =>
                      setFormValues({ ...formValues, phone: e.target.value })
                    }
                    name="phone"
                    value={formValues.phone}
                  />
                </div>
              </div>

              <div className="form-input-group">
                <div className="package-info">
                  <label htmlFor="inputEmail" className="form-label">
                    E-mail
                  </label>
                  <input
                    className="form-input"
                    id="inputEmail"
                    type="text"
                    onChange={(e) =>
                      setFormValues({ ...formValues, email: e.target.value })
                    }
                    name="email"
                    value={formValues.email}
                  />
                </div>

                <div className="package-info">
                  <label htmlFor="inputDestination" className="form-label">
                    Destination
                  </label>
                  <input
                    className="form-input"
                    id="inputDestination"
                    type="text"
                    onChange={(e) =>
                      setFormValues({
                        ...formValues,
                        destination: e.target.value,
                      })
                    }
                    name="destination"
                    value={formValues.destination}
                  />
                </div>
              </div>

              <div className="form-input-group">
                <div className="package-info">
                  <label htmlFor="inputDateOfTravel" className="form-label">
                    Date of Travel
                  </label>
                  <input
                    className="form-input"
                    id="inputDateOfTravel"
                    type="text"
                    onChange={(e) =>
                      setFormValues({
                        ...formValues,
                        dateOfTravel: e.target.value,
                      })
                    }
                    name="dateOfTravel"
                    value={formValues.dateOfTravel}
                  />
                </div>

                <div className="package-info">
                  <label htmlFor="inputNoOfDays" className="form-label">
                    No of Days
                  </label>
                  <input
                    className="form-input"
                    id="inputNoOfDays"
                    type="text"
                    onChange={(e) =>
                      setFormValues({ ...formValues, noOfDays: e.target.value })
                    }
                    name="noOfDays"
                    value={formValues.noOfDays}
                  />
                </div>
              </div>

              <div className="package-info">
                <label htmlFor="inputNoOfPerson" className="form-label">
                  No of Person
                </label>
                <input
                  className="form-input"
                  id="inputNoOfPerson"
                  type="text"
                  onChange={(e) =>
                    setFormValues({ ...formValues, noOfPerson: e.target.value })
                  }
                  name="noOfPerson"
                  value={formValues.noOfPerson}
                />
              </div>

              <div className="package-info">
                <label htmlFor="inputCommentRemarks" className="form-label">
                  Comment/Remarks <span>(optional)</span>
                </label>
                <textarea
                  className="form-input"
                  id="inputCommentRemarks"
                  cols="50"
                  rows="3"
                  onChange={(e) =>
                    setFormValues({ ...formValues, comment: e.target.value })
                  }
                  name="comment"
                  value={formValues.comment}
                ></textarea>
              </div>

              <div className="book-now-button">
                <button className={`submit ${buttonLoading ? "active" : ""}`}>
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      {/*  <div className="item">
        <div className="package-informaitons">
          <div className="title">Information Contact</div>

          <ul>
            <li>
              <span>Email</span>
              <p>mountaingotrekking@gmail.com</p>
            </li>

            <li>
              <span>Website</span>
              <p>www.mountaingotrekking.com</p>
            </li>

            <li>
              <span>Phone</span>
              <p>+9779841809067</p>
            </li>

            <li>
              <span>Fax</span>
              <p>+977-5158446</p>
            </li>
          </ul>
        </div>
      </div> */}
    </div>
  );
};

export default PackageBookingDetails;
